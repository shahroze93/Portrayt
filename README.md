# Portrayt

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

Portrayt is a full stack social media application that allows users to post and share media content focused on home decor and style. Authorized users have the ability to create, read, update and delete posts which are associated with their own accounts. Portrayt uses Ruby on Rails and PostgreSQL on the backend, and React.js on the frontend with bcrypt and jwt token for authentication.

<br>

## MVP

### Goals

- Build a Ruby on Rails server with RESTful JSON endpoints
- Build a database with min three tables: users, posts, segments, comments
- Create full CRUD functionality for creating, updating, reading, and deleting post information
- User authentication and authorization to limit user interaction with the app's components
- Non-authorized routes for home page and authorized routes for viewing, creating and editing user made posts
- Implement CSS Flexbox and Grid
- Implement media queries for mobile and desktop
  <br>

### Libraries and Dependencies

|   Library    | Description                                                                                                                                         |
| :----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
|    React     | Front-end user interaction and state management through manipulation of a virtual DOM.                                                              |
| React Router | Site navigation and routing for single page applications                                                                                            |
|    Rails     | Backend model-view-controller framework for Ruby                                                                                                    |
|    Axios     | Promise-based HTTP client for the browser and node.js                                                                                               |
|  PostgreSQL  | PostgreSQL is an advanced, enterprise class open source relational database that supports both SQL (relational) and JSON (non-relational) querying. |
|     CORS     | Cross-origin resource sharing, makes cross-origin AJAX possible                                                                                     |
|    bcrypt    | Password hashing function for authentication                                                                                                        |
|     jwt      | Token-based authentication for tracking logged in users on frontend                                                                                 |

<br>

### Client (Front End)

#### Wireframes

The wireframes below depict Portrayt's web and phone formats. The homepage contains posts by all users which can be filtered by clicking the segment buttons. The individual post pages will contain the image, description, an optional URL link and a comments section. Users will have access to their own posts where they can edit or delete posts which they have created. The navbar will have create buttons which will lead to forms and submit buttons for creating new data.

- Overall Wireframe with Connections

https://whimsical.com/wireframe-7NuH7Q7YfmmnbLc4ShdwfS

![Wireframe Overview](https://imgur.com/KtxwNnx.png)

- Desktop Landing (Without Login)

![Homepage](https://imgur.com/0WtDwmD.png)

- Desktop Landing (after Login)

![Homepage](https://imgur.com/r9m6Gl5.png)

- Login & Sign Up

![Login](https://imgur.com/Qz8ZyKt.png)
![Sign Up](https://imgur.com/q0wPTdZ.png)

- Edit Account

![Edit Account](https://imgur.com/LwGfFnJ.png)

- User Created Posts

![User Created Posts](https://imgur.com/D4B47z9.png)

- Create Posts & Edit Post

![Create Post](https://imgur.com/R5Qog2O.png)
![Edit Post](https://imgur.com/unaXgh8.png)

- Post Details

![Post Details](https://imgur.com/KoZWgy1.png)

#### Component Tree

![Component Tree](https://imgur.com/35Yu3gf.png)

#### Component Architecture

```structure

src
|__ App.jsx
|__ index.js
|__ assets/
|__ components/
      |__ Layout/
          |__ Layout.jsx
          |__ Layout.css
      |__ Nav/
          |__ Navbar.jsx
          |__ Navbar.css
      |__ Footer/
          |__ Footer.jsx
          |__ Footer.css
|__ screens/
      |__ Homepage/
          |__ Homepage.jsx
          |__ Homepage.css
      |__ Posts/
          |__ Posts.jsx
          |__ Posts.css
      |__ PostDetails/
          |__ PostDetails.jsx
          |__ PostDetails.css
      |__ PostCreate/
          |__ PostCreate.jsx
          |__ PostCreate.css
      |__ PostEdit/
          |__ PostEdit.jsx
          |__ PostEdit.css
      |__ UserPosts/
          |__ UserPosts.jsx
          |__ UserPosts.css
      |__ SignIn/
          |__ SignIn.jsx
          |__ SignIn.css
      |__ SignUp/
          |__ SignUp.jsx
          |__ SignUp.css
      |__ EditAccount/
          |__ EditAccount.jsx
          |__ EditAccount.css
      |__ Comments/
          |__ Comments.jsx
          |__ Comments.css
      |__ CommentCreate/
          |__ CommentCreate.jsx
          |__ CommentCreate.css
      |__ CommentEdit/
          |__ CommentEdit.jsx
          |__ CommentEdit.css
|__ services/
      |__ apiConfig.js
      |__ users.js
      |__ posts.js
      |__ segments.js
      |__ comments.js
|__ utilities/
      |__ utilities.js


```

### Time Estimates

| Component                                  | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Backend CRUD                               |    M     |     4 hrs      |      hrs      |   N/A hrs   |
| Backend Auth                               |    M     |     2 hrs      |      hrs      |   N/A hrs   |
| Seed DB                                    |    M     |     2 hrs      |      hrs      |   N/A hrs   |
| create frontend component structure        |    M     |     1 hrs      |      hrs      |   N/A hrs   |
| frontend CRUD                              |    M     |     4 hrs      |      hrs      |   N/A hrs   |
| create routes                              |    M     |     2 hrs      |      hrs      |   N/A hrs   |
| create homepage screen                     |    M     |     2 hrs      |      hrs      |   N/A hrs   |
| create footer screen                       |    M     |     1 hrs      |      hrs      |   N/A hrs   |
| create navbar screen                       |    M     |     1 hrs      |      hrs      |   N/A hrs   |
| create edit user                           |    M     |     2 hrs      |      hrs      |   N/A hrs   |
| create CreatePost page                     |    M     |     2 hrs      |      hrs      |   N/A hrs   |
| create EditPost page                       |    M     |     2 hrs      |      hrs      |   N/A hrs   |
| create PostDetails page                    |    M     |     2 hrs      |      hrs      |   N/A hrs   |
| create user created posts page             |    M     |     2 hrs      |      hrs      |   N/A hrs   |
| create user sign-in/login screens          |    M     |     2 hrs      |      hrs      |   N/A hrs   |
| create Comments component(crud)            |    M     |     3 hrs      |      hrs      |   N/A hrs   |
| Basic CSS                                  |    M     |     3 hrs      |      hrs      |   N/A hrs   |
| Advanced CSS Navbar/Footer                 |    M     |     1 hrs      |      hrs      |   N/A hrs   |
| Advanced CSS Homepage                      |    M     |     2 hrs      |      hrs      |   N/A hrs   |
| Advanced CSS UserPosts                     |    M     |     1 hrs      |      hrs      |   N/A hrs   |
| Advaced CSS PostDetails                    |    M     |     2 hrs      |      hrs      |   N/A hrs   |
| Advaced CSS Login/SignUp/EditAccount       |    M     |     1 hrs      |      hrs      |   N/A hrs   |
| Advance styling for css(flexbox) or (grid) |    M     |     3 hrs      |      hrs      |   N/A hrs   |
| Add media query for forms                  |    H     |     2 hrs      |      hrs      |   N/A hrs   |
| Add media query for Homepage               |    H     |      2hrs      |      hrs      |   N/A hrs   |
| Add media query for PostDetails            |    H     |     2 hrs      |      hrs      |   N/A hrs   |
| Add media query for UserPosts              |    H     |     2 hrs      |      hrs      |   N/A hrs   |
| Debugging Backend                          |    H     |     3 hrs      |      hrs      |   N/A hrs   |
| Debugging Fullstack                        |    H     |     3 hrs      |      hrs      |   N/A hrs   |
| Total                                      |   ---    |     61 hrs     |      hrs      |     hrs     |

<br>

### Server (Back End)

#### ERD Model

![ERD](https://imgur.com/pgDCo08.png)
<br>

---

## Post-MVP

- Dark Mode
- Search function
- Advanced CSS
- Like/Heart button
- Users can comment on each others posts - full CRUD
- Users can edit their account

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
