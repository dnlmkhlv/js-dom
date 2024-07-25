let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

const quotes = [
  {
    quote: "It takes courage to grow up and become who you really are.",
    author: "E.E. Cummings",
  },
  {
    quote:
      "Your self-worth is determined by you. You don't have to depend on someone telling you who you are.",
    author: "Beyoncé",
  },
  {
    quote: "Nothing is impossible; the word itself says 'I'm possible.'",
    author: "Audrey Hepburn",
  },
  {
    quote:
      "Keep your face always toward the sunshine, and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;
});
