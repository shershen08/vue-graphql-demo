# Other GraphQL features

## Simple fetch demo

```
fetch('http://localhost:4000/graphql= ..... ')
```

## Fragments

```
fragment courseFields on Course {
  title
  author
}
query {
  courses(author:""){
    ...courseFields
  }
}
```

## Mutations
 
```
mutation updateCourseTopic($id: Int!, $topic: String!) {
    updateCourseTopic(id: $id, topic: $topic) {
        ... courseFields
    }
}
```