import "./pill.js";
class ItemCoffe extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set coffe(item) {
    this._coffe = item;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .coffe-item {
      background-color: white;
      margin: 10px;
      display: flex;
      flex-direction: column;
      min-width: 300px;
      width : min-content;
      max-width: 25vw;
      overflow: hidden;
      border-radius: 20px;
      border: solid rgba(34, 34, 34, 0.1);
    }
    
    .coffe-img {
      align-self: center;
      background-image: url(${this._coffe.image}) ;
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 30vh;
    }

    .coffe-desc {
      font-size: small;
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .coffe-desc > p{
      margin : 10px;
    }
    
    .ingpill {
      overflow: auto;
      display: flex;
      font-size: small;
      background-color: antiquewhite;
    }
    
    item-pill {
      flex-shrink: 0;
      display: flex;
      align-self: center;
      margin: 15px 0px 15px 15px;
      background-color: rgba(34, 34, 34, 0.1);
      padding: 5px 15px;
      border-radius: 20px;
    }
    

      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      ::-webkit-scrollbar-track {
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: rgb(255, 144, 42);
        border-radius: 10px;
      }

    </style>
      <div class="coffe-item">
        <div class="coffe-img"></div>
        <div class="coffe-desc">
          <p>
            <b><span>${this._coffe.title} coffee</b></span>
            ${this._coffe.description}
          </p>
        </div>
        <div class="ingpill">
        </div>
    </div>
    `;

    this._coffe.ingredients.forEach((yes) => {
      const itemPillElement = document.createElement("item-pill");
      itemPillElement.pill = yes;
      this.shadowDOM.querySelector(".ingpill").appendChild(itemPillElement);
    });
  }
}

customElements.define("item-coffe", ItemCoffe);
