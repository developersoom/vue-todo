<template>
  <!-- FIXME 일관성을 위해서  v-on->@ v-bind -> :으로  변경합시다  -->
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodo="addItem"></todo-input>
    <todo-list
      v-bind:itemList="itemList"
      v-on:checkRemove="removeItem"
      v-on:checkComplete="completeItem"
    ></todo-list>
    <todo-footer v-on:clearAll="clearItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
	name: 'app',
	data() {
		return {
			itemList: [],
		};
	},
	components: {
		TodoHeader,
		TodoInput,
		TodoList,
		TodoFooter,
	},
	created() {
		Object.values(localStorage).filter(item => {
			if (item !== 'SILENT') this.itemList.push(JSON.parse(item));
		});
	},
	methods: {
		addItem(item) {
			localStorage.setItem(item.title, JSON.stringify(item));
			this.itemList.push(item);
		},
		removeItem(index) {
			localStorage.removeItem(this.itemList[index].title);
			this.itemList.splice(index, 1);
		},
		completeItem(index) {
			this.itemList[index].completed = !this.itemList[index].completed;
			localStorage.removeItem(this.itemList[index].title);
			localStorage.setItem(this.itemList[index].title, JSON.stringify(this.itemList[index]));
		},
		clearItems() {
			localStorage.clear();
			this.itemList = [];
		},
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Do+Hyeon&display=swap');

#app {
	font-family: 'Do Hyeon', sans-serif;
	margin: 0 auto;
	padding: 0;
	box-sizing: border-box;
	width: 80%;
}
</style>
