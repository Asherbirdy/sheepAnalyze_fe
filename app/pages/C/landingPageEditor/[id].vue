<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

const editor = ref()

const state = ref({
  data: {
    editorHTML: null,
  },
})

const getHTML = () => state.value.data.editorHTML = editor?.value?.getHTML()

const init = () => {
  editor.value = new Editor({
    content: '<p>I\'m running Tiptap with Vue.js. 🎉</p>',
    extensions: [StarterKit],
  })
}

const leave = () => editor.value.destroy()

onMounted(init)
onBeforeUnmount(leave)
</script>

<template>
  <div>
    <EditorContent :editor="editor" />
    <button @click="getHTML">
      getHTML
    </button>
    {{ state.data.editorHTML }}
  </div>
</template>
