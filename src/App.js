import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import {
  AuthSignIn,
  AuthSignUp,
  Home,
  AllForum,
  Forum,
  // ForumPost,
  // Write,
  Info,
  InfoType,
  ManageHome,
  ManageCategory,
  ManageNotice,
  ManageNoticeWriting,
} from "./routes";
import { Write, ForumPost } from "./containers";
import axios from "axios";

const App = ({ autoSignIn, log }) => {
  useEffect(() => {
    axios
      .get("/logged")
      .then(function (res) {
        if (res.data.user) {
          autoSignIn(res.data.user);
        }
        log(true);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [autoSignIn]);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/manage/notice/search/type/:type/Keyword/:Keyword/page/:pageId"
          component={ManageNotice}
        />
        <Route
          path="/manage/notice/search/type/:type/Keyword/:Keyword"
          component={ManageNotice}
        />
        <Route
          exact
          path="/manage/notice/page/:pageId"
          component={ManageNotice}
        />
        <Route
          exact
          path="/manage/notice/create"
          component={ManageNoticeWriting}
        />
        <Route exact path="/manage/notice" component={ManageNotice} />
        <Route exact path="/manage/category" component={ManageCategory} />
        <Route exact path="/manage" component={ManageHome} />
        <Route exact path="/auth/signup" component={AuthSignUp} />
        <Route exact path="/auth/signin" component={AuthSignIn} />
        <Route exact path="/auth/signin" component={AuthSignIn} />
        <Route
          path="/forum/:category/search/:searchType/Keyword/:Keyword/page/:pageId/:postId"
          component={ForumPost}
        />
        <Route
          path="/forum/:category/search/:searchType/Keyword/:Keyword/page/:pageId"
          component={Forum}
        />
        <Route
          path="/forum/:category/search/:searchType/Keyword/:Keyword"
          component={Forum}
        />
        <Route
          path="/forum/:category/mode/:modeType/page/:pageId/:postId"
          component={ForumPost}
        />
        <Route
          path="/forum/:category/mode/:modeType/page/:pageId"
          component={Forum}
        />
        <Route path="/forum/:category/mode/:modeType" component={Forum} />
        <Route
          path="/forum/:category/page/:pageId/:postId"
          component={ForumPost}
        />
        <Route path="/forum/:category/page/:pageId" component={Forum} />
        <Route path="/forum/:category/write" component={Write} />
        <Route path="/forum/:category" component={Forum} />
        <Route exact path="/forum" component={AllForum} />
        <Route
          exact
          path="/info/:email/:type/page/:pageId"
          component={InfoType}
        />
        <Route exact path="/info/:email/:type" component={InfoType} />
        <Route exact path="/info/:email" component={Info} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
