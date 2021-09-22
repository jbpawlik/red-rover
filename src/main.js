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

//Call APIs, report errors, save to local storage
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

// Upvote-Downvote UI
let upvote = false;
let downvote = false;

$('#upFront').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('upvote');
  if (downvote === true) {
    downvote = false;
    $('#downBack').toggleClass('downvote');
    upvote = true;
  } else if (upvote === true) {
    console.log(upvote)
    console.log(downvote)
    upvote = false;
  } else {
    upvote = true;
  }
});

$('#downBack').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('downvote');
  if (upvote === true) {
    upvote = false
    $('#upFront').toggleClass('upvote');
    downvote = true;
  } else if (downvote === true) {
    console.log(upvote)
    console.log(downvote)
    downvote = false;
  } else {
    downvote = true;
  }
});
