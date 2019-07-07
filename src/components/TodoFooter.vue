<template>
  <footer @click="clearAll">
    <i class="fas fa-broom"></i>
    <span>Clear All!</span>
  </footer>
</template>

<script>
export default {
  methods: {
    clearAll() {
      this.$emit("clearAll");
    }
  }
};
</script>

<style scoped>
footer {
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
}
footer:hover {
  color: grey;
}
</style>
