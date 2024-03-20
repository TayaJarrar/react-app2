import React from "react";
import Dash from "./Dash";
import Nav from "./nav";
import Blur from "../../public/Blur.png";

function PageOne() {
  return (
    <div className="page-one-container">
      <Nav />
      <Dash />
      <div className="admin-image-container">
        {/* No need for <img> element */}
      </div>
    </div>
  );
}

export default PageOne;
