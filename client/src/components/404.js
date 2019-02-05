import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <center>
      <h2>Error 404: Page Not Found</h2>
      <Link to="/">Return to Home Page</Link>
    </center>
  </div>
);

export default NotFound;
