<template>
  <div class="book-item">
    <h3>{{details.title}}</h3>
    <div class="topic">{{details.topic}}</div>
    <p class="author">Author: {{details.author}}</p>
  </div>
</template>

<script>

export default {
  name: 'Item',
  props: ['details'],
  data() {
    return {}
  }
}
</script>
<style>
.topic {
  color: #42b983
}
.book-item {
  text-align: left;
      border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 5px;
}
</style>


