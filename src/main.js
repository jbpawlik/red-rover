import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PhotoOfTheDay from './js/photo.js';
import SearchImage from './js/imagesearch.js';

// response.data[index].images.preview_gif.url

//UI Logic for NASA Image Search
function getElements(response) {
  if (response) {
    $('#showPic').html("<img src=" + response.collection.items[0].links[0].href + ">");
  } else {
    $('#showPic').text(`There was an error ${response}`);
  }
}

async function makeApiCall(search) {
  const response = await SearchImage.getImage(search);
  getElements(response);
}

$('#searchImage').click(function(event) {
  event.preventDefault();
  let search = $('#img').val();
  makeApiCall(search);
});

//UI Logic for Astromony Picture of the Day
function getPhoto(response) {
  if (response) {
    $('#photoOfTheDay').html('<iframe src=' + response.url + '> + </iframe>');
  } else {
    $('#photoOfTheDay').text(`There was an error: ${response.message}`);
  }
}

$('#photoOfDay').click(function(event) {
  event.preventDefault();
  PhotoOfTheDay.getPhoto()
    .then(function(response) {
      getPhoto(response);
    });
});

//UI Logic for Mars Rover Camera
$('#pictureButton').click(function(event) {
  event.preventDefault();

  let request = new XMLHttpRequest();
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=${process.env.API_KEY}`;
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  };
  request.open('GET', url, true);
  request.send();

  function getElements(response) {
    $('#marsPhoto').html("<img src=" + response.photos[0].img_src + ">");
  }
});