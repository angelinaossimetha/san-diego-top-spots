$(document).ready(function() {
    // $.getJSON('data.json', function(data){
        $.getJSON('data.json', function(data) {


    // Loop through data.report instead of data
    for (var i = 0; i < data.length; i++) {
      var tr = $('<tr/>');
      
      // Indexing into data.report for each td element
      $(tr).append("<td>" + data[i].name + "</td>");
      $(tr).append("<td>" + data[i].description+ "</td>");
      var loc = "https://www.google.com/maps?q="+data[i].location[0]+","+data[i].location[1];
      var link = '<a href="' + loc + '">Google</a>';
      $(tr).append("<td>" + link + "</td>");
      $('.hotSpots').append(tr);
    }
       
}); 

})

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 32.74261, lng: -117.14074};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }