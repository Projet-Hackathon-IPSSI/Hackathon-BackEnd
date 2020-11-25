{
	"info": {
		"_postman_id": "f27f57a2-6391-4cd8-a837-88fe54049c4b",
		"name": "Api node",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Comment",
			"item": [
				{
					"name": "Create a comment for a post",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY3F1ZXMxQG1haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2MDYyMzA0NjksImV4cCI6MTYwODgyMjQ2OX0.ApqAUMXfNTbmLZJbgusR2UxR2qmKc04EAloBuwivTvQ",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "Jacques",
									"type": "text"
								},
								{
									"key": "message",
									"value": "test",
									"type": "text"
								},
								{
									"key": "post_id",
									"value": "5fbce0fe96a39501caa27958",
									"type": "text",
									"disabled": true
								}
							]
						},
						"url": {
							"raw": "localhost:3000/posts/5fbd200fe79dd3011477bfe4/comments",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"posts",
								"5fbd200fe79dd3011477bfe4",
								"comments"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get all comments for a post",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3000/posts/5fbd200fe79dd3011477bfe4/comments",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"posts",
								"5fbd200fe79dd3011477bfe4",
								"comments"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get a comment",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3000/comments/5fbce4b30376aa00382ea100",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"comments",
								"5fbce4b30376aa00382ea100"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update a comment",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "message",
									"value": "cool",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:3000/comments/5fbce4b30376aa00382ea100",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"comments",
								"5fbce4b30376aa00382ea100"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete a comment",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "localhost:3000/comments/5fbce4b30376aa00382ea100",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"comments",
								"5fbce4b30376aa00382ea100"
							]
						}
					},
					"response": []
				}
			],
			"protocolProfileBehavior": {}
		},
		{
			"name": "Post",
			"item": [
				{
					"name": "Get all posts",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3000/posts",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"posts"
							]
						}
					},
					"response": []
				},
				{
					"name": "Create a post",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "title",
									"value": "mon premier article",
									"type": "text"
								},
								{
									"key": "content",
									"value": "mon contenu",
									"type": "text"
								},
								{
									"key": "age",
									"value": "25",
									"type": "text",
									"disabled": true
								}
							],
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3000/posts",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"posts"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get a post",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3000/posts/5fbcc0ea8395690062691288",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"posts",
								"5fbcc0ea8395690062691288"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update a post",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "title",
									"value": "toto",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:3000/posts/5fbcc0ea8395690062691288",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"posts",
								"5fbcc0ea8395690062691288"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete a post",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "localhost:3000/posts/5fbcc0f88395690062691289",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"posts",
								"5fbcc0f88395690062691289"
							]
						}
					},
					"response": []
				}
			],
			"protocolProfileBehavior": {}
		},
		{
			"name": "User",
			"item": [
				{
					"name": "Create an user",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "email",
									"value": "jacqfghfgues1@mail.com",
									"type": "text"
								},
								{
									"key": "password",
									"value": "12345",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:3000/users/register",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"register"
							]
						}
					},
					"response": []
				},
				{
					"name": "Login an user",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "email",
									"value": "jacques1@mail.com",
									"type": "text"
								},
								{
									"key": "password",
									"value": "12345",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:3000/users/login",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"login"
							]
						}
					},
					"response": []
				}
			],
			"protocolProfileBehavior": {}
		}
	],
	"protocolProfileBehavior": {}
}