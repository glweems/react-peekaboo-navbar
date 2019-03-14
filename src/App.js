import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App.css";

const navlinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" }
];
export default class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100rem" }}>
        <Navbar brand={{ name: "peekaboo", to: "home" }} links={navlinks} />
        <div className="container">
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              maiores aliquid temporibus fugiat rem explicabo officiis sequi
              provident dolor quas sunt adipisci expedita sint ut, deleniti ex
              consequuntur soluta, vero dicta. Incidunt eaque saepe nihil? Hic
              praesentium necessitatibus reprehenderit veritatis.
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              maiores aliquid temporibus fugiat rem explicabo officiis sequi
              provident dolor quas sunt adipisci expedita sint ut, deleniti ex
              consequuntur soluta, vero dicta. Incidunt eaque saepe nihil? Hic
              praesentium necessitatibus reprehenderit veritatis.
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              maiores aliquid temporibus fugiat rem explicabo officiis sequi
              provident dolor quas sunt adipisci expedita sint ut, deleniti ex
              consequuntur soluta, vero dicta. Incidunt eaque saepe nihil? Hic
              praesentium necessitatibus reprehenderit veritatis.
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              maiores aliquid temporibus fugiat rem explicabo officiis sequi
              provident dolor quas sunt adipisci expedita sint ut, deleniti ex
              consequuntur soluta, vero dicta. Incidunt eaque saepe nihil? Hic
              praesentium necessitatibus reprehenderit veritatis.
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              maiores aliquid temporibus fugiat rem explicabo officiis sequi
              provident dolor quas sunt adipisci expedita sint ut, deleniti ex
              consequuntur soluta, vero dicta. Incidunt eaque saepe nihil? Hic
              praesentium necessitatibus reprehenderit veritatis.
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              maiores aliquid temporibus fugiat rem explicabo officiis sequi
              provident dolor quas sunt adipisci expedita sint ut, deleniti ex
              consequuntur soluta, vero dicta. Incidunt eaque saepe nihil? Hic
              praesentium necessitatibus reprehenderit veritatis.
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              maiores aliquid temporibus fugiat rem explicabo officiis sequi
              provident dolor quas sunt adipisci expedita sint ut, deleniti ex
              consequuntur soluta, vero dicta. Incidunt eaque saepe nihil? Hic
              praesentium necessitatibus reprehenderit veritatis.
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              maiores aliquid temporibus fugiat rem explicabo officiis sequi
              provident dolor quas sunt adipisci expedita sint ut, deleniti ex
              consequuntur soluta, vero dicta. Incidunt eaque saepe nihil? Hic
              praesentium necessitatibus reprehenderit veritatis.
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              maiores aliquid temporibus fugiat rem explicabo officiis sequi
              provident dolor quas sunt adipisci expedita sint ut, deleniti ex
              consequuntur soluta, vero dicta. Incidunt eaque saepe nihil? Hic
              praesentium necessitatibus reprehenderit veritatis.
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              maiores aliquid temporibus fugiat rem explicabo officiis sequi
              provident dolor quas sunt adipisci expedita sint ut, deleniti ex
              consequuntur soluta, vero dicta. Incidunt eaque saepe nihil? Hic
              praesentium necessitatibus reprehenderit veritatis.
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              maiores aliquid temporibus fugiat rem explicabo officiis sequi
              provident dolor quas sunt adipisci expedita sint ut, deleniti ex
              consequuntur soluta, vero dicta. Incidunt eaque saepe nihil? Hic
              praesentium necessitatibus reprehenderit veritatis.
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              maiores aliquid temporibus fugiat rem explicabo officiis sequi
              provident dolor quas sunt adipisci expedita sint ut, deleniti ex
              consequuntur soluta, vero dicta. Incidunt eaque saepe nihil? Hic
              praesentium necessitatibus reprehenderit veritatis.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
