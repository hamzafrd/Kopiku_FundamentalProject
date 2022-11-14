import "./about.js";
import "./home-hero.js";
class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    .container-nav {
      display: flex;
      background-color: white;
      padding: 14px 24px;
      border-radius: 50px;
      margin: 24px 30px 0px 30px;
      font-weight: 600;
    
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    
      transition: ease 0.3s;
    }
    
    .nav-left {
      display: flex;
      border-radius: 50px;
    }
    
    .nav-icon {
      align-self: center;
      font-weight: 700 !important;
      font-size: larger;
      margin-right: 15px;
      color: #433416;
      cursor: pointer;
    }
    
    .nav-right {
      width: 100%;
      justify-content: space-between;
      display: flex;
    }
    .nav-start {
      display: flex;
    }
    
    .nav-start a {
      text-decoration: none;
      padding: 8px 16px;
      margin-right: 5px;
      border-radius: 50px;
      display: flex;
      align-items: center;
    }
    
    .nav-start a:hover {
      cursor: pointer;
      background-color: rgba(34, 34, 34, 0.1);
    }
    
    a:link,
    a:visited,
    a:link:active,
    a:visited:active {
      color: black;
      cursor: pointer;
    }
    
    .nav-end {
      display: flex;
    }
    .nav-end a {
      text-decoration: none;
      border-radius: 50px;
      margin-left: 5px;
      padding: 8px 16px;
      display: flex;
      align-items: center;
    }
    
    .nav-end a:hover {
      cursor: pointer;
    }
    
    .homenav a:hover {
      background-color: rgba(34, 34, 34, 0.1);
    }
    .contactnav a {
      background-color: rgb(255, 144, 42);
      color: white;
    }
    
    input[type="checkbox"] {
      display: none;
    }
    
    .hamburger {
      display: none;
      font-size: 24px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    @media screen and (max-width: 662px) {
      .hamburger {
        display: flex;
        cursor: pointer;
      }
    
      .container-nav {
        flex-direction: column;
        overflow: hidden;
      }
    
      .nav-left {
        flex-direction: column;
        max-height: none;
      }
    
      .nav-icon {
        display: flex;
        align-items: center;
        align-self: auto;
        justify-content: space-between;
        cursor: initial;
      }
    
      .nav-icon > p {
        cursor: pointer;
      }
    
      .nav-right {
        flex-direction: column;
        overflow: hidden;
      }
    
      .nav-start {
        flex-direction: column;
        transition: ease 0.5s;
        max-height: 0px;
        font-size: 0px;
      }
    
      .nav-end {
        flex-direction: column;
        transition: ease-in-out 0.5s;
        max-height: 0px;
        font-size: 0px;
      }
    
      .nav-h {
        max-height: 20vh;
        font-size: medium;
      }
    
      .nav-end a {
        margin-left: 0px;
      }
    }
    
    </style>
    <div class="container-nav">
    <div class="nav-left">
      <div class="nav-icon">
        <p>Kopiku</p>
        <label id="hamburg" class="hamburger">&#9776;</label>
      </div>
    </div>
    <div class="nav-right">
      <div class="nav-start">
        <div class="aboutnav"><a>About</a></div>
        <div class="explorenav"><a href="#srhere">Explore coffe</a></div>
      </div>
      <div class="nav-end">
        <div class="homenav"><a href="#">Home</a></div>
        <div class="contactnav"><a href="#contact">Contact</a></div>
      </div>
    </div>
    </div>
    `;
  }
}
customElements.define("nav-bar", NavBar);
const customNav = document.querySelector("nav-bar");
const about = document
  .querySelector("about-web")
  .shadowDOM.querySelector("#about");
const explore = document
  .querySelector("home-hero")
  .shadowRoot.querySelector("#srhere");
const developer = document
  .querySelector("about-web")
  .shadowRoot.querySelector("#contact");
const shadowed = customNav.shadowRoot;
const ham = shadowed.querySelector(".hamburger");
let prevScrollpos = window.pageYOffset;

const classToggle = () => {
  shadowed
    .querySelectorAll(".nav-start")
    .forEach((nav) => nav.classList.toggle("nav-h"));

  shadowed
    .querySelectorAll(".nav-end")
    .forEach((nav) => nav.classList.toggle("nav-h"));
};

const classToggleA = () => {
  about.scrollIntoView();
  classToggle();
};

const classToggleB = () => {
  explore.scrollIntoView();
  classToggle();
};

const classToggleD = () => {
  developer.scrollIntoView();
  classToggle();
};

ham.addEventListener("click", classToggle);
shadowed.querySelector(".aboutnav").addEventListener("click", classToggleA);
shadowed.querySelector(".explorenav").addEventListener("click", classToggleB);
shadowed.querySelector(".homenav").addEventListener("click", classToggle);
shadowed.querySelector(".contactnav").addEventListener("click", classToggleD);
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    shadowed.querySelectorAll(".container-nav")[0].style.top = "0";
  } else {
    shadowed.querySelectorAll(".container-nav")[0].style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
