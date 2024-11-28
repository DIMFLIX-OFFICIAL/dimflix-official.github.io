<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import RocketIcon from "@/components/icons/RocketIcon.vue";
import StarsIcon from "@/components/icons/StarsIcon.vue";
import AboutMeIcon from "@/components/icons/AboutMeIcon.vue";
import PortfolioIcon from "@/components/icons/PortfolioIcon.vue";
import ArticlesIcon from "@/components/icons/ArticlesIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import VkIcon from "@/components/icons/VkIcon.vue";
import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import ResumeIcon from "@/components/icons/ResumeIcon.vue";

import DiamondLine from "@/components/DiamondLine.vue";
import NavBtn from "@/components/NavBtn.vue";
import SocialMediaBtn from "@/components/SocialMediaBtn.vue";

const { t, locale } = useI18n();

const formattedDescription = () => {
  const description = t('about.aboutme.description');
  return description.replace(/<span class="highlight">/g, '<span class="highlight">').replace(/<\/span>/g, '</span>');
};
</script>

<template>
	<div class="about-page">
		<div class="aboutme-container">
			<div class="container-title">
				<p v-html="t('about.aboutme.title')"></p>
			</div>
			
			<div class="img-and-text bm20">
				<img class="photo" src="@/assets/my-photo.jpg">
				<div class="text">
					<h4 v-html="t('about.aboutme.hello')"></h4>
					<h2 v-html="t('about.aboutme.name')"></h2>
					<p v-html="t('about.aboutme.description')"></p>
				</div>
			</div>

			<DiamondLine />
			
			<div class="stats">
				<div class="stat">
					<p class="count">03</p>
					<p class="label" v-html="t('about.aboutme.stats.experiance')"></p>
				</div>
				<div class="stat">
					<p class="count">50+</p>
					<p class="label" v-html="t('about.aboutme.stats.projects')"></p>
				</div>
				<div class="stat">
					<p class="count">05</p>
					<p class="label" v-html="t('about.aboutme.stats.hackathons')"></p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.about-page {
	width: 100%;
	height: 100vh;
	max-width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--bg-color);
	color: var(--text-color);
	gap: 150px;
	padding: 100px 20%;
	box-sizing: border-box;
	overflow: scroll;
}

.aboutme-container {
	width: 100%;
	max-width: 1050px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	background-color: var(--sbg1-color);
	border-radius: 15px;
	position: relative;
	padding: 50px 20px 20px 20px;

	.img-and-text {
		max-width: 100%;
		max-height: 100%;
		display: flex;
		gap: 30px;
		box-sizing: border-box;
		align-items: center;
		
		.photo {
			max-height: 500px; /* Максимальная высота изображения */
			height: auto; /* Сохраняем пропорции */
			border-radius: 15px;
			object-fit: cover;
		}
		
		h4 {
			margin-bottom: 0;
		}

		h2 {
			margin-top: 15px;
		}

		.text {
			color: var(--text-color);
			font-family: 'Aldrich', sans-serif;
			font-size: 20px;
		}
	}

	.stats {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 30px;

		.stat {
			display: flex;
			align-items: center;
			gap: 10px;

			.count {
				font-family: "Rubik Doodle Shadow", sans-serif;
				font-size: 90px;
				margin: 0;
			}

			.label {
				font-family: 'Aldrich', sans-serif;
				font-size: 18px;
				margin: 0;
			}
		}
	}
}

.container-title {
	position: absolute;
	top: -35px;
	left: 35px;
	text-align: center;
    padding: 10px 10px;
	border-radius: 15px;
	background-color: var(--sbg2-color);
	height: 50px;
	width: 25%;
	max-width: 200px;
	display: flex;
	align-items: center;
	justify-content: center;

	p {
		font-family: "Rubik Doodle Shadow", sans-serif;
		font-size: 2em;
		margin: 0;
		padding: 0;
		color: var(--text-color);
	}
}

.bm20 {
	margin-bottom: 20px;
}

.bm30 {
	margin-bottom: 30px;
}

.highlight {
	display: inline-flex;
	border-radius: 10px;
	align-items: center;
	padding: 3px 10px 3px 10px;
	gap: 5px;

	background-image: linear-gradient(to right,
			var(--rosewater-color),
			var(--flamingo-color),
			var(--pink-color),
			var(--mauve-color),
			var(--red-color),
			var(--maroon-color),
			var(--peach-color),
			var(--yellow-color),
			var(--green-color),
			var(--teal-color),
			var(--sky-color),
			var(--sapphire-color),
			var(--blue-color),
			var(--lavender-color));

	.text {
		font-family: "PressStart2P";
		font-size: 12px;
		color: var(--button-color);
	}
}
</style>
