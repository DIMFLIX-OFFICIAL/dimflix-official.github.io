<template>
	<div class="box">
		<img class="cute-rabbit" src="@/assets/cute-rabbit.gif"/>
		<h2 style="text-align: center;" v-html="$t('notDone.title')"></h2>
	</div>
</template>

<style scoped lang="scss">
.box {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: var(--bg-color);
	color: var(--text-color);
}

.cute-rabbit {
	width: 400px;
}
</style>