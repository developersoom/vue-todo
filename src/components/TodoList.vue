<template>
  <b-list-group class="list-container">
    <b-list-group-item class="item-container" v-for="(item, index) in itemList" v-bind:key="item.title" v-bind:class="{ completed: item.completed}">
      <i class="check-complete fas fa-check" @click="checkComplete(index)"></i>
      <span class="item-title">{{ item.title }}</span>
      <i class="check-remove far fa-trash-alt" @click="checkRemove(index)"></i>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  props: ["itemList"],
  methods: {
    checkComplete(index) {
      this.$emit("checkComplete", index);
    },
    checkRemove(index) {
      this.$emit("checkRemove", index);
    }
  }
};
</script>

<style scoped>
.item-container {
  display: flex;
  justify-content: space-between;
}
.check-complete {
  cursor: pointer;
}
.check-remove {
  cursor: pointer;
  color: rgba(72, 71, 77, 0.877);
}
.completed {
  color: rgba(156, 154, 154, 0.836);
  text-decoration: line-through;
}
</style>
