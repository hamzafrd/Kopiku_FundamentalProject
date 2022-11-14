import "./search-hero.js";

class HomeHero extends HTMLElement {
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
    #hero {
      padding-top: 90px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    
    .hero-title {
      display: grid;
      text-align: center;
      width: 50%;
    }
    .hero-title > h1 {
      font-size: max(30px, 4.5vmax);
      text-align: center;
    }
    
    .hero-title > p {
      font-size: large;
    }
    
    #hero > p {
      margin-top: 10px;
      color: rgba(34, 34, 34, 0.5);
    }    
    </style>
        <div id="hero">
            <div class="hero-title">
                <h1>Enjoy your coffe before your activity</h1>
                <p id="srhere">
                    Boost your productivity and build your mood with a glass of coffe in
                    the morning
                </p>
            </div>
            
            <p>It’s free, and takes less than a minute.</p>
        </div>
        `;
    const title = this.shadowDOM.querySelector(".hero-title");
    const searchElement = document.createElement("search-hero");
    title.insertAdjacentElement("afterend", searchElement);
  }
}

customElements.define("home-hero", HomeHero);
