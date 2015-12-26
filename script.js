var lat = $("#latitude");
var lon = $("#longitude");
var Latitude;
var Longitude;
$(document).ready(function() {
	$("#geolocButton").click(function() {
		getLocation();
	});
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        lat.text("Geolocation is not supported by this browser.");
    }
}


function showPosition(position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    lat.text("Latitude: " + Latitude);
    lon.text("Longitude: " + Longitude);
    var src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDM-OQH5nB6-x2KHGhabtCEe5kg6JgK5Qc&q=" +
    Latitude + "," + Longitude;
    $("#gmaps").attr("src", src);
}