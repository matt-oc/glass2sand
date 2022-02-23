// Create google map

function initMap() {
  const map = new google.maps.Map(document.getElementById('gmap_canvas'),{
    zoom: 6,
    scrollwheel: false,
    center: {lat:55.161583,lng: -5.154476},
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
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
  g2s = new google.maps.Marker({
    map: map, position: new google.maps.LatLng(52.161583, -7.154476)
  });
  infoG2s = new google.maps.InfoWindow({
    pixelOffset: new google.maps.Size(0, 0),
    content: '<p style="margin-bottom: 0px; display:flex; background-color:#000000; padding-top: 10px; padding-bottom: 10px; width:100%; border-radius: 10px;"><img src="assets/images/main-logo-transparent.png" width="100" style="margin-left:auto; margin-right:auto;"; /></p>'
  });

  infoG2s.open(map, g2s);
  google.maps.event.addDomListener(window, 'load', initMap);
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
  $(this).scrollTop(0);
  setTimeout(() => {
    $(".loader").fadeOut();
    $(".content").fadeIn();
    $(".footer").fadeIn();
    $("h4").fadeIn(2000);
    $('#cookieConsent').cookieConsent({
          message: 'This website uses cookies. By using this website you consent to our use of these cookies.',
          consentTime: 365
        });
  }, 1000);

});
