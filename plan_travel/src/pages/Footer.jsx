import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.css"

export default function Footer() {
  return (
    <footer>
      <div className="footer-div navbar footer-info p-3">
        <div>
            © 2024 
            <Link
              to="https://www.linkedin.com/in/renu-kundan-338288208"
              target="_blank"
              className="hover:underline footer-link"
            >
         <i>     renukundan</i>
            </Link>
            . All Rights Reserved.
         

        </div>
        <div>
            <Link
              to="https://www.linkedin.com/in/renu-kundan-338288208/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin icon"></i>
            </Link>
            &nbsp; &nbsp;&nbsp; 
            <Link to="https://github.com/r-kundan" target="_blank">
            <i className="fa-brands fa-square-github icon"></i>
            </Link>
          </div>
      </div>
    </footer>
  );
}
