import React from "react";
import TopBar from "./Layout/Component/TopBar";
import HomePage from "./Layout/Pages/HomePage";
import MainNavBar from "./Layout/Component/MainNavBar";
import NewsPage from "./Layout/Pages/NewsPage";
import BlogPage from "./Layout/Pages/BlogPage";
import ContactPage from "./Layout/Pages/ContactPage";
import MainFooter from "./Layout/Component/MainFooter";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default function App() {
  return (
    <div className="main-app-content">
        <BrowserRouter>
            <TopBar />
            <MainNavBar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/news" exact component={NewsPage} />
                <Route path="/blog" exact component={BlogPage} />
                <Route path="/contact" exact component={ContactPage} />
            </Switch>
            <MainFooter />
        </BrowserRouter>
    </div>
  );
}
