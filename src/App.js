import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { PostsList } from './features/posts/postsList'
import { AddPostForm } from './features/posts/addPostForm'
import { SinglePostPage } from './features/posts/singlePostPage'
import { EditPostForm } from './features/posts/editPostForm'
import { UsersList } from './features/users/usersList'
import { SingleUserPage } from './features/users/singleUserPage'
import { EditUserForm } from './features/users/editUserForm'
import { NotificationsList } from './features/notifications/notificationsList'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/posts/:postId/edit" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={SingleUserPage}/>
          <Route exact path="/users/:userId/edit" component={EditUserForm}/>
          <Route exact path="/notifications" component={NotificationsList}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
