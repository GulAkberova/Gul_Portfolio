import React from "react";
import port from "../style/portfolio.module.css";
import foryou from "../assets/image/portfolio/foryou.png";
import medium from "../assets/image/portfolio/medium.png";
import memory from "../assets/image/portfolio/memory.png";
import eteam from "../assets/image/portfolio/eteam.png";
import crudts from "../assets/image/portfolio/crudts.png";
import crud from "../assets/image/portfolio/crud.png";
import crudjs from "../assets/image/portfolio/crudjs.png";
import qr from "../assets/image/portfolio/qr.png";
import rock from "../assets/image/portfolio/rock.png";
import flag from "../assets/image/portfolio/flag.png";
import football from "../assets/image/portfolio/football.png";
import movie from "../assets/image/portfolio/movie.png";
import mark from "../assets/image/portfolio/markdown.png";
import hours from "../assets/image/portfolio/hours.png";
import blog from "../assets/image/portfolio/blog.png";
import image from "../assets/image/portfolio/image.png";
import weather from "../assets/image/portfolio/weather.png";
import crudthunk from "../assets/image/portfolio/crudthunk.png";
import crudcontext from "../assets/image/portfolio/crudcontext.png";
import bubble from "../assets/image/portfolio/bubble.png";
import color from "../assets/image/portfolio/changecolor.png";
import number from "../assets/image/portfolio/number.png";
import login from "../assets/image/portfolio/login.png";
import todo from "../assets/image/portfolio/todo.png";
import xo from "../assets/image/portfolio/xo.png";
// import number from "../assets/image/portfolio/number.png";
import reactweather from "../assets/image/portfolio/weatherr.png";

function PortfolioCard() {
  return (
    <>
      <section className={port.portfolio_div}>
        <h1>Portfoliom</h1>
        <div className={port.portfolio_div_cards}>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={foryou} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>4You</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>React,Redux
                Toolkit,Material UI, React Hook Form, Axios,UseState, UseEffect
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Four_You_React_Project"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a href="https://4youkid.com/" target="_blank">
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={medium} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Medium</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>React,Redux
                Toolkit,Material UI, React Hook Form, Axios,Node Js,MongoDB
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Medium_Client"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a href="https://medium-client.vercel.app/" target="_blank">
                  Live Demo
                </a>
              </button>
            </div>
          </div>

          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={eteam} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Ecommerce Team Project</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>React,Router,Material UI,
                Axios,UseState, UseEffect,useContext
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Ecommerce_Team_Project"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://kaleidoscopic-pavlova-ffcf42.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={crudts} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Crud TS</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>React,TypeScript,Material
                UI,UseState, UseEffect, Axios
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Crud_React_Ts"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://comforting-bombolone-e7a3ad.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={memory} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Memory Game</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>React,UseState,
                UseEffect,useRef
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Memory_React"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://memory-react-388f2d.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={qr} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>QR Code</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>React,UseState,
                UseEffect,React-qr-code
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/QR_Code_React"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://sage-pixie-a973c2.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={crudthunk} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Crud Redux Thunk</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>React,UseState,
                UseEffect,Redux,Router,Axios
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Table_Redux_Thunk"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://willowy-tiramisu-24ff2c.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={crudcontext} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Crud UseContext</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>React,UseState,
                UseEffect,useContext,Router,Axios
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Table_useContext_React"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://cool-mooncake-be2831.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={reactweather} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Weather React</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>React, Fetch, Props
              </p>
            </div>
            {/* <div className={port.portfolio_div_card_text}>
              <h2>Blog Responsive</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>Html, Css
              </p>
            </div> */}
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Weather_React"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://weather-app-react-2577e4.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={mark} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>MarkDown</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>React, react-router-dom,
                react-markdown
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Markdown_Editor_React"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://markdown-editor-react-f1883f.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={crud} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Crud</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>React, react-router-dom,
                Axios
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Crud_Router_React"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://crud-router-react-3ad45d.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={movie} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Movie</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>React, react-router-dom,
                Axios
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Movie_React"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://movie-app-react-12412f.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={number} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Phone Number Formatting</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>React{" "}
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Phone_Number_Format"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://sparkly-axolotl-da9d63.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={football} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Football</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>React
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Football_React"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://tubular-naiad-fd1a5a.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={flag} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Flag</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>Html, Css, JavaScript
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Country_app"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://gulakberova.github.io/Country_app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={crudjs} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Crud JS</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>Html, Css, JavaScript
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Crud_Application"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://gulakberova.github.io/Crud_Application/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={image} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Random Image</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>Html, Css, JavaScript
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Random_Image_Generator"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://gulakberova.github.io/Random_Image_Generator/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={rock} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Rock Paper Scissors</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>Html, Css, JavaScript
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Rock_Paper_Scissors"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://gulakberova.github.io/Rock_Paper_Scissors/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={weather} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Weather Api</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>Html, Css, JavaScript
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Now_Weather"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://gulakberova.github.io/Now_Weather/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={hours} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Hours</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>Html, Css, JavaScript
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Now_Hours"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://gulakberova.github.io/Now_Hours/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={bubble} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Bubble Game</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>Html, Css, JavaScript
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Bobby_Bubble_Games"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://gulakberova.github.io/Bobby_Bubble_Games/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={color} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Change Color</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>Html, Css, JavaScript
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Change_Background_Color"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://gulakberova.github.io/Change_Background_Color/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={number} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Number Guessing Game</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>Html, Css, JavaScript
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Number_Guessing_Game"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://gulakberova.github.io/Number_Guessing_Game/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={login} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Login Figma</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>Html, Css, Responsive
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Figma_Login"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://gulakberova.github.io/Figma_Login/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={todo} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Todo App</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>Html, Css,JavaScript
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/ToDoList"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://gulakberova.github.io/ToDoList/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={xo} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>X/O</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>Html, Css,JavaScript
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Game-X-O"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://gulakberova.github.io/Game-X-O/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className={port.portfolio_div_card}>
            <div className={port.portfolio_div_card_img}>
              <img src={blog} />
            </div>
            <div className={port.portfolio_div_card_text}>
              <h2>Blog</h2>
              <p>
                <b>Istifadə olunan texnologiyalar:</b>Html, Css
              </p>
            </div>
            <div className={port.portfolio_div_card_btn}>
              <button>
                <a
                  href="https://github.com/GulAkberova/Blog_Project"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
              <button>
                <a
                  href="https://blog-project-6c87da.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PortfolioCard;
