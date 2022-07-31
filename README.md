# Sample Queries

```
# mutation {
#   createPost(post: {body: "My first Post!! on my graphQL server"}){
#     _id,
#     body, 
#     createdAt,
#   }
# }


# {
#   posts {
#     _id,
#     body,
#     createdAt,
#   }
# }

# { 
# post(_id: ""){
#   _id,
#   body,
#   createdAt,
# }
# }
```