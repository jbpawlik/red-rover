//Chained promises
export default class Epic{
  static async epicDate(dateDash) {
    return fetch(`https://api.nasa.gov/EPIC/api/natural/date/${dateDash}?api_key=${process.env.API_KEY}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(function(response) {
        let identifier;
        identifier = response[0].identifier;
        return identifier;
      })
  }

  static async epicPic(dateSlash, identifier) {
    return fetch(`https://api.nasa.gov/EPIC/archive/natural/${dateSlash}/png/epic_1b_${identifier}?api_key=${process.env.API_KEY}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
  }
}

// export default class Epic{
//   static async epicDate(dateDash) {
//     return fetch(`https://api.nasa.gov/EPIC/api/natural/date/${dateDash}?api_key=${process.env.API_KEY}`)
//       .then(function(response) {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         return response.json();
//       })
//       .catch(function(error) {
//         return error;
//       });
//   }

//   static async epicPic(dateSlash, identifier) {
//     return fetch(`https://api.nasa.gov/EPIC/archive/natural/${dateSlash}/png/epic_1b_${identifier}?api_key=${process.env.API_KEY}`)
//       .then(function(response) {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         return response.json();
//       })
//       .catch(function(error) {
//         return Error(error);
//       });
//   }
// }