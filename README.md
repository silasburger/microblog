App deployed at : <a href="https://microblogly-frontend.herokuapp.com/">https://microblogly-frontend.herokuapp.com</a>

# Microblog - Blogging app 

My team and I built the frontend for this app using React (CRA setup), Redux, and Redux Thunk. The goal was to create an app that has a fundamentally sound component heirarchy. Another goal was to intelligently connect components to redux to prop drilling

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Technologies](#technologies)
- [Features to add](#features-to-add)
- [Team](#team)

## Installation
### Backend Setup:  

```shell
cd backend
npm install
node server.js
```


### Frontend Setup:

```shell
cd front
npm install
npm start
```

### Clone

- Clone this repo to your local machine using `https://github.com/silasburger/microblog`

---

## Features

- Users can write a blog post
- Users can edit a blog post
- Users can delete a blog post
- Users can read a blog post
- Users can vote on blog posts
- Users can comment on blog posts
- Users can delete their comments on blog posts

---

## Heirarchy

App
├─┬ components/Home/Home
│ └── containers/TitleList/TitleList
├─┬ containers/NewPost/NewPost
│ └── components/PostForm/PostForm
└─┬ containers/Post/Post
  ├── components/CommentForm/CommentForm
  ├── components/CommentList/CommentList
  ├── components/PostDisplay/PostDisplay
  └── components/PostForm/PostForm
  
---

## Technologies

- React
- Create-React-App
- Redux 
- Redux Thunk
- Axios 
- Bootstrap
- Reactstrap

--- 

## Features to add

- Add auth to backend for signup/login functionality

---

## Team

| **Hinesh Amin**
| <a href="https://github.com/hineshamin" target="_blank">`github.com/hineshamin`</a> | 

| **Silas Burger**
| <a href="https://github.com/silasburger" target="_blank">`github.com/silasburger`</a> | 


