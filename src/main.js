import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MarsRover from './js/marsrover';


//UI Logic for Mars Rover Camera, using Fetch

//Display API errors
function displayCallErrors(error) {
  $('#errorDiv').show();
  $('#errorOutput').html(error);
}

// function frontResponse(response) {
//   if (response) {
//     $('#frontRover').html("<img src=" + response.photos[0].img_src + ">");
//   } else {
//     $('#frontRover').text(`There has been an error: + ${response.message}`);
//   }
// }

// function rearResponse(response) {
//   if (response) {
//     $('#rearRover').html("<img src=" + response.photos[0].img_src + ">");
//   } else {
//     $('#rearRover').text(`There has been an error: + ${response.message}`);
//   }
// }

$(document).ready(function() {
  MarsRover.frontCamera()
    .then(function(response) {
      if (response) {
        $('#frontRover').html("<img src=" + response.photos[0].img_src + ">");
      } else {
        $('#frontRover').text(`There has been an error: + ${response.message}`);
      }
      let frontPic = response.photos[0].img_src;
      sessionStorage.setItem('frontPic', frontPic);
    })
    .catch(function(error) {
      displayCallErrors(error);
    });
  MarsRover.rearCamera()
    .then(function(response) {
      if (response) {
        $('#rearRover').html("<img src=" + response.photos[0].img_src + ">");
      } else {
        $('#rearRover').text(`There has been an error: + ${response.message}`);
      }
      let rearPic = response.photos[0].img_src;
      sessionStorage.setItem('rearPic', rearPic);
    })
    .catch(function(error) {
      displayCallErrors(error);
    });
  // MarsRover.mastCamera()
  //   .then(function(response) {
  //     if (response) {
  //       $('#mastRover').html("<img src=" + response.photos[0].img_src + ">");
  //     } else {
  //       $('#mastRover').text(`There has been an error: + ${response.message}`);
  //     }
  //     let mastPic = response.photos[0].img_src;
  //     sessionStorage.setItem('mastPic', mastPic);
  //   })
  //   .catch(function(error) {
  //     displayCallErrors(error);
  //   });
  MarsRover.navCamera()
    .then(function(response) {
      if (response) {
        $('#navRover').html("<img src=" + response.photos[0].img_src + ">");
      } else {
        $('#navRover').text(`There has been an error: + ${response.message}`);
      }
      let navPic = response.photos[0].img_src;
      sessionStorage.setItem('navPic', navPic);
    })
    .catch(function(error) {
      displayCallErrors(error);
    });
});

// $(document).ready(function() {
//   MarsRover.frontCamera()
//     .then(function(response) {
//       frontResponse(response);
      
//     });

//   MarsRover.rearCamera()
//     .then(function(response) {
//       rearResponse(response);
//     });
// });

// MarsRover.frontCamera()
//   .then(function(response) {
//     if (response instanceof Error) {
//       throw Error(response.message);
//     }
//     let frontPic = response.photos[0].img_src;
//     sessionStorage.setItem('frontPic', frontPic);
//   })
//   .catch(function(error) {
//     displayCallErrors(error);
//   });

// export default class ConvertUSD {
//   static async getRates(currency) {
//     return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`)
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
// }