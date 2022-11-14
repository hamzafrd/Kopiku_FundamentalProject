class AboutWeb extends HTMLElement {
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
  
    #about {
        background-color: rgb(255, 252, 230);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      
      .about-desc {
        text-align: center;
        width: 50%;
        margin: 10vh;
      }
      
      .about-desc > h1 {
        text-align: center;
        font-size: max(30px, 4.5vmax);
      }

      aside {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: antiquewhite;
      }
      
      .profile {
        display: flex;
      }
      
      .profile > * {
        margin: 20px;
      }
      
      .profile > img {
        max-width: 200px;
        max-height: 200px;
      }
      
      .profile-desc {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      
      footer {
        text-align: center;
        background-color: antiquewhite;
      }
      
      @media screen and (max-width: 662px) {
        .profile > img {
          display: none;
        }
      }
      
    </style>
    <div id="about">
        <div class="about-desc">
          <h1>We provide quality coffee, and ready to deliver.</h1>
          <p>
            We are a company that makes and distrit delicious drinks. our main
            product is mc secret recipe and available in stores worldwide.
          </p>
        </div>
      </div>

      <aside id="contact">
      <div class="profile">
        <img
          src="https://raw.githubusercontent.com/Hanifanta/Capstone_RECCOFFEE/hamza/Web/assets/hamza.png"
        />
        <div class="profile-desc">
          <h1>Contact Me !</h1>
          <h2>Email :</h2>
          <p>hamzaf625@gmail.com</p>
          <h2>Dicoding Email :</h2>
          <p>m128x0214@dicoding.org (Hamza Firdaus)</p>
        </div>
      </div>
    </aside>
    <footer>&copy; Kopiku 2022</footer>
        `;
  }
}

customElements.define("about-web", AboutWeb);
