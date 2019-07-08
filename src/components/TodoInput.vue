<template>
  <div class="input-container">
    <b-form-input
      class="todo-input"
      v-model="todoItem"
      placeholder="Add your work"
      @:keyup.enter="addTodo"
    ></b-form-input>
    <b-button class="add-btn" variant="outline-secondary" @click="addTodo">Add</b-button>
  </div>
</template>

<script>
export default {
	data() {
		return {
			todoItem: '',
		};
	},
	methods: {
		addTodo() {
			//FIXME naming newTodo || todoItem 이 더 좋을 것 같습니다.
			let item = { title: this.todoItem, completed: false };
			//FIXME this.todoItem -> this.clearTodoInput() 같이 methods로 빼면 더 좋습니다.
			this.todoItem = '';
			this.$emit('addTodo', item);
		},
	},
};
</script>

<style scoped>
.input-container {
	display: flex;
}
</style>
