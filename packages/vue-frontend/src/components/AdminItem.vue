<template>
  <div class="book-item">

    <h3>{{details.title}}</h3>
    <div class="topic">{{details.topic}}</div>
    <p class="author">{{details.author}}</p>
    <button>Edit</button>
    <button>Remove</button>
  </div>
</template>

<script>

// <ApolloQuery :query="/* some query */">
//     <!-- The result will automatically updated -->
//     <template slot-scope="{ result: { data, loading } }">
//       <!-- Some content -->
//       <div v-if="loading">Loading...</div>
//       <ul v-else>
//         <li v-for="user of data.users" class="user">
//           {{ user.name }}
//         </li>
//       </ul>
//     </template>
//   </ApolloQuery>


export default {
  name: 'AdminItem',
  props: ['details'],
  data() {
    return {}
  }
}
</script>


