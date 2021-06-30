import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



//UI Logic
$('#pictureButton').click(function(event) {
  event.preventDefault();

  let request = new XMLHttpRequest();
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.API_KEY}`;
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
      console.log(response);
    }
  };

  request.open('GET', url, true);
  request.send();

  function getElements(response) {
    console.log(response.photos[0].img_src)
    $('#showPic').append("<img src=" + response.photos[0].img_src + ">");
  }

});