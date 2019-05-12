<template>
  <div class="books-listing">
    <Item v-for="(details, index) in courses" :details="details" :key="index"></Item>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Item from './Item'

export default {
  name: 'Catalogue',
  props: {
    msg: String,
   
  },
  data() {
    return {
      courses: [],
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
    Item
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.books-listing {
  margin-top: 20px;
}
</style>
