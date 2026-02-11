// JS code here for first page !

const ghibliMovies = [
  {
    id: 1,
    title: "Castle in the Sky",
    image:
      "https://www.tallengestore.com/cdn/shop/products/CastleInTheSky-StudioGhibliJapanaeseAnimeMovieArtPoster_0af350aa-86a4-4b28-bf1c-3ac9bef27e11.jpg?v=1690844936",
    year: 1986,
  },
  {
    id: 2,
    title: "Grave of the Fireflies",
    image:
      "https://cdn.shopify.com/s/files/1/0969/9128/products/GraveOfTheFireflies-StudioGhibliJapanaeseAnimatedMoviePoster_994b8fc9-d5d7-40d4-9ea3-b8227b15a93d.jpg?v=1642160407",
    year: 1988,
  },
  {
    id: 3,
    title: "My Neighbor Totoro",
    image:
      "https://www.tallengestore.com/cdn/shop/products/MyNeighborTotoro-StudioGhibli-JapanaeseAnimatedMoviePoster_5a3f7231-6098-4edb-8bd8-fc0cda71e676.jpg?v=1690844927",
    year: 1988,
  },
  {
    id: 4,
    title: "Kiki's Delivery Service",
    image:
      "https://i.pinimg.com/originals/9d/5c/b0/9d5cb00ea0a430bb2c537b83f5df88cc.jpg",
    year: 1989,
  },
  {
    id: 5,
    title: "Only Yesterday",
    image:
      "http://dl9fvu4r30qs1.cloudfront.net/71/e7/4804162548878537423b6cada203/only-yesterday-us-poster.jpeg",
    year: 1991,
  },
  {
    id: 6,
    title: "Porco Rosso",
    image:
      "http://2.bp.blogspot.com/-FQB3319-_ZM/UCEz_vbxWBI/AAAAAAAAK4M/bKEHPIByFB8/s1600/Porco+Rosso+(1992)+1.jpg",
    year: 1992,
  },
  {
    id: 7,
    title: "Ocean Waves",
    image:
      "https://image.tmdb.org/t/p/original/jVez1ABxkxjy4uGfUQBR11qXCT8.jpg",
    year: 1993,
  },
  {
    id: 8,
    title: "Pom Poko",
    image:
      "https://image.tmdb.org/t/p/original/AalIPdfUVqaPBz6HWkeZPOF96RC.jpg",
    year: 1994,
  },
  {
    id: 9,
    title: "Whisper of the Heart",
    image:
      "https://i.pinimg.com/originals/e4/9c/49/e49c49a47f7f0be4bcf17d18d9a19753.png",
    year: 1995,
  },
  {
    id: 10,
    title: "Princess Mononoke",
    image:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2023/05/princess-mononoke-movie-poster.jpg?q=49&fit=contain&w=480&dpr=2",
    year: 1997,
  },
  {
    id: 11,
    title: "My Neighbors the Yamadas",
    image:
      "https://i.pinimg.com/736x/94/e4/f2/94e4f2a3786b48f2546a7bf1b06dbc82.jpg",
    year: 1999,
  },
  {
    id: 12,
    title: "Spirited Away",
    image:
      "https://i.pinimg.com/originals/b9/45/18/b94518ceb502e96d9303f67eaaeaaf15.jpg",
    year: 2001,
  },
  {
    id: 13,
    title: "The Cat Returns",
    image:
      "https://alchetron.com/cdn/The-Cat-Returns-images-66bba0a5-55fc-4259-960e-2283c0d5c64.jpg",
    year: 2002,
  },
  {
    id: 14,
    title: "Howl's Moving Castle",
    image: "https://picfiles.alphacoders.com/350/thumb-1920-350263.jpg",
    year: 2004,
  },
  {
    id: 15,
    title: "Tales from Earthsea",
    image:
      "https://image.tmdb.org/t/p/original/67yYwCPq7NbxSF6BIIXCMD34sY0.jpg",
    year: 2006,
  },
  {
    id: 16,
    title: "Ponyo",
    image:
      "https://i.pinimg.com/736x/08/18/a4/0818a4d7e80a230f1829fb27b00cbe12.jpg",
    year: 2008,
  },
  {
    id: 17,
    title: "Arrietty",
    image:
      "https://i.pinimg.com/originals/28/b2/71/28b27118686d9e24d727495c1eac455d.jpg",
    year: 2010,
  },
  {
    id: 18,
    title: "From Up on Poppy Hill",
    image:
      "https://www.themoviedb.org/t/p/original/3MYV6YzpMJ3I6r67AbbeRgx4Qsg.jpg",
    year: 2011,
  },
  {
    id: 19,
    title: "The Wind Rises",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg",
    year: 2013,
  },
  {
    id: 20,
    title: "The Tale of the Princess Kaguya",
    image:
      "https://image.tmdb.org/t/p/original/s7pLI4lTzTPP4hzROCdqxU2n27T.jpg",
    year: 2013,
  },
  {
    id: 21,
    title: "When Marnie Was There",
    image:
      "https://image.tmdb.org/t/p/original/vug1dvDI1tSa60Z8qjCuUE7ntkO.jpg",
    year: 2014,
  },
  {
    id: 22,
    title: "The Red Turtle",
    image:
      "https://i.pinimg.com/originals/d3/cb/74/d3cb7437f0472a8202ef799c0e0908f8.png",
    year: 2016,
  },
  {
    id: 23,
    title: "The Boy and the Heroin",
    image:
      "https://www.themoviedb.org/t/p/original/b7KkO5HsGFi0Xdfz38nU8GLYUF5.jpg",
    year: 2023,
  },
];

const div = document.querySelector(".container");

const input = document.getElementById("input");
// const messageDiv = document.getElementById("message");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const searchValue = input.value.trim().toLowerCase();

    const matchedMovie = ghibliMovies.find((movie) =>
      movie.title.toLowerCase().includes(searchValue),
    );

    if (matchedMovie) {
      // Save movie in localStorage
      localStorage.setItem("selectedMovie", JSON.stringify(matchedMovie));

      // Redirect to info page
      window.location.href = "info.html";
    } else {
      alert("Movie not found!");
    }
  }
});

div.innerHTML = ghibliMovies
  .map(
    (data) => `
    <div class="boxes">
        <div class="img-container">
            <a href="/info.html?id=${data.id}"><img class="imgs" src=${data.image} alt=${data.title} /></a>
        </div>
        <h4 class="titles">${data.title}</h4>
        <p class="years">${data.year}</p>
    </div>
`,
  )
  .join("");

const menuBtn = document.querySelector("#menu");
const sideMenu = document.querySelector(".side-menu");

menuBtn.addEventListener("click", () => {
  if (sideMenu.style.display == "block") {
    sideMenu.style.display = "none";
  } else {
    sideMenu.style.display = "block";
  }
});
