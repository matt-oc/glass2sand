// Create google map

function initMap() {
  const map = new google.maps.Map(document.getElementById('gmap_canvas'),{
    zoom: 7,
    scrollwheel: false,
    center: new google.maps.LatLng(52.161583, -7.154476),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
      {
        featureType: 'landscape.natural',
        elementType: 'all',
        stylers: [
          {
            color: '#f8f8f8',
            gamma: 5
          }
        ]
      }]

  });

  // marker
  const drone = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(52.161583, -7.154476),
    icon: './assets/favicon/favicon-32x32.png' // custom
  });

  // circle
  const cityCircle = new google.maps.Circle({
      strokeColor: "#51ABD1",
      strokeOpacity: 0,
      fillColor: "#51ABD1",
      fillOpacity: 0.35,
      map,
      center: {lat: 52.161583, lng: -7.154476},
      radius: 104000,
    });
}


var form = document.getElementById("contact");

    // Success and Error functions for after the form is submitted

    function success() {
      form.reset();
      alert( "Success! we will be in touch shortly.");
    }

    function error() {
      alert( "Oops! There was a problem.");
    }

    // handle the form submission event from formspree.io

    form.addEventListener("submit", function(ev) {
      ev.preventDefault(); // stop the standard form POST submit so we can stay on our page and display a response to the user.
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });


  // helper function for sending an AJAX request from formspree.io

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  // loader removal
$(document).ready(function() {
  setTimeout(() => {
    $(".loader").fadeOut();
  }, 500);

});
