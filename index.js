
//
//map.on('click', (e) => {
//  alert('clicked!');
//    var coords = `lat: ${e.lngLat.lat} <br> lng: ${e.lngLat.lng}`;
//
//    // create the popup
//    var popup = new mapboxgl.Popup().setText(coords);
//
//    // create DOM element for the marker
//    var el = document.createElement('div');
//    el.id = 'marker';
//
//    // create the marker
//    new mapboxgl.Marker(el)
//        .setLngLat(e.lngLat)
//        .setPopup(popup)
//        .addTo(map);
//  });
// add markers to map
//geojson.features.forEach(function(marker) {
//
//  // create a HTML element for each feature
//  var el = document.createElement('div');
//  el.className = 'marker';
//
//  // make a marker for each feature and add to the map
//  new mapboxgl.Marker(el)
//  .setLngLat(marker.geometry.coordinates)
//  .addTo(map);
//});
L.mapbox.accessToken = 'pk.eyJ1IjoiZGVndXptYW5rZXZpbiIsImEiOiJjamNvZW82ODIwMXN3MnFvY2szNGYzeXo4In0.h4M6PL-1pMS6ahRKYHLn9w';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([39, -98], 4)
    .addControl(L.mapbox.geocoderControl('mapbox.places', {
        keepOpen: true
    }))

map.doubleClickZoom.disable();
map.unbind('dblclick');
map.on('dblclick', function(e) {
    
	
    var randomHex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          e.latlng.lng,
          e.latlng.lat
        ]
    },
    properties: {
        title: 'new',
        description: 'new',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': randomHex,
        'marker-symbol': 'heart'
    }
}).addTo(map);
});

    

  L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -77.03221142292,
          38.913371603574 
        ]
    },
    properties: {
        title: 'Josh Hug',
        description: 'It\'s raining, I need a place to stay!',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#802020',
        'marker-symbol': 'lodging'
    }
}).addTo(map);
  L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -121.74052,
          38.54491 
        ]
    },
    properties: {
        title: 'UC Davis',
        description: 'HackDavis!',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#BE9A6B',
        'marker-symbol': 'farm'
    }
}).addTo(map);
L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -118.74052,
          38.54491 
        ]
    },
    properties: {
        title: 'John Doe',
        description: 'I need blankets please!',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#03bb85',
        'marker-symbol': 'clothing-store'
    }
}).addTo(map);
L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -118.74052,
          35.54491 
        ]
    },
    properties: {
        title: 'Jane Doe',
        description: 'I need water!',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#87ceeb',
        'marker-symbol': 'water'
    }
}).addTo(map);
L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -118.74052,
          35.54491 
        ]
    },
    properties: {
        title: 'Sarah Smith',
        description: 'I need food!',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#87ceeb',
        'marker-symbol': 'fast-food'
    }
}).addTo(map);
L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -104.74052,
          42.54491 
        ]
    },
    properties: {
        title: 'Paul Hilfinger',
        description: 'I need food!',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#B22222',
        'marker-symbol': 'fast-food'
    }
}).addTo(map);
L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -94.74052,
          31.54491 
        ]
    },
    properties: {
        title: 'Calanit Kamala',
        description: 'I have a toothache!',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#FFFFFF',
        'marker-symbol': 'dentist'
    }
}).addTo(map);
L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -85.74052,
          38.54491 
        ]
    },
    properties: {
        title: 'Phil Jaime',
        description: 'I need medicine!',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'medium',
        'marker-color': '#000000',
        'marker-symbol': 'pharmacy'
    }
}).addTo(map);
