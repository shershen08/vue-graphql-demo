<template>
  <div class="hello">
    <button>Add new book</button>
    <AdminForm></AdminForm>
    <AdminItem v-for="(details, index) in courses" @change="onChange" :details="details" :key="index"></AdminItem>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import AdminItem from './AdminItem'
import AdminForm from './AdminForm'

export default {
  name: 'AdminPanel',
  props: {
    msg: String,
   
  },
  data() {
    return {
      courses: [],
    }
  },
  methods: {
    onChange(){

    }
  },
   apollo: {
    courses: {
      query: gql`query {
        courses(topic:""){
          title
          author
          topic
        }
      }`,
      // add variables
      // add custome methods
    },
  },
  components: {
    AdminItem,
    AdminForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
