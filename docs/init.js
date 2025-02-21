// Array di libri
const books = [
  {
      title: "Una domanda al giorno: 365 domande per bambine e ragazze",
      description: "Inizia un viaggio unico attraverso la scoperta di te con <i>Una domanda al giorno</i>, un diario dedicato a bambine e ragazze dagli 8 ai 12 anni.",
      price: "€ 11,99",
      image: "/assets/images/61wNPypNiQL._SY522_.jpg",
      shopLink: "https://amzn.eu/d/c5NA3ay"
  },
  {
      title: "Se fossi...: Dove la fantasia non conosce limiti.",
      description: "Tuffatevi tra domande, come 'Se fossi un animale, come sarebbe il tuo aspetto?' o 'Se potessi essere un personaggio storico, chi saresti?'.",
      price: "€ 9,99",
      image: "/assets/images/41yvHI9SiiL._SY445_SX342_.jpg",
      shopLink: "https://amzn.eu/d/bHwWs5O"
  },
  {
      title: "Amore, risate e pasticci",
      description: "Una piccola raccolta super tenera e divertente di 20 frasi che raccontano la vita reale di mamma e figlio, accompagnati da altrettante bellissime immagini di mamme animali insieme ai loro cuccioli.",
      price: "€ 9,90",
      image: "/assets/images/61hp6rat+tL._SY522_.jpg",
      shopLink: "https://amzn.eu/d/8uXzc1S"
  },
  {
      title: "Nomenclature Montessori",
      description: "78 carte da ritagliare in italiano ed in inglese a tema scuola, cucina, cibo e in bagno, per arricchire il vocabolario. Immagini reali e parole in scritte in corsivo.",
      price: "€ 15,50",
      image: "assets/images/61ThesEx81L._SY522_.jpg",
      shopLink: "https://amzn.eu/d/4mDUKRT"
  }
];

// Array di prodotti Etsy
const etsy = [
  {
    title: "MoMA Museum Of Modern Art Scavenger Hunt for kids",
    description: "Planning a visit to the MoMA with your kids?<br>Turn your trip into an exciting and interactive adventure with this Scavenger Hunt!<br>At the end, your little art explorers will earn a special &amp;MoMA Art Seeker&amp; diploma! 🎨✨",
    price: "€ 7.15",
    image: "/assets/images/il_1588xN.6596043066_suv3.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1850111484"
  },
  {
    title: "Photo Scavenger Hunt at Madame Tussauds Wax Museum",
    description: "Turn your visit to Madame Tussauds into a unique adventure!",
    price: "€ 3.42",
    image: "/assets/images/il_1588xN.6648174313_8j4q.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1850980194"
  },
  {
    title: "Vatican Museums Scavenger Hunt for kids",
    description: "Planning a visit to the Vatican Museums in Rome with your kids?<br>Turn your trip into an exciting and interactive adventure with this Scavenger Hunt!<br>At the end, your little art explorers will earn a special &amp;Vatican Museums Art Seeker&amp; diploma! 🎨✨",
    price: "€ 7.15",
    image: "/assets/images/il_1588xN.6598586660_1uvv.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1864966913"
  },
  {
    title: "Photo Scavenger Hunt at the American Museum of Natural History New York",
    description: "Turn your visit to the American Museum of Natural History in New York into a unique and unforgettable adventure!",
    price: "€ 3.42",
    image: "/assets/images/il_1588xN.6649500049_nbt2.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1851150528"
  },
  {
    title: "Italian Painting Photo Quiz",
    description: "Dive into the world of Italian art with this fun and educational printable game!",
    price: "€ 3.42",
    image: "/assets/images/il_1588xN.6651699139_4a57.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1851794388"
  },
  {
    title: "Capitolines Museums Italy",
    description: "An adventure through art and mysteries at the Capitoline Museums!",
    price: "€ 7.15",
    image: "/assets/images/il_1588xN.6656995517_hj2m.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1852904240"
  },
  {
    title: "Photo Scavenger Hunt in Washington D.C.",
    description: "Discover Washington D.C. in a unique and fun way with this photo scavenger hunt!",
    price: "€ 3.05",
    image: "/assets/images/il_1588xN.6660577519_pd0r.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1867825149"
  },
  {
    title: "Photo Scavenger Hunt in New York City",
    description: "This interactive PDF will guide you through a series of creative photo challenges, perfect for tourists, families, and friends who want to explore New York City in an original way.",
    price: "€ 3.05",
    image: "/assets/images/il_1588xN.6613467938_ptg5.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1853840262"
  },
  {
    title: "National Gallery of Art Washington DC",
    description: "🎨 Explore the National Gallery of Art in Washington in a fun and interactive way! 🏛️",
    price: "€ 7.15",
    image: "/assets/images/il_1588xN.6664822563_tb1j.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1868682459"
  },
  {
    title: "Photo Scavenger Hunt - Smithsonian National Air and Space Museum Washington DC",
    description: "Turn your visit to the Smithsonian National Air and Space Museum in Washington DC, into an unforgettable adventure with this fun photo scavenger hunt!",
    price: "€ 3.42",
    image: "/assets/images/il_1588xN.6667853663_71wn.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1869280553"
  },
  {
    title: "Selfie scavenger hunt Valentine's day",
    description: "Celebrate Valentine’s Day with this selfie scavenger hunt, perfect for friends, couples, parties, and groups!",
    price: "€ 3.54",
    image: "/assets/images/il_1588xN.6623285372_der3.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1870032735"
  },
  {
    title: "9 Cats Printable Bookmarks Set PNG PDF",
    description: "Add a touch of simplicity and charm to your reading with these minimalist cat bookmarks.",
    price: "€ 3.05",
    image: "/assets/images/il_1588xN.6678423245_n7eh.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1857263688"
  },
  {
    title: "Orsay Museum Scavenger Hunt",
    description: "This educational scavenger hunt inside the Musée d'Orsay guides children to discover the great masters of Impressionism and Post-Impressionism.",
    price: "€ 7.15",
    image: "/assets/images/il_1588xN.6657380460_gy0o.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1876776139"
  },
  {
    title: "Louvre Museum Scavenger Hunt ",
    description: "This scavenger hunt guides you through the highlights of the Italian, French, and Flemish Renaissance.",
    price: "€ 7.15",
    image: "/assets/images/il_1588xN.6688612789_bplr.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1873502361"
  }
];

// Funzione per generare il codice HTML per un libro
function generateBookHTML(book) {
  return `
      <div class="col-md-4 mb-4">
          <div class="card h-100 book-card">
              <div class="book-image-container">
                  <img src="${book.image}" class="book-image" alt="${book.title}">
              </div>
              <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text">${book.description}</p>
                  <p class="card-price mt-auto"><strong>Prezzo:</strong> ${book.price}</p>
                  <a href="${book.shopLink}" class="btn btn-primary mt-auto" target="_blank">Acquista su Amazon</a>
              </div>
          </div>
      </div>
  `;
}

// Funzione per generare il codice HTML per un prodotto Etsy
function generateEtsyHTML(book) {
  return `
      <div class="col-md-4 mb-4">
          <div class="card h-100 book-card">
              <div class="book-image-container">
                  <img src="${book.image}" class="book-image" alt="${book.title}">
              </div>
              <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text">${book.description}</p>
                  <p class="card-price mt-auto"><strong>Price:</strong> ${book.price}</p>
                  <a href="${book.shopLink}" class="btn btn-primary mt-auto" target="_blank">Buy on Etsy</a>
              </div>
          </div>
      </div>
  `;
}

// Funzione per mescolare un array in modo casuale
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Genera il codice HTML per tutti i libri e inseriscilo nella galleria
document.addEventListener("DOMContentLoaded", function() {
  // Imposta titolo e contenuto della galleria di libri
  const bookGalleryTitle = document.getElementById("bookGalleryTitle");
  if(bookGalleryTitle) {
    bookGalleryTitle.innerHTML = "I nostri libri su Amazon";
  }

  const bookGallery = document.getElementById("bookGallery");
  if(bookGallery) {
    const maxBooks = bookGallery.getAttribute('data-maxBooks') || books.length;
    shuffleArray(books).slice(0, maxBooks).forEach(book => {
        bookGallery.innerHTML += generateBookHTML(book);
    });
  }

  // Imposta titolo e contenuto della galleria di prodotti Etsy
  const etsyGalleryTitle = document.getElementById("etsyGalleryTitle");
  if (etsyGalleryTitle) {
    etsyGalleryTitle.innerHTML = "Our Products on Etsy";
  }

  const etsyGallery = document.getElementById("etsyGallery");
  if (etsyGallery) {
      const maxProducts = etsyGallery.getAttribute('data-maxProducts') || etsy.length;
      shuffleArray(etsy).slice(0, maxProducts).forEach(e => {
          etsyGallery.innerHTML += generateEtsyHTML(e);
      });
  }

  // Imposta il contenuto della sezione allGallery (libri + prodotti Etsy)
  const allGallery = document.getElementById("allGallery");
  if (allGallery) {
    const maxAll = allGallery.getAttribute('data-maxAll') || (books.length + etsy.length);
    const allItems = shuffleArray([...books, ...etsy]);
    allItems.slice(0, maxAll).forEach(item => {
      if (books.includes(item)) {
        allGallery.innerHTML += generateBookHTML(item);
      } else {
        allGallery.innerHTML += generateEtsyHTML(item);
      }
    });
  }
});