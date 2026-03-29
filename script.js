const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

// 🔥 DATABASE BESAR (INDO + LUCU + MOTIVASI + ANIME)
const quotes = [

  // 😂 LUCU
  { text: "Aku tidak malas, aku hanya sedang mode hemat energi.", author: "Anonim" },
  { text: "Diet dimulai besok, janji... kayaknya.", author: "Anonim" },
  { text: "Cinta itu buta, tapi kuota yang bikin mata melek.", author: "Anonim" },
  { text: "Aku rajin... rajin rebahan.", author: "Anonim" },
  { text: "Hidup itu berat, apalagi kalau kamu berat badan.", author: "Teman Julid" },
  { text: "Jomblo itu bebas... bebas kesepian tiap malam.", author: "Netizen" },

  // 💪 MOTIVASI
  { text: "Jangan menyerah, karena awal yang sulit sering berakhir indah.", author: "Anonim" },
  { text: "Kesuksesan dimulai dari keberanian mencoba.", author: "Anonim" },
  { text: "Pelan tidak apa, yang penting tetap jalan.", author: "Anonim" },
  { text: "Kerja keras mengalahkan bakat yang malas.", author: "Anonim" },
  { text: "Gagal itu biasa, menyerah itu pilihan.", author: "Anonim" },
  { text: "Hari ini berjuang, besok kamu bersinar.", author: "Anonim" },

  // 🎌 ANIME
  { text: "Aku tidak akan lari, karena itu jalan ninjaku!", author: "Naruto Uzumaki" },
  { text: "Orang kuat bukan yang tidak pernah jatuh, tapi yang selalu bangkit.", author: "Saitama" },
  { text: "Jika kamu tidak mengambil risiko, kamu tidak bisa menciptakan masa depan.", author: "Monkey D. Luffy" },
  { text: "Bangkit dan terus maju, itulah arti hidup.", author: "Eren Yeager" },
  { text: "Kerja keras mengalahkan segalanya.", author: "Rock Lee" },
  { text: "Jangan menyerah sampai akhir.", author: "Tanjiro Kamado" },

  // 🔥 EXTRA BIAR BANYAK
  { text: "Sukses itu bukan instan, mie instan saja harus dimasak dulu.", author: "Anonim" },
  { text: "Kalau capek istirahat, bukan menyerah.", author: "Anonim" },
  { text: "Fokus ke tujuan, bukan ke omongan orang.", author: "Anonim" },
  { text: "Jangan takut gagal, takutlah kalau tidak mencoba.", author: "Anonim" },
  { text: "Rezeki gak akan kemana, tapi bisa diambil orang.", author: "Netizen" }
];

function getQuote() {
  quoteEl.innerText = "Loading...";
  authorEl.innerText = "";

  setTimeout(() => {
    const random = Math.floor(Math.random() * quotes.length);

    quoteEl.innerText = `"${quotes[random].text}"`;
    authorEl.innerText = "- " + quotes[random].author;

    animateCard();
  }, 400);
}

function copyQuote() {
  navigator.clipboard.writeText(quoteEl.innerText);
  alert("Disalin!");
}

function tweetQuote() {
  const text = quoteEl.innerText + " " + authorEl.innerText;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
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
