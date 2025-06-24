// Example destinations data
const destinations = [
  {
    title: "Santorini, Greece",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    desc: "Experience the iconic blue domes, stunning sunsets, and Mediterranean charm of Santorini.",
    link: "https://images.app.goo.gl/jSjgRUK6ytdDew9X8"
  },
  {
    title: "Kyoto, Japan",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    desc: "Immerse yourself in the beauty of cherry blossoms, ancient temples, and tranquil gardens.",
    link: "#"
  },
  {
    title: "Banff, Canada",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    desc: "Explore turquoise lakes, majestic mountains, and pristine wilderness in Banff National Park.",
    link: "#"
  },
  {
    title: "Cape Town, South Africa",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    desc: "Discover vibrant culture, Table Mountain views, and breathtaking coastlines.",
    link: "#"
  },
  {
    title: "Paris, France",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    desc: "Enjoy timeless romance, world-class cuisine, and iconic landmarks in the City of Light.",
    link: "#"
  }
];

// Inject cards dynamically
const destCards = document.getElementById('destCards');
destinations.forEach(dest => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${dest.img}" alt="${dest.title}">
    <div class="card-body">
      <div class="card-title">${dest.title}</div>
      <div class="card-text">${dest.desc}</div>
      <div class="card-action"><a href="${dest.link}">Learn More</a></div>
    </div>
  `;
  destCards.appendChild(card);
});

// Optional: Smooth scroll for navigation
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
