import "./item-coffe.js";

class ItemList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  set coffes(items) {
    this._coffes = items;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    
    <style>
    #container-coffes {
      display: flex;
      padding: 0px 10px;
      min-width: 100px;
      min-height: 100px;
      align-items: center;
      overflow: auto;
    }

      /* width */
    ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: rgb(255, 144, 42);
    border-radius: 10px;
    }

    </style>
    <div id="container-coffes"></div>
    `;
    this._coffes.forEach((item) => {
      const itemCoffeElement = document.createElement("item-coffe");
      itemCoffeElement.coffe = item;
      this.shadowDOM
        .querySelector("#container-coffes")
        .appendChild(itemCoffeElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
    h2{
      width:100vw ;
      text-align:center;
    }
    
    </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder style="">${message}</h2>`;
  }
}

customElements.define("item-list", ItemList);
