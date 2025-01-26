<template>
  <div v-if="content" class="markdown-content" v-html="content"></div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'
import matter from 'gray-matter'

const props = defineProps<{
  articleName: string
}>()

const { locale } = useI18n()
const md = new MarkdownIt()
const content = ref<string | null>(null)

const loadMarkdown = async (): Promise<void> => {
  try {
    const rawModule = await import(
      /* webpackChunkName: "content" */
      `@/assets/articles/${locale.value}/${props.articleName}.md`
    )

    // Парсим Front Matter и получаем чистый контент
    const { content: markdownContent } = matter(rawModule.default)

    // Рендерим только основной контент без Front Matter
    content.value = DOMPurify.sanitize(md.render(markdownContent))
  } catch (e) {
    content.value = null
  }
}

watch([locale, () => props.articleName], loadMarkdown)
onMounted(loadMarkdown)
</script>

<style lang="css">
.markdown-content {
  color: var(--text-color);
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

.markdown-content h1 {
  font-size: 2em;
  border-bottom: 2px solid var(--text-color);
  padding-bottom: 0.3em;
}

.markdown-content h2 {
  font-size: 1.5em;
  margin-top: 1.5em;
}

.markdown-content ul {
  padding-left: 1.5em;
}
</style>