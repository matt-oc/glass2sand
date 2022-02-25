// Create google map

function initMap() {
  const map = new google.maps.Map(document.getElementById('gmap_canvas'), {
    zoom: 6,
    scrollwheel: false,
    center: {
      lat: 52.16097522977505,
      lng: -7.155605540135664
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    styles: [{
      featureType: 'landscape.natural',
      elementType: 'all',
      stylers: [{
        color: '#f8f8f8',
        gamma: 5
      }]
    }]
  });

  // marker
  g2s = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(52.16097522977505, -7.155605540135664),
    icon: {
      url: 'assets/images/map-icon.png',
      scaledSize: new google.maps.Size(100, 50)
    },
    zIndex: 1
  });
}

$(document).ready(function() {
  $(this).scrollTop(0);
  $('#cookieConsent').cookieConsent({
    message: 'This website uses cookies. By using this website you consent to our use of these cookies.',
    consentTime: 365
  });
});

// Ajax for form
$(document).ready(function() {
  $('#contact').submit(function() {
    $("#form-confirmation").show();
  });

  var options = {
    success: showResponse, // post-submit callback
    clearForm: true
  };


  $('#contact').ajaxForm(options);
});

function showResponse(responseText, statusText, xhr, $form) {
  if (statusText == "success") {
    $("#loader").hide();
    $("#success").show();
    setTimeout(function() {
      $("#success").hide();
      $("#form-confirmation").fadeOut('slow');
    }, 4000);
  } else {
    $("#loader").hide();
    $("#failure").show();
    setTimeout(function() {
      $("#failure").hide();
      $("#form-confirmation").fadeOut('slow');
    }, 4000);
  }
};




// Message length check
$(document).ready(function() {
  [].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function(el) {
    el.lightbox = new IframeLightbox(el);
  });
  var val = 0;
  $('#characterLeft').text('500 characters left');
  $('#message').keydown(function() {
    var max = 500;
    var len = $(this).val().length;
    if (len >= max) {
      $('#characterLeft').text('You have reached the limit');
      $('#characterLeft').addClass('red');
      $('#contact-submit').addClass('disabled');
    } else if (event.which == 8 && len == 0) {
      $('#characterLeft').text(max + ' characters left');
      $('#contact-submit').removeClass('disabled');
      $('#characterLeft').removeClass('red');
    } else if (event.which == 8 && val <= 500) {
      var ch = val + 1;
      val = val + 1;
      $('#characterLeft').text(ch + ' characters left');
      $('#contact-submit').removeClass('disabled');
      $('#characterLeft').removeClass('red');
    } else if (len == 0) {
      var ch = max - 1;
      val = max - 1;
      $('#characterLeft').text(ch + ' characters left');
      $('#contact-submit').removeClass('disabled');
      $('#characterLeft').removeClass('red');
    } else {
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
  setTimeout(function() {
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
  setTimeout(function() {
    document.getElementById("tooltip-em").setAttribute("tooltip", "Copy to Clipboard")
  }, 2000);
}

function recaptcha() {
  let submitBtn = document.getElementById("contact-submit");
  submitBtn.removeAttribute('disabled');
}
