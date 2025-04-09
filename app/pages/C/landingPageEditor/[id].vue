<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { ArrowRedo16Filled, ArrowUndo16Filled, Code24Filled, TextAlignJustify20Filled, TextAlignLeft16Filled, TextAlignRight16Filled, TextBold24Filled, TextBulletListLtr16Filled, TextHeader124Filled, TextHeader220Filled, TextHeader324Filled, TextItalic24Filled, TextNumberListLtr16Filled, TextParagraph16Filled, TextQuote20Filled, TextStrikethrough24Filled } from '@vicons/fluent'
import { useLandingPageApi } from '~/apis/useLandingPageApi'

const route = useRoute('C-landingPageEditor-id')

const editor = ref()

const state = ref({
  data: {
    title: '',
    description: '',
    isCustom: false,
    isCustomId: '',
    isActive: false,
    updatedBy: '',
    lastEditVisited: '',
    html: '',
  },
})

const {
  data: landingPageResponse,
  refresh: landingPageRequset,
} = await useLandingPageApi.getInfoById({
  landingPageId: route.params.id,
})

const {
  execute: EditRequest,
  status: EditStatus,
} = await useLandingPageApi.editInfoById({
  query: {
    landingPageId: route.params.id,
  },
  body: state.value.data,
})

const onSave = async () => {
  state.value.data.html = editor?.value?.getHTML()
  await nextTick(() => {
    EditRequest()
    landingPageRequset()
  })

  if (EditStatus.value === 'success') {
    // eslint-disable-next-line no-alert
    alert('保存成功')
    return
  }

  if (EditStatus.value === 'error') {
    // eslint-disable-next-line no-alert
    alert('保存失败')
  }
}

const feature = [
  {
    type: 'feature',
    icon: TextHeader124Filled,
    title: 'H1',
    action: () => editor?.value?.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: () => editor?.value?.isActive('heading', { level: 1 }),
    isDisabled: () => false,
  },
  {
    type: 'feature',
    icon: TextHeader220Filled,
    title: 'H2',
    action: () => editor?.value?.chain().focus().toggleHeading({ level: 2 }).run(),
    isActive: () => editor?.value?.isActive('heading', { level: 2 }),
    isDisabled: () => false,
  },
  {
    type: 'feature',
    icon: TextHeader324Filled,
    title: 'H3',
    action: () => editor?.value?.chain().focus().toggleHeading({ level: 3 }).run(),
    isActive: () => editor?.value?.isActive('heading', { level: 3 }),
    isDisabled: () => false,
  },
  {
    type: 'feature',
    icon: TextParagraph16Filled,
    title: 'paragraph',
    action: () => editor?.value?.chain().focus().setParagraph().run(),
    isActive: () => editor?.value?.isActive('paragraph'),
    isDisabled: () => false,
  },
  {
    type: 'feature',
    icon: TextBold24Filled,
    title: 'Bold',
    action: () => editor?.value?.chain().focus().toggleBold().run(),
    isActive: () => editor?.value?.isActive('bold'),
    isDisabled: () => !editor?.value?.can().chain().focus().toggleBold().run(),
  },
  {
    type: 'feature',
    icon: TextItalic24Filled,
    title: 'Italic',
    action: () => editor?.value?.chain().focus().toggleItalic().run(),
    isActive: () => editor?.value?.isActive('italic'),
    isDisabled: () => !editor?.value?.can().chain().focus().toggleItalic().run(),
  },

  {
    type: 'feature',
    icon: TextStrikethrough24Filled,
    title: 'Strike',
    action: () => editor?.value?.chain().focus().toggleStrike().run(),
    isActive: () => editor?.value?.isActive('strike'),
    isDisabled: () => !editor?.value?.can().chain().focus().toggleStrike().run(),
  },
  {
    type: 'feature',
    icon: Code24Filled,
    title: 'Code',
    action: () => editor?.value?.chain().focus().toggleCode().run(),
    isActive: () => editor?.value?.isActive('code'),
    isDisabled: () => !editor?.value?.can().chain().focus().toggleCode().run(),
  },
  {
    type: 'feature',
    icon: TextQuote20Filled,
    title: 'Blockquote',
    action: () => editor?.value?.chain().focus().toggleBlockquote().run(),
    isActive: () => editor?.value?.isActive('blockquote'),
    isDisabled: () => false,
  },
  {
    type: 'feature',
    icon: TextBulletListLtr16Filled,
    title: 'Bullet List',
    action: () => editor?.value?.chain().focus().toggleBulletList().run(),
    isActive: () => editor?.value?.isActive('bulletList'),
    isDisabled: () => false,
  },
  {
    type: 'feature',
    icon: TextNumberListLtr16Filled,
    title: 'orderedList',
    action: () => editor?.value?.chain().focus().toggleOrderedList().run(),
    isActive: () => editor?.value?.isActive('orderedList'),
    isDisabled: () => false,
  },
  {
    type: 'feature',
    icon: TextAlignLeft16Filled,
    title: 'setTextAlignLeft',
    action: () => editor?.value?.chain().focus().setTextAlign('left').run(),
    isActive: () => editor?.value?.isActive({ textAlign: 'left' }),
    isDisabled: () => false,
  },
  {
    type: 'feature',
    icon: TextAlignJustify20Filled,
    title: 'setTextAlignCenter',
    action: () => editor?.value?.chain().focus().setTextAlign('center').run(),
    isActive: () => editor?.value?.isActive({ textAlign: 'center' }),
    isDisabled: () => false,
  },
  {
    type: 'feature',
    icon: TextAlignRight16Filled,
    title: 'setTextAlignRight',
    action: () => editor?.value?.chain().focus().setTextAlign('right').run(),
    isActive: () => editor?.value?.isActive({ textAlign: 'right' }),
    isDisabled: () => false,
  },
  {
    type: 'feature',
    icon: ArrowUndo16Filled,
    title: 'undo',
    action: () => editor?.value?.chain().focus().undo().run(),
    isActive: () => false,
    isDisabled: () => !editor?.value?.can().chain().focus().undo().run(),
  },
  {
    type: 'feature',
    icon: ArrowRedo16Filled,
    title: 'redo',
    action: () => editor?.value?.chain().focus().redo().run(),
    isActive: () => false,
    isDisabled: () => !editor?.value?.can().chain().focus().redo().run(),
  },
]

const init = () => {
  const { data } = state.value
  data.title = landingPageResponse?.value?.landingPage?.title || ''
  data.description = landingPageResponse?.value?.landingPage?.description || ''
  data.isCustom = landingPageResponse?.value?.landingPage?.isCustom || false
  data.isCustomId = landingPageResponse?.value?.landingPage?.isCustomId || ''
  data.isActive = landingPageResponse?.value?.landingPage?.isActive || false
  data.updatedBy = landingPageResponse?.value?.landingPage?.updatedBy || ''
  data.lastEditVisited = landingPageResponse?.value?.landingPage?.lastEditVisited || ''
  editor.value = new Editor({
    content: landingPageResponse?.value?.landingPage?.html || '',
    extensions: [StarterKit],
  })
}

const leave = () => editor.value.destroy()

onMounted(init)
onBeforeUnmount(leave)
</script>

<template>
  <div>
    <p>Title: {{ landingPageResponse?.landingPage?.title }}</p>
    <p>Description: {{ landingPageResponse?.landingPage?.description }}</p>
    <p>isCustom: {{ landingPageResponse?.landingPage?.isCustom }}</p>
    <p>isCustomId: {{ landingPageResponse?.landingPage?.isCustomId }}</p>
    <p>isActive: {{ landingPageResponse?.landingPage?.isActive }}</p>
    <p>updatedBy: {{ landingPageResponse?.landingPage?.updatedBy }}</p>
    <p>lastEditVisited: {{ landingPageResponse?.landingPage?.lastEditVisited }}</p>

    <div class="flex flex-wrap gap-[5px] p-[10px] bg-black rounded-t-md">
      <button
        v-for="button in feature"
        :key="button.title"
        :disabled="button.isDisabled()"
        :title="button.title"
        class="bg-black text-white flex items-center justify-center cursor-pointer"
        :class="[
          button.isActive() && 'bg-[rgba(103,103,103,0.899)]',
          button.isDisabled() && 'cursor-not-allowed opacity-50',
        ]"
        @click="button.action"
      >
        <component
          :is="button.icon"
          class="w-4 h-4"
        />
      </button>
    </div>

    <EditorContent :editor="editor" />

    <button
      class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      :loading="EditStatus === 'pending'"
      @click="onSave"
    >
      保存
    </button>

    <div class="mt-2 text-sm text-gray-300 whitespace-pre-wrap">
      {{ state.data.html }}
    </div>
  </div>
</template>
