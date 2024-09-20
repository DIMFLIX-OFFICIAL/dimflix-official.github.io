<script setup>
import UrlIcon from "@/components/icons/UrlIcon.vue";

const props = defineProps({
	IconComponent: {
		type: Object,
		required: true
	},
	url: {
      type: String,
      required: true
    },
	color: {
		type: String,
		required: true
	}
})
</script>

<template>
	<a :href="url" class="sm-btn" :style="{backgroundColor: color}">
		<component :is="IconComponent"/>
	</a>
</template>

<style scoped lang="scss">
.sm-btn {
	width: 50px;
	height: 50px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>