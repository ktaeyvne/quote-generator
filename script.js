const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

async function getQuote() {
  quoteEl.innerText = "Loading...";
  authorEl.innerText = "";

  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();

    quoteEl.innerText = `"${data.content}"`;
    authorEl.innerText = "- " + data.author;

    animateCard();
  } catch (err) {
    quoteEl.innerText = "Gagal mengambil quote 😢";
  }
}

function copyQuote() {
  const text = quoteEl.innerText;

  navigator.clipboard.writeText(text)
    .then(() => alert("Disalin!"))
    .catch(() => alert("Gagal copy"));
}

function tweetQuote() {
  const text = quoteEl.innerText + " " + authorEl.innerText;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function animateCard() {
  const card = document.getElementById("card");
  card.style.transform = "scale(0.9)";
  setTimeout(() => {
    card.style.transform = "scale(1)";
  }, 150);
}

// auto load pertama
getQuote();
