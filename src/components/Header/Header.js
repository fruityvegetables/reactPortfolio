import React from "react";
import "./Header.css";

function Header() {
  return (<div>
    <header className="header">
    <div>
              <p>
                  <a href="https://github.com/fruityvegetables" target="blank">Github</a>
              </p>
              <p>
                  <a href="https://www.linkedin.com/in/gtroyer/" target="blank">LinkedIn</a>
              </p>
              <p>
                  <a href="https://stackexchange.com/users/17871593/fruityvegetables" target="blank">StackExchange</a>
              </p>
              <p>
                  <a href="mailto:gg.troyer@gmail.com" target="blank">Email Me!</a>
              </p>
              
      </div>
    </header>
    </div>
  );
}

export default Header;