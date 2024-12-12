// Setup map
var map = L.map('map').setView([41.8102, 2.09843], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Comarca limits
L.geoJSON(moianes, {"fillOpacity": .1, "color": "#328f2c"}).addTo(map);

// Colored icons
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: './img/marker-shadow.png',
    	iconSize: [25, 41],
    	iconAnchor: [12, 41],
	    popupAnchor: [1, -34],
	    shadowSize: [41, 41]
    }
});
var greenIcon = new LeafIcon({iconUrl: './img/marker-icon-green.png'}),
    redIcon = new LeafIcon({iconUrl: './img/marker-icon-red.png'}),
    blackIcon = new LeafIcon({iconUrl: './img/marker-icon-black.png'}),
    blueIcon = new LeafIcon({iconUrl: './img/marker-icon-blue.png'}),
    goldIcon = new LeafIcon({iconUrl: './img/marker-icon-gold.png'}),
    greyIcon = new LeafIcon({iconUrl: './img/marker-icon-grey.png'}),
    orangeIcon = new LeafIcon({iconUrl: './img/marker-icon-orange.png'}),
    violetIcon = new LeafIcon({iconUrl: './img/marker-icon-violet.png'}),
    yellowIcon = new LeafIcon({iconUrl: './img/marker-icon-yellow.png'});


function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.sector) {
        switch (feature.properties.sector) {
            case "Energia":
                layer.setIcon(goldIcon);
                break;
            case "Col·lectiu":
                layer.setIcon(violetIcon);
                break;
            case "Agroecologia":
                layer.setIcon(greenIcon);
                break;
            case "Comunitat":
                layer.setIcon(orangeIcon);
                break;
            case "Art":
                layer.setIcon(yellowIcon);
                break;
             case "Sindicat":
                layer.setIcon(greyIcon);
                break;
            case "Artesania":
                layer.setIcon(redIcon);
                break;
        }
    }             	
    if (feature.properties && feature.properties.name) {
        layer.bindPopup("<b>" + feature.properties.name + "</b><br />" + feature.properties.descripcio);
    }
}

L.geoJSON(projectes, {
    onEachFeature: onEachFeature
}).addTo(map);




