class ItemPill extends HTMLElement {
  set pill(item) {
    this._pill = item;
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>${this._pill}</p>
        `;
  }
}
customElements.define("item-pill", ItemPill);
