export default class Epic{
  static async epicDate(dateDash) {
    return fetch(`https://api.nasa.gov/EPIC/api/natural/date/${dateDash}?api_key=${process.env.API_KEY}`)
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
  // https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY

  // https://api.nasa.gov/EPIC/archive/natural/2021/05/16/png/epic_1b_20210516010437?api_key=cvwShOTEcEsdf9TG8IJHT4fIxNe0BAEd9JIuPqWV

  static async epicPic(dateSlash, identifier) {
    return fetch(`https://api.nasa.gov/EPIC/archive/natural/${dateSlash}/png/epic_1b_${identifier}.png?api_key=${process.env.API_KEY}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.url;
      })
      .catch(function(error) {
        return Error(error);
      });
  }
}