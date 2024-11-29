<script setup>
import { useI18n } from 'vue-i18n';
import DiamondLine from "@/components/DiamondLine.vue";

import { VueMarqueeSlider } from 'vue3-marquee-slider';
import '../../node_modules/vue3-marquee-slider/dist/style.css'

import Capacitor from '@/components/icons/tech-stack/Capacitor.vue';
import Css from '@/components/icons/tech-stack/Css.vue';
import Django from '@/components/icons/tech-stack/Django.vue';
import Docker from '@/components/icons/tech-stack/Docker.vue';
import FastAPI from '@/components/icons/tech-stack/FastAPI.vue';
import Html from '@/components/icons/tech-stack/Html.vue';
import Ionic from '@/components/icons/tech-stack/Ionic.vue';
import Java from '@/components/icons/tech-stack/Java.vue';
import Js from '@/components/icons/tech-stack/Js.vue';
import MongoDB from '@/components/icons/tech-stack/MongoDB.vue';
import MySQL from '@/components/icons/tech-stack/MySQL.vue';
import Nginx from '@/components/icons/tech-stack/Nginx.vue';
import Postgresql from '@/components/icons/tech-stack/Postgresql.vue';
import Python from '@/components/icons/tech-stack/Python.vue';
import Qt from '@/components/icons/tech-stack/Qt.vue';
import Rust from '@/components/icons/tech-stack/Rust.vue';
import Ts from '@/components/icons/tech-stack/Ts.vue';
import Vue from '@/components/icons/tech-stack/Vue.vue';
import Aiogram from '@/components/icons/tech-stack/Aiogram.vue';
import Pyrogram from '@/components/icons/tech-stack/Pyrogram.vue';
import Tauri from '@/components/icons/tech-stack/Tauri.vue';
import Selenium from '@/components/icons/tech-stack/Selenium.vue';
import Aiohttp from '@/components/icons/tech-stack/Aiohttp.vue';
import Ngrok from '@/components/icons/tech-stack/Ngrok.vue';
import Flask from '@/components/icons/tech-stack/Flask.vue';

const { t, locale } = useI18n();
</script>

<template>
	<div class="page">
		<div class="aboutme-container">
			<div class="containers-title">
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
		<div class="techstack-container">
			<div class="containers-title">
				<p v-html="t('about.techStack.title')"></p>
			</div>
      
			<vue-marquee-slider id="carousel1" :speed="15000" :width="80" :space="30">
				<Python/>
				<Java/>
				<Rust/>
				<Html/>
				<Css/>
				<Js/>
				<Ts/>
				<Vue/>
				<Postgresql/>
				<Qt/>
				<Tauri/>
				<Aiogram/>
				<Pyrogram/>

			</vue-marquee-slider>

			<vue-marquee-slider id="carousel2" :speed="15000" :width="80" :space="30" reverse>
				<FastAPI/>
				<Django/>
				<Flask/>
				<Aiohttp/>
				<Selenium/>
				<Ionic/>
				<Capacitor/>
				<MongoDB/>
				<MySQL/>
				<Docker/>
				<Nginx/>
				<Ngrok/>
			</vue-marquee-slider>
		</div>
	</div>
</template>

<style scoped lang="scss">
.page {
	width: 100%;
	height: 100vh;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	background-color: var(--bg-color);
	color: var(--text-color);
	gap: 100px;
	padding: 100px 20%;
	box-sizing: border-box;
	overflow: scroll;
}

.containers-title {
	position: absolute;
	top: -35px;
	left: 35px;
	text-align: center;
	padding: 10px 30px;
	border-radius: 15px;
	background-color: var(--sbg2-color);
	height: 50px;
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

.aboutme-container {
	width: 100%;
	max-width: 1050px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	background-color: var(--sbg1-color);
	border-radius: 15px;
	position: relative;
	padding: 30px 20px 20px 20px;

	.img-and-text {
		max-width: 100%;
		max-height: 100%;
		display: flex;
		gap: 30px;
		box-sizing: border-box;
		align-items: center;

		.photo {
			max-height: 500px;
			height: auto;
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

.techstack-container {
	width: 100%;
	max-width: 1050px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	background-color: var(--sbg1-color);
	border-radius: 15px;
	position: relative;
	padding: 50px 20px 20px 20px;
	gap: 30px;
}
</style>
