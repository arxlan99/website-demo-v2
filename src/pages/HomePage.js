import React, { Fragment } from "react";
import Dropdown from "../components/Dropdown";
import Feed from "../components/Feed/Feed";
import Layout from "../components/Layout";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Fragment>
      <Layout>
        <div className="content__header">
          <Dropdown
            title="Company Name"
            contentArray={["Company1", "Company1", "Company1"]}
          />
          <Dropdown
            title="Content Group"
            contentArray={["Feature 1", "Feature 2", "Feature 3"]}
          />
        </div>
        <div className="feed__container">
          <Feed />
          <Feed />
          <Feed />
          <Feed />
        </div>
      </Layout>
    </Fragment>
  );
};

export default HomePage;
