// Initialize and add the map
function initMap() {
  // The location of Uluru
  var oslo = {lat: 59.912445, lng: 10.731146};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: oslo});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: oslo, map: map});
}
