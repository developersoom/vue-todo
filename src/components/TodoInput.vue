<template>
  <div class="input-container">
    <b-form-input class="todo-input" v-model="todoItem" placeholder="Add your work" v-on:keyup.enter="addTodo"></b-form-input>
    <b-button class="add-btn" variant="outline-secondary" @click="addTodo">Add</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItem: ""
    };
  },
  methods: {
    addTodo() {
      let item = { title: this.todoItem, completed: false };
      this.todoItem = "";
      this.$emit("addTodo", item);
    }
  }
};
</script>

<style scoped>
.input-container {
  display: flex;
}
</style>
