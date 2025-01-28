// Array di libri
const books = [
  {
      title: "Una domanda al giorno: 365 domande per bambine e ragazze",
      description: "Inizia un viaggio unico attraverso la scoperta di te con <i>Una domanda al giorno</i>, un diario dedicato a bambine e ragazze dagli 8 ai 12 anni.",
      price: "€ 11,99",
      image: "https://m.media-amazon.com/images/I/61wNPypNiQL._SY522_.jpg",
      shopLink: "https://amzn.eu/d/c5NA3ay"
  },
  {
      title: "Se fossi...: Dove la fantasia non conosce limiti.",
      description: "Tuffatevi tra domande, come 'Se fossi un animale, come sarebbe il tuo aspetto?' o 'Se potessi essere un personaggio storico, chi saresti?'.",
      price: "€ 9,99",
      image: "https://m.media-amazon.com/images/I/41yvHI9SiiL._SY445_SX342_.jpg",
      shopLink: "https://amzn.eu/d/bHwWs5O"
  },
  {
      title: "Amore, risate e pasticci",
      description: "Una piccola raccolta super tenera e divertente di 20 frasi che raccontano la vita reale di mamma e figlio, accompagnati da altrettante bellissime immagini di mamme animali insieme ai loro cuccioli.",
      price: "€ 9,90",
      image: "https://m.media-amazon.com/images/I/61hp6rat+tL._SY522_.jpg",
      shopLink: "https://amzn.eu/d/8uXzc1S"
  },
  {
      title: "Nomenclature Montessori",
      description: "78 carte da ritagliare in italiano ed in inglese a tema scuola, cucina, cibo e in bagno, per arricchire il vocabolario. Immagini reali e parole in scritte in corsivo.",
      price: "€ 15,50",
      image: "https://m.media-amazon.com/images/I/61ThesEx81L._SY522_.jpg",
      shopLink: "https://amzn.eu/d/4mDUKRT"
  }
];

// Array di prodotti Etsy
const etsy = [
  {
      title: "MoMA Museum Of Modern Art Scavenger Hunt for kids",
      description: "Planning a visit to the MoMA with your kids?<br>Turn your trip into an exciting and interactive adventure with this Scavenger Hunt!<br>At the end, your little art explorers will earn a special &amp;MoMA Art Seeker&amp; diploma! 🎨✨",
      price: "€ 7.15",
      image: "https://i.etsystatic.com/57332064/r/il/6cd7a1/6596043066/il_1588xN.6596043066_suv3.jpg",
      shopLink: "https://aleconleali.etsy.com/listing/1850111484"
  },
  {
    title: "Photo Scavenger Hunt at Madame Tussauds Wax Museum",
    description: "Turn your visit to Madame Tussauds into a unique adventure!",
    price: "€ 3.42",
    image: "https://i.etsystatic.com/57332064/r/il/009102/6648174313/il_1588xN.6648174313_8j4q.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1850980194"
  },
  {
    title: "Vatican Museums Scavenger Hunt for kids",
    description: "Planning a visit to the Vatican Museums in Rome with your kids?<br>Turn your trip into an exciting and interactive adventure with this Scavenger Hunt!<br>At the end, your little art explorers will earn a special &amp;Vatican Museums Art Seeker&amp; diploma! 🎨✨",
    price: "€ 7.15",
    image: "https://i.etsystatic.com/57332064/r/il/3ec762/6598586660/il_1588xN.6598586660_1uvv.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1864966913"
  },
  {
    title: "Photo Scavenger Hunt at the American Museum of Natural History New York",
    description: "Turn your visit to the American Museum of Natural History in New York into a unique and unforgettable adventure!",
    price: "€ 3.42",
    image: "https://i.etsystatic.com/57332064/r/il/f38a9c/6649500049/il_1588xN.6649500049_nbt2.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1851150528"
  },
  {
    title: "Italian Painting Photo Quiz",
    description: "Dive into the world of Italian art with this fun and educational printable game!",
    price: "€ 3.42",
    image: "https://i.etsystatic.com/57332064/r/il/21154a/6651699139/il_1588xN.6651699139_4a57.jpg",
    shopLink: "https://aleconleali.etsy.com/listing/1851794388"
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