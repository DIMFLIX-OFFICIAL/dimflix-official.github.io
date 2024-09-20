<script setup lang="ts">
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
</script>

<template>
  <div class="home-page">
    <div class="left-side">
		<div class="title">
			<RocketIcon class="icon" />
			<h1 class="text">Make your<br />business better</h1>
		</div>
		<p class="description">
		Hi! I'm a full-stack programmer with extensive experience and deep
		knowledge in all aspects of development.
		</p>
		<div class="highlight bm20">
			<StarsIcon />
			<p class="text">Write quickly, I will be happy to solve your problem</p>
		</div>
		<DiamondLine class="bm30"/>
		<NavBtn  
			title="About me" 
			:IconComponent="AboutMeIcon" 
			description="Meet your future developer!" 
			url="/about"
			class="bm20"/>
		<NavBtn  
			title="Portfolio" 
			:IconComponent="PortfolioIcon" 
			description="Works that speak for themselves." 
			url="/portfolio"
			class="bm20"/>		
		<NavBtn  
			title="Articles" 
			:IconComponent="ArticlesIcon" 
			description="Your knowledge and inspiration!" 
			url="/articles"
			class="bm30"/>
		<DiamondLine class="bm30"/>
		<div class="social-media">
			<SocialMediaBtn
				:IconComponent="YoutubeIcon"
				url="https://www.youtube.com/dimflix"
				color="var(--maroon-color)"/>
			<SocialMediaBtn
				:IconComponent="VkIcon"
				url="https://vk.ru/dimflix_official"
				color="var(--blue-color)"/>
			<SocialMediaBtn
				:IconComponent="TelegramIcon"
				url="https://t.me/dimflix_official"
				color="var(--lavender-color)"/>
			<SocialMediaBtn
				:IconComponent="GithubIcon"
				url="https://github.com/DIMFLIX-OFFICIAL"
				color="var(--fg-color)"/>
		</div>
    </div>

    <div class="right-side">
		<svg width="468" height="604" viewBox="0 0 468 604" fill="none">
			<g clip-path="url(#clip0)">
				<image xlink:href="@/assets/my-photo.jpg" width="468" height="604" preserveAspectRatio="none"/>
			</g>
			<defs>
				<clipPath id="clip0">
					<path d="M48.1616 34.1354C50.2902 30.2234 53.953 27.3756 58.2689 26.277L159.558 0.494444C160.847 0.166097 162.173 0 163.504 0H451.193C460.03 0 467.193 7.16344 467.193 16V480.5V587.293C467.193 596.129 460.03 603.293 451.193 603.293H331H16.0804C7.24388 603.293 0.0804443 596.129 0.0804443 587.293V126.571C0.0804443 123.9 0.74939 121.271 2.02625 118.924L48.1616 34.1354Z"/>
				</clipPath>
			</defs>
		</svg>
		<a href="https://nn.hh.ru/resume/08915fc3ff0cef7b610039ed1f6c6a514a6956" target="_blank" class="resume-btn">
			<ResumeIcon/>
			<p class="text">Resume</p>
		</a>
	</div>
  </div>
</template>

<style scoped lang="scss">
.home-page {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--bg-color);
	color: var(--fg-color);
	gap: 150px;
}

.bm20 {
  margin-bottom: 20px;
}

.bm30 {
  margin-bottom: 30px;
}

.left-side {
	width: 700px;
	.title {
		display: flex;
		align-items: center;
		gap: 30px;

		.icon {
			width: 74;
			height: 71;
		}

		.text {
			font-size: 32px;
		}
	}

	.description {
		font-size: 20px;
	}

	.highlight {
		display: inline-flex;
		height: 30px;
		border-radius: 10px;
		align-items: center;
		padding-left: 5px;
		padding-right: 10px;
		gap: 5px;

		background-image: linear-gradient(
			to right,
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
			var(--lavender-color)
		);
		.text {
			font-family: "PressStart2P";
			font-size: 12px;
		}
	}

	.social-media {
		width: 100%;
		display: flex;
		gap: 20px;
		justify-content: center;
		align-items: center;
	}
}

.right-side {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	img {
		width: 500px;
		border-radius: 15px;
		clip-path: path('M 0,0 L 100%,0 L 100%,100% C 50%,100% 0,100% 0%,50% Z'); 
	}

	.resume-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		border-radius: 10px;
		background-color: var(--fg-color);
		height: 90px;
		gap: 15px;
		cursor: pointer;
		border: 0;
		text-decoration: none;
		
		.icon {
			width: 24px;
			height: 24px;
			fill: var(--bg-color);
		}

		.text {
			font-family: "PressStart2P";
			font-size: 24px;
			color: var(--bg-color);
		}
	}
}
</style>


