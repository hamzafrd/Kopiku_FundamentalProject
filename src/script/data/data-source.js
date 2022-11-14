class DataSource {
  static searchClub(keyword) {
    return fetch(`https://api.sampleapis.com/coffee/hot`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        const filteredClubs = responseJson.filter((coffe) =>
          coffe.title.toUpperCase().includes(keyword.toUpperCase())
        );

        if (filteredClubs.length) {
          return Promise.resolve(filteredClubs);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
