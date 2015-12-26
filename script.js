var lat = $("#latitude");
var lon = $("#longitude");
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
    lat.text("Latitude: " + position.coords.latitude);
    lon.text("Longitude: " + position.coords.longitude);
    var src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDM-OQH5nB6-x2KHGhabtCEe5kg6JgK5Qc&q=" +
    position.coords.latitude + "," +
    position.coords.longitude;
    $("#gmaps").attr("src", src);
}