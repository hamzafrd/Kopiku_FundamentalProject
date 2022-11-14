class SearchHero extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .searching {
      padding: 10px;
      background-color: white;
      border: solid rgba(34, 34, 34, 0.1);
      border-radius: 50px;
      display: flex;
      margin-top: 80px;
      width: -webkit-min-content;
      width: -moz-min-content;
      width: min-content;
    }
    
    .searching > button > p {
      font-size: max(13px, 1.3vw);
    }
    .searching > button {
      cursor: pointer;
      display: flex;
      align-items: center;
      border-radius: 50px;
      height: 50px;
      padding: 15px;
      border-color: rgba(34, 34, 34, 0.1);
      background-color: rgb(255, 144, 42);
      color: white;
      font-weight: bold;
      font-size: large;
    }
    
    input[type="search"] {
      background: transparent;
      border: none;
      width: 50vw;
      max-width: 400px;
      margin: 0px 10px;
      outline: none;
      font-size: larger;
      font-weight: 600;
    }
    </style>
    
    <div id="search" class="searching">
      <input type="search" placeholder="Latte" id="searchElement" />
      <button id="searchButtonElement" type="submit"><p>See your coffee</p></button>
    </div>
        `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-hero", SearchHero);
