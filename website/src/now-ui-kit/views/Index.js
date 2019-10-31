import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js.js";
import BasicElements from "./index-sections/BasicElements.js.js";
import Navbars from "./index-sections/Navbars.js.js";
import Tabs from "./index-sections/Tabs.js.js";
import Pagination from "./index-sections/Pagination.js.js";
import Notifications from "./index-sections/Notifications.js.js";
import Typography from "./index-sections/Typography.js.js";
import Javascript from "./index-sections/Javascript.js.js";
import Carousel from "./index-sections/Carousel.js.js";
import NucleoIcons from "./index-sections/NucleoIcons.js.js";
import CompleteExamples from "./index-sections/CompleteExamples.js.js";
import SignUp from "./index-sections/SignUp.js.js";
import Examples from "./index-sections/Examples.js.js";
import Download from "./index-sections/Download.js.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Images />
          <BasicElements />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />
          <Carousel />
          <NucleoIcons />
          <CompleteExamples />
          <SignUp />
          <Examples />
          <Download />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
