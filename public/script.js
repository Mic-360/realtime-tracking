const socket = io();

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      socket.emit('sendLocation', {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    },
    (error) => {
      alert(`Unable to fetch location ${error.message}`);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    }
  );
}

const map = L.map('map').setView([0, 0], 1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
}).addTo(map);

let marker = {};

socket.on('locationMessage', (coords) => {
  map.flyTo([coords.latitude, coords.longitude], 14);
  if (marker[coords.id]) {
    marker[coords.id].setLatLng([coords.latitude, coords.longitude]);
  } else {
    marker[coords.id] = L.marker([coords.latitude, coords.longitude], {
      draggable: false,
      riseOnHover: true,
    }).addTo(map);
  }
});

socket.on('removeLocation', (coords) => {
  map.removeLayer(marker[coords.id]);
  delete marker[coords.id];
});
