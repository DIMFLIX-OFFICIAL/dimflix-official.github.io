<script setup>
import UrlIcon from "@/components/icons/UrlIcon.vue";

const props = defineProps({
	title: {
		type: String,
		required: true
	},
	IconComponent: {
		type: Object,
		required: true
	},
	description: {
		type: String,
		default: ''
	},
	url: {
      type: String,
      required: true
    }
})
</script>

<template>
	<router-link :to="url" class="nav-btn">
		<div class="left-side">
			<component :is="IconComponent" class="icon"/>
			<div class="text-block">
				<p class="title">{{ title }}</p>
				<p class="description">{{ description }}</p>
			</div>
		</div>
		<div class="right-side">
			<UrlIcon/>
		</div>
	</router-link>

</template>

<style scoped lang="scss">
.nav-btn {
	width: 100%;
	height: 80px;
	border-radius: 10px;
	background-color: var(--sbg-color);
	display: flex;
	align-items: center;
	padding: 0 20px;
	justify-content: space-between;
	text-decoration: none;
	box-sizing: border-box;
	
	.left-side {
		display: flex;
		gap: 20px;

		.icon {
			width: 40px;
			height: 40px;
		}

		.text-block {
			display: flex;
			flex-direction: column;
			gap: 5px;
			color: var(--fg-color);

			.title {
				font-family: "PressStart2P";
				font-size: 18px;
				margin: 0;
			}
			.description {
				font-size: 15px;
				text-align: center;
				margin: 0;
			}
		}
	}
}
</style>