
```zsh
angular\workspace % ng generate application demo-guards --skip-tests
angular\workspace\projects\demo-guards\src % ng generate guard _guards/auth
angular\workspace\projects\demo-guards\src % ng generate service _services/account
```

## Login

https://dummyjson.com/auth/login

```json
// Request
{    
	"username": "emilys",
	"password": "emilyspass",
	"expiresInMins": 30
}

// Reponse
{
  "id": 1,
  "username": "emilys",
  "email": "emily.johnson@x.dummyjson.com",
  "firstName": "Emily",
  "lastName": "Johnson",
  "gender": "female",
  "image": "https://dummyjson.com/icon/emilys/128",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MjI1ODg0MTQsImV4cCI6MTcyMjU5MDIxNH0._DeNKlr4by_L853Dpw0rWhRCw3M3WfFxDVEKdXzIv9k",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MjI1ODg0MTQsImV4cCI6MTcyNTE4MDQxNH0.GKDJEkLhpmpcHp0nfukGTdNzDpyJzSo_PTh0Otpo1JI"
}
```







# References
* https://dummyjson.com/docs/auth
* https://app.quicktype.io/
* https://json-generator.com/
* https://transform.tools/json-schema-to-typescript