# server

## Table of Contents

* [About the Project](#about-the-project)
* [App](#app)
  * Show All Recommendation
  * Add a new recommendation for a user
  * Generate a random joke
* [User](#user)
  * Register
  * Login
  * Google sign in
  

## About the Project

An application that will generate the best rated movies, food, and jokes.

* Registering an account for your personalised to-do
* Get movie recommendation
* Get restaurant recommendation

---

## App

API documentation for the main app

### Show All Recommendation

  Returns a json data of all recommended movies and restaurant of an authenticated user.

* **URL**

  /moviessnack

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

*  **Headers**

   **Required:**
 
    access_token


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />

    [
    {
        "id": 2,
        "genre": "thriller",
        "snack": "sapi",
        "imdbid": "tt10860906",
        "imdbrating": "7.8",
        "title": "A Deadly Charter",
        "imgUrl": "https://m.media-amazon.com/images/M/MV5BM2NhZDExMTctODAyMy00MGJjLWFjNGUtNmQ4MGYzNjZmZWIzXkEyXkFqcGdeQXVyMjE1OTQyOA@@._V1_UY268_CR9,0,182,268_AL_.jpg",
        "zomatoUrl": "https://www.zomato.com/jakarta/sei-sapi-kana-bendungan-hilir?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "UserId": 1,
        "createdAt": "2020-10-01T22:55:25.197Z",
        "updatedAt": "2020-10-01T22:55:26.069Z"
    },
    {
        "id": 3,
        "genre": "thriller",
        "snack": "sapi",
        "imdbid": "tt11766262",
        "imdbrating": "7.6",
        "title": "Corona",
        "imgUrl": "https://m.media-amazon.com/images/M/MV5BZWVmNmNhMjQtOGY0Mi00MTkwLTljMmYtYzdkMjI1YjYwYTAxXkEyXkFqcGdeQXVyNDg4Nzc3OTg@._V1_UY268_CR9,0,182,268_AL_.jpg",
        "zomatoUrl": "https://www.zomato.com/jakarta/sei-sapi-kana-bendungan-hilir?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "UserId": 1,
        "createdAt": "2020-10-02T03:55:23.903Z",
        "updatedAt": "2020-10-02T03:55:24.872Z"
    },
    {
        "id": 4,
        "genre": "thriller",
        "snack": "sapi",
        "imdbid": "tt7638348",
        "imdbrating": "7.2",
        "title": "Boss Level",
        "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjlkZTJjMDQtMzI1My00YmViLWE0M2ItZTEwMzk1NDhlNDkwXkEyXkFqcGdeQXVyMzgxODI0MTk@._V1_UY268_CR1,0,182,268_AL_.jpg",
        "zomatoUrl": "https://www.zomato.com/jakarta/sei-sapi-kana-bendungan-hilir?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "UserId": 1,
        "createdAt": "2020-10-02T04:32:46.597Z",
        "updatedAt": "2020-10-02T04:32:47.263Z"
    }
]
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### Add a new recommendation for a user

  Returns a single json data about a recommendation for a user that has just been added.

* **URL**

  /moviessnack

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `[genre]=string`
   `[snack]=string`

*  **Headers**

   **Required:**
 
    access_token


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    {
        "id": 4,
        "genre": "thriller",
        "snack": "sapi",
        "imdbid": "tt7638348",
        "imdbrating": "7.2",
        "title": "Boss Level",
        "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjlkZTJjMDQtMzI1My00YmViLWE0M2ItZTEwMzk1NDhlNDkwXkEyXkFqcGdeQXVyMzgxODI0MTk@._V1_UY268_CR1,0,182,268_AL_.jpg",
        "zomatoUrl": "https://www.zomato.com/jakarta/sei-sapi-kana-bendungan-hilir?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "UserId": 1,
        "createdAt": "2020-10-02T04:32:46.597Z",
        "updatedAt": "2020-10-02T04:32:47.263Z"
    }
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### Generate a random joke

  Returns a single json data about a recommendation for a user that has just been added.

* **URL**

  /joke

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

*  **Headers**

   **Required:**
 
    access_token


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    {
    "content": "My pet mouse 'Elvis' died last night. He was caught in a trap.."
    }
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---


## User

API documentation for the User account.

### Register

  Register a new account for the application

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
    None

* **Data Params**

    `[email]=string`
    `[password]=string`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** <br />
    `{
    "id": 1,
    "email": "nadya@gmail.com"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Email must be type of email." }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Email cannot be empty" }`

  OR


  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Password cannot be empty" }`

  OR 


  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### Login

  Login to a registered user.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
    None

*  **Headers**

   **Required:**
 
    access_token

* **Data Params**

    `[email]=string`
    `[password]=string`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    `{
        "id": 1,
        "email": "nadya@gmail.com",
        "access_token": "dummyaccesstoken"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{
    "msg": "Wrong Email / Password"
}`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />

### Google sign in

  Login or sign up with user's google acount with OAuth.

* **URL**

  /googleSignIn

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
    None

*  **Headers**

   **Required:**
 
    access_token

* **Data Params**

    `[email]=string`
    `[password]=string`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    `{
        "token": "dummytoken"
    }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
   **Content:** <br />
    `{
        "message": "error"
    }`