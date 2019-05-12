<template>
  <div class="book-item">
    <h3>{{details.title}}</h3>
    <div class="topic">{{details.topic}}</div>
    <p class="author">{{details.author}}</p>
     <button>Save</button>

  </div>
</template>

<script>

export default {
  name: 'AdminForm',
  props: ['details'],
  data() {
    return {}
  }
}
</script>


