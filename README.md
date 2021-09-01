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

|      Library      | Description                                                                                                                                         |
| :---------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
|       React       | Front-end user interaction and state management through manipulation of a virtual DOM.                                                              |
|   React Router    | Site navigation and routing for single page applications                                                                                            |
|       Rails       | Backend model-view-controller framework for Ruby                                                                                                    |
|       Axios       | Promise-based HTTP client for the browser and node.js                                                                                               |
|    PostgreSQL     | PostgreSQL is an advanced, enterprise class open source relational database that supports both SQL (relational) and JSON (non-relational) querying. |
|       CORS        | Cross-origin resource sharing, makes cross-origin AJAX possible                                                                                     |
|      bcrypt       | Password hashing function for authentication                                                                                                        |
|        jwt        | Token-based authentication for tracking logged in users on frontend                                                                                 |
| React Masonry CSS | a React Component with a simple interface to order items into the desired columns at specified breakpoints.                                         |
|   Tailwind CSS    | A utility-first CSS framework with classes that can be accessed directly                                                                            |
|  react-spinners   | a react component for loading animations                                                                                                            |
| styled-components | a react component I used for implementing Dark Mode                                                                                                 |

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
| create Comments component(CRUD)            |    M     |     3 hrs      |      hrs      |   N/A hrs   |
| Basic CSS                                  |    M     |     3 hrs      |      hrs      |   N/A hrs   |
| Advanced CSS Navbar/Footer                 |    M     |     1 hrs      |      hrs      |   N/A hrs   |
| Advanced CSS Homepage                      |    M     |     2 hrs      |      hrs      |   N/A hrs   |
| Advanced CSS UserPosts                     |    M     |     1 hrs      |      hrs      |   N/A hrs   |
| Advanced CSS PostDetails                   |    M     |     2 hrs      |      hrs      |   N/A hrs   |
| Advanced CSS Login/SignUp/EditAccount      |    M     |     1 hrs      |      hrs      |   N/A hrs   |
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

- Dark Mode - Completed
- Search function - Completed
- Advanced CSS - Completed
- Like/Heart button
- Users can comment on each others posts - full CRUD - Completed
- Users can edit their account - Partial

---

## Code Showcase

I am proud of the comments components: the comments feature for me was a post MVP CRUD build and an essential part of social media apps. It involved join tables, CRUD on backend as well as CSS and JS to provide a good user experience such as

-hiding the comments input box when users are not signed in
-hiding comments if there are no comments and showing a message in its place "be the first to comment!"
-building out the full CRUD front end for comments
-was able to learn and use tailwind CSS. Tailwind was something new that I learnt and this was an opportunity to showcase it alongside my existing CSS code.
-sorting comments by latest comment and rending it as form is submitted

```
      <section className="commentContainer">
        <div className="commSectionHeader">Comments</div>
        {currentUser ? (
          <>
            <div id="newBox">
              <CommentCreate
                currentUser={currentUser}
                handleCommCreate={handleCommCreate}
                postData={postData}
              />
            </div>
            <div id="editBox">
              <CommentEdit
                currentUser={currentUser}
                handleCommEdit={handleCommEdit}
                comment={comment}
                switchBox0={switchBox0}
              />
            </div>
          </>
        ) : (
          <div className="noLoginComment">
            Please login or sign up to comment
          </div>
        )}
        {postData?.comments?.length ? (
          <>
            <div>
              <button className="hideBtn" onClick={hideShow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Hide/Show
              </button>
            </div>
          </>
        ) : (
          <div className="mt-5">Be the first to comment!</div>
        )}
        <div id="commBox">
          {postData?.comments
            ?.sort(
              ({ id: previousID }, { id: currentID }) => previousID - currentID
            )
            .slice(0)
            .reverse()
            .map((comment) => (
              <div key={comment.id} className="commentBox">
                <div className="bg-white max-w-md md:max-w-2xl m-auto rounded-2xl p-3  flex flex-col justify-center items-start shadow-lg mb-2">
                  <Link to={`/users/${comment?.user_id}`}>
                    <h3 className="text-primary-green font-semibold text-lg">
                      {comment?.user?.username}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm ">{comment.content}</p>
                </div>
                {currentUser?.id === comment.user_id && (
                  <div className="max-w-md md:max-w-2xl m-auto flex justify-end mb-2">
                    <button
                      className="bg-green-200 hover:bg-primary-green text-pri-teal hover:text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => handleEdit(comment)}
                    >
                      EDIT
                    </button>
                    <button
                      className="bg-green-200 hover:bg-primary-green text-pri-teal hover:text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => handleCommDelete(comment.id)}
                    >
                      DELETE
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>

```

The switchBox function which toggles to show comments or hide comments as well as a toggle which switches between showing the Add comment and edit comment components.

```
  function switchBox1() {
    let x = document.getElementById("editBox");
    x.style.display = "block";
    let y = document.getElementById("newBox");
    y.style.display = "none";
  }

  function switchBox0() {
    let x = document.getElementById("editBox");
    x.style.display = "none";
    let y = document.getElementById("newBox");
    y.style.display = "block";
  }

```

## Code Issues & Resolutions

The biggest challenge I had to overcome was getting to learn access nested data and jointable data. The most powerful tool and lesson I took from this project was how SQL and rails makes it very simple to create relationships and access nested data. In order to build an app that gives the best user experience to users in line with other social media apps today, I wanted to make my app so that users would be able to access and move between screens and pages seamlessly with working links.

Users in the app app are able to see comments by users, comments by post, posts by users, posts by segments/categories, they can see the posts they created themselves. In order to enable this I had to learn and change my controllers to include nested data to be sent back as json. This is what allowed me to access and present data better.

Some examples are below:

```
class PostsController < ApplicationController

  # GET /posts/1
  def show
    render json: @post, include: [:user, :segments, :comments => {:include => {:user => {:only => :username}}}],  status: :ok
  end

class SegmentsController < ApplicationController
    def index
    @segments = Segment.all

    render json: @segments, include: [:posts], status: :ok
  end

class UsersController < ApplicationController
    def show
    render json: @user, include: [:posts => {:include => :segments}], status: :ok
  end

```

Another problem I encountered and learned to solve was the issue of related data being left over once a post is deleted or an account is deleted. If a user account is deleted there lies an issue that posts created by the user will become unaccessible because only the user who created a post can edit and delete their own posts. To solve this issue I learnt about the following code which ensures that if a user is deleted. All the posts and corresponding comments will also be deleted.

```
class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy
```
