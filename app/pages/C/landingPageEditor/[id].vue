<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

const editor = ref()
const editorHTML = ref('')

const getHTML = () => {
  editorHTML.value = editor?.value?.getHTML()
}

const init = () => {
  editor.value = new Editor({
    content: '<p>I\'m running Tiptap with Vue.js. 🎉</p>',
    extensions: [StarterKit],
  })
}

const destroy = () => {
  editor.value.destroy()
}

onMounted(init)
onBeforeUnmount(destroy)
</script>

<template>
  <div>
    <EditorContent :editor="editor" />
    <button @click="getHTML">
      getHTML
    </button>
    {{ editorHTML }}
  </div>
</template>
