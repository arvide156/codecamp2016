var locations = [
    ['UDEM', 25.661573, -100.420824],
    ['Depa Suchiate', 25.651626, -100.380499],
    ['Depa Humberto Lobo', 25.660647, -100.383133]
];

var centro_lat = 0;
var centro_lng = 0;

for(var i = 0; i < locations.length; i++){
    centro_lat += locations[i][1];
    centro_lng += locations[i][2];
}

centro_lat /= locations.length;
centro_lng /= locations.length;
console.log(centro_lng);
function initMap(){
    console.log(centro_lat);

    console.log(document.getElementById("map"));

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: new google.maps.LatLng(centro_lat, centro_lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {

            return function() {
                go_to(locations[i][3], locations[i][4]);
            }

        })(marker, i));

        google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {

            return function() {
                marker.setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png");
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }

        })(marker, i));

        google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {

            return function() {
                marker.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
                infowindow.close(map, marker);
            }

        })(marker, i));
    }

}