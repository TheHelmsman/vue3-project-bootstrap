<template>
  <div class="main-layout">
    <h1>{{ props.title }}</h1>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title?: string;
};

const props = withDefaults(defineProps<Props>(), {
  title: '',
});
</script>

<style>
.main-layout {
  font-size: 14px;
}
</style>
