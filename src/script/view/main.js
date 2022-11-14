import "../component/item-list.js";
import "../component/search-hero.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const hero = document.querySelector("home-hero");
  const searchElement = hero.shadowRoot.querySelector("search-hero");
  const itemListElement = document.querySelector("item-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    itemListElement.coffes = results;
  };

  const fallbackResult = (message) => {
    itemListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
