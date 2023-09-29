<template>
  <div class="main-layout">
    <TreeView class="tree">
      <TreeViewItem />
    </TreeView>
  </div>
</template>

<script setup lang="ts">
import TreeView from '@/components/TreeView.vue';
import TreeViewItem from '@/components/TreeViewItem.vue';
</script>

<style lang="scss">
/* override with custom colors */
.main-layout > .tree > .item > .name {
  color: red;
  font-weight: bold;
}

.main-layout {
  font-size: 14px;
}
</style>
