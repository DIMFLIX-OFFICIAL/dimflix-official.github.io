<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import ArticleCard from '@/components/ArticleCard.vue'
import { getArticlesMeta } from '@/utils/articles'
import type { ArticleMeta } from '@/types/articles'

const { t, locale } = useI18n()
const articles = ref<ArticleMeta[]>([])
const loading = ref(true)

const loadArticles = async () => {
    try {
        loading.value = true
        articles.value = await getArticlesMeta(locale.value)
    } catch (error) {
        console.error('Error loading articles:', error)
        articles.value = []
    } finally {
        loading.value = false
    }
}

watch(locale, loadArticles, { immediate: true })
</script>

<template>
    <div class="articles-page">
        <h1 class="page-title">{{ t('articles.title') }}</h1>
        <div v-if="loading" class="loading">Loading...</div>
        <div v-else class="articles-grid">
            <ArticleCard class="card" v-for="article in articles" :key="article.slug" :article="article" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.articles-page {
    width: 100%;
	height: 100vh;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--bg-color);
	color: var(--text-color);
	padding: 3rem 5vw 50px 5vw;
	box-sizing: border-box;
	overflow: scroll;

    .page-title {
        color: var(--text-color);
        margin-bottom: 3rem;
    }

    .articles-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(400px, 1fr));
        gap: 1.5rem;
        padding: 0 1rem;
        transition: all .3s ease;
        
        .card {
            width: 100%;
            transition: all .3s ease;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }

    .loading {
        text-align: center;
        padding: 2rem;
        color: var(--text-color);
    }
}
</style>