// Create google map

function initMap() {
  const map = new google.maps.Map(document.getElementById('gmap_canvas'),{
    zoom: 6,
    scrollwheel: false,
    center: {lat:52.16097522977505,lng: -7.155605540135664},
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
    map: map, position: new google.maps.LatLng(52.16097522977505, -7.155605540135664)
  });

  infoG2s = new google.maps.InfoWindow({
    pixelOffset: new google.maps.Size(0, 0),
    content: '<p style="margin-bottom: 0px; display:flex; background-color:#000000; padding-top: 10px; padding-bottom: 10px; width:100%;"><img src="assets/images/main-logo-transparent.png" width="100" style="margin-left:auto; margin-right:auto;"; /></p>'
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

// handle the form submission event from formspree.io
// Ajax for form
$(document).ready(function () {
  var options = {
    success: showResponse,  // post-submit callback
    clearForm: true
  };


  $('#contact').ajaxForm(options);
});

function showResponse(responseText, statusText, xhr, $form) {
  alert('Status: ' + statusText + '\n' + responseText
  );
};



// Message length check
$(document).ready(function () {
  [].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function (el) {
    el.lightbox = new IframeLightbox(el);
  });
  var val = 0;
  $('#characterLeft').text('500 characters left');
  $('#message').keydown(function () {
    var max = 500;
    var len = $(this).val().length;
    if (len >= max) {
      $('#characterLeft').text('You have reached the limit');
      $('#characterLeft').addClass('red');
      $('#contact-submit').addClass('disabled');
    }
    else if (event.which == 8 && len == 0) {
      $('#characterLeft').text(max + ' characters left');
      $('#contact-submit').removeClass('disabled');
      $('#characterLeft').removeClass('red');
    }
    else if (event.which == 8 && val <= 500) {
      var ch = val + 1;
      val = val + 1;
      $('#characterLeft').text(ch + ' characters left');
      $('#contact-submit').removeClass('disabled');
      $('#characterLeft').removeClass('red');
    }
    else if (len == 0) {
      var ch = max - 1;
      val = max - 1;
      $('#characterLeft').text(ch + ' characters left');
      $('#contact-submit').removeClass('disabled');
      $('#characterLeft').removeClass('red');
    }
    else {
      val = val - 1;
      $('#characterLeft').text(val + ' characters left');
      $('#contact-submit').removeClass('disabled');
      $('#characterLeft').removeClass('red');
    }
  });
});

function copyNumber() {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = '+353878578806';
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  document.getElementById("tooltip-no").setAttribute("tooltip", "Copied");
  setTimeout(function () {
    document.getElementById("tooltip-no").setAttribute("tooltip", "Copy to Clipboard")
  }, 2000);
}

function copyEmail() {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = 'info@glass2sand.com';
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  document.getElementById("tooltip-em").setAttribute("tooltip", "Copied");
  setTimeout(function () {
    document.getElementById("tooltip-em").setAttribute("tooltip", "Copy to Clipboard")
  }, 2000);
}

function recaptcha() {
let submitBtn = document.getElementById("contact-submit")
submitBtn.removeAttribute('disabled')
}
