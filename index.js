// Initialize Google Map centered on Nuwara Eliya
function initMap() {
  const nuwaraEliya = { lat: 6.9497, lng: 80.7891 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: nuwaraEliya,
  });

  new google.maps.Marker({
    position: nuwaraEliya,
    map,
    title: "Nuwara Eliya City Center",
  });
}

// Sample bike data
const bikes = [
  {
    name: "Mountain Explorer",
    price: 500,
    image: "https://i.imgur.com/HTZkPZo.jpg",
    desc: "Perfect for off-road adventures in the hills."
  },
  {
    name: "City Cruiser",
    price: 400,
    image: "https://i.imgur.com/g9Z1v4O.jpg",
    desc: "Ideal for exploring the city and Gregory Lake."
  },
  {
    name: "Electric Rider",
    price: 800,
    image: "https://i.imgur.com/ybYZf8k.jpg",
    desc: "Go farther with electric power and comfort."
  }
];

// Render bike cards dynamically
const bikeList = document.getElementById("bikeList");

bikes.forEach(bike => {
  const card = document.createElement("div");
  card.className = "bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition";
  card.innerHTML = `
    <img src="${bike.image}" alt="${bike.name}" class="w-full h-56 object-cover">
    <div class="p-5">
      <h3 class="text-xl font-semibold mb-2">${bike.name}</h3>
      <p class="text-gray-600 mb-4">${bike.desc}</p>
      <p class="text-green-700 font-bold mb-4">Rs. ${bike.price}/hour</p>
      <button class="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition">Rent Now</button>
    </div>
  `;
  bikeList.appendChild(card);
});
