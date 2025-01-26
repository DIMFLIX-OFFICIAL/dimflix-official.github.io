<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { ArticleMeta } from '@/types/articles'

const props = defineProps<{ article: ArticleMeta }>()
const { t, locale } = useI18n();
const router = useRouter()

const formattedDate = computed(() => {
  const date = new Date(props.article.date)
  
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${day}-${month}-${year} ${hours}:${minutes}`
})

const navigateToArticle = () => {
    router.push({ name: 'Article', params: { id: props.article.slug } })
}
</script>

<template>
    <article class="article-card" @click="navigateToArticle">
        <div class="card-content">
            <h3 class="title">{{ article.title }}</h3>
            <p class="excerpt">{{ article.excerpt }}</p>
            <div class="meta">
                <time v-if="article.date">{{ formattedDate }}</time>
                <span class="read-more">{{ t("articles.readMore") }}</span>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.article-card {
    width: 100%;
    background-color: var(--bg-color);
    border: 2px solid var(--sbg1-color);
    border-radius: 8px;
    padding: 1.5rem;
    transition: all .3s;
    cursor: pointer;

    .title {
        margin: 0 0 0.75rem;
        color: var(--text-color);
        font-size: 1.25rem;
    }

    .excerpt {
        margin: 0 0 1rem;
        color: var(--text-color);
        line-height: 1.5;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;
        color: var(--text-color);
    }

    .read-more {
        font-weight: 500;
        color: var(--mauve-color);
    }
}

.article-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>