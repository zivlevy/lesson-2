// init map
let mymap = L.map('map').setView([32.7859, 34.9614], 18); //coordinates of elbit
let isGoogle = false; //when google map is shown
//set layers
let OpenStreetMapLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
let googleLayer = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
// toogle between map layers (openStreet / Google)
function toggleLayer(e) {
    if (!e.originalEvent.shiftKey)
        return;
    if (this.isGoogle) {
        mymap.removeLayer(googleLayer);
        OpenStreetMapLayer.addTo(mymap);
    }
    else {
        mymap.removeLayer(OpenStreetMapLayer);
        googleLayer.addTo(mymap);
    }
    this.isGoogle = !this.isGoogle;
}
function mapmousemove(e) {
    let h = document.getElementById('coordinates');
    h.innerHTML = 'Lat:' + Math.round(e.latlng.lat * 10000) / 10000 + "  / Lng: " + Math.round(e.latlng.lng * 10000) / 10000;
}
OpenStreetMapLayer.addTo(mymap);
mymap.on('click', (e) => { toggleLayer(e); });
mymap.on('mousemove', mapmousemove);
//# sourceMappingURL=script.js.map