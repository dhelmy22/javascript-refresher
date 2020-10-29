//#######################
// AIzaSyBKGREdOFfVGXQYbHQ_gpkLNJx2KxIe9gs

if('geolocation' in navigator){

navigator.geolocation.getCurrentPosition(function(position){

    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var myOptions = {
        zoom: 8,
        center: latlng,
        //mapTypeId: google.maps.mapTypeId.TERRAIN,
        disableDefaultUI: true,
    }
    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });

});

}else{
    var para = document.createElement('p');
    para.textContent = 'ARGH, no geolocation!';
    document.body.appendChild(para);
}