<template>
  <div class="line-container">
    <div class="diamond left"></div>
    <div class="line"></div>
    <div class="diamond right"></div>
  </div>
</template>

<style scoped>
.line-container {
  display: flex;
  align-items: center;
}

.line {
  width: 100%;
  height: 2px;
  background-color: var(--fg-color);
}

.diamond {
  width: 15px;
  height: 15px;
  background-color: var(--fg-color);
}

.left {
  transform: rotate(45deg);
}

.right {
  transform: rotate(-45deg);
}
</style>
