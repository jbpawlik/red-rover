export default class SearchImage {
  static async getImage(search) {
    try { 
      const response = await fetch(`https://images-api.nasa.gov/search?q=${search}`)
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}



// export default class WeatherService {  
//   static async getWeather(city) {
//     try {
//       const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response.json();
//     } catch(error) {
//       return error.message;
//     }
//   }
// }

// export default class SearchGiphy {
//   static async getGiph(searchObject) {
//     try {
//       const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchObject}&limit=5&offset=0&rating=g&lang=en`);
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response.json();
//     } catch(error) {
//       return error.message;
//     }
//   }
// }