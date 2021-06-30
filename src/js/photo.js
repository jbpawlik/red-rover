export default class PhotoOfTheDay {
  static getPhoto() {
    const key = process.env.API_KEY;
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}