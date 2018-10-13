# GraphQL + Koa

1. clone
1. `fbi s`
1. query:

```
query AllAuthors {
  authors {
    firstName
    posts {
      title
      votes
    }
  }
}
```

```
query PostsForAuthor {
  author(id: 1) {
    firstName
    posts {
      title
      votes
    }
  }
}
```

```
query allPosts {
  posts {
  	id
  	title
    author {
      firstName
      lastName
    }
	}
}
```

```
mutation {
  upvotePost(postId:1) {
    id
    title
    votes
  }
}
```
