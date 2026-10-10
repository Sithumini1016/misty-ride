

window.initMap = function() {
  // If the map container isn't present, stop gracefully.
  const mapEl = document.getElementById("map");
  if (!mapEl) {
    console.warn("initMap: #map element not found on this page.");
    return;
  }

  // Center the map on Nuwara Eliya (you can change these to exact coords from your short link)
  const nuwaraEliya = { lat: 6.9497, lng: 80.7891 };

  // Create map
  const map = new google.maps.Map(mapEl, {
    zoom: 13,
    center: nuwaraEliya,
  });

  // Locations to mark
  const locations = [
    { name: "Gregory Lake", position: { lat: 6.9516, lng: 80.7840 } },
    { name: "Nuwara Eliya Bus Station", position: { lat: 6.9640, lng: 80.7893 } },
    { name: "Hakgala Botanical Garden", position: { lat: 6.9060, lng: 80.7920 } },
    { name: "Your Bike Rental Shop", position: { lat: 6.9497, lng: 80.7891 } }
  ];

  // Add markers and info windows
  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: loc.position,
      map: map,
      title: loc.name
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<div style="min-width:120px"><strong>${loc.name}</strong></div>`
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
};
