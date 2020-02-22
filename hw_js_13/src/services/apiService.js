'use strict';

const baseUrl = 'https://pixabay.com/api/';
const apiKey = '15346262-2d23a576c3ba87714cfd3e6d1';

export default {
  page: 1,
  query: '',
  fetchImage(query) {
    const requestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=`;
    return fetch(baseUrl + requestParams + apiKey).then(response =>
      response.json().then(parsedResponse => {
        this.incrementPage();
        return parsedResponse.hits;
      }),
    );
  },
  incrementPage() {
    this.page += 1;
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  resetPage() {
    this.page = 1;
  },
};
