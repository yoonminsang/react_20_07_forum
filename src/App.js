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
  Modify,
  Info,
  InfoType,
  Notice,
  // NoticePost,
  ManageHome,
  ManageCategory,
  ManageNotice,
  ManageNoticeWriting,
  ManageHit,
  ManageReport,
  ManageNoticeModify,
  HitForum,
} from "./routes";
import { Write, ForumPost, NoticePost, HitForumPost } from "./containers";
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
        <Route path="/manage/notice/page/:pageId" component={ManageNotice} />
        <Route
          exact
          path="/manage/notice/modify/:postId"
          component={ManageNoticeModify}
        />

        <Route
          exact
          path="/manage/notice/create"
          component={ManageNoticeWriting}
        />
        <Route exact path="/manage/notice" component={ManageNotice} />
        <Route exact path="/manage/report" component={ManageReport} />
        <Route exact path="/manage/hit" component={ManageHit} />
        <Route exact path="/manage/category" component={ManageCategory} />
        <Route exact path="/manage" component={ManageHome} />
        <Route exact path="/auth/signup" component={AuthSignUp} />
        <Route exact path="/auth/signin" component={AuthSignIn} />
        <Route exact path="/auth/signin" component={AuthSignIn} />
        <Route
          path="/notice/search/:searchType/Keyword/:Keyword/page/:pageId/:postId"
          component={NoticePost}
        />
        <Route
          path="/notice/search/:searchType/Keyword/:Keyword/page/:pageId"
          component={Notice}
        />
        <Route
          path="/notice/search/:searchType/Keyword/:Keyword"
          component={Notice}
        />
        <Route path="/notice/page/:pageId/:postId" component={NoticePost} />
        <Route path="/notice/page/:pageId" component={Notice} />
        <Route exact path="/notice" component={Notice} />
        <Route
          path="/hit/search/:searchType/Keyword/:Keyword/page/:pageId/:postId"
          component={HitForumPost}
        />
        <Route
          path="/hit/search/:searchType/Keyword/:Keyword/page/:pageId"
          component={HitForum}
        />
        <Route
          path="/hit/search/:searchType/Keyword/:Keyword"
          component={HitForum}
        />
        <Route path="/hit/page/:pageId/:postId" component={HitForumPost} />
        <Route path="/hit/page/:pageId" component={HitForum} />
        <Route exact path="/hit" component={HitForum} />
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
        <Route path="/forum/:category/modify/:postId" component={Modify} />
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
