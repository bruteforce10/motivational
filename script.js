// Fungsi untuk memulai challenge
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startChallenge(answer) {
  document.querySelector(".card").style.display = "none";
  //   document.getElementById("textContainer").style.display = "block";
  //   await delay(3000);

  //   document.getElementById("textContainer").style.display = "none";
  //   document.getElementById("textContainer2").style.display = "block";
  //   await delay(3000);

  //   document.getElementById("textContainer2").style.display = "none";
  //   document.getElementById("textContainer3").style.display = "block";
  //   await delay(3000);

  // document.getElementById("textContainer3").style.display = "none";
  // document.getElementById("textContainer4").style.display = "block";

  document.getElementById("puzzleContainer").style.display = "block";

  // new Typed("#typed-output", {
  //   strings: [
  //     "Okaiii aku akan kasih teka teki untuk menghidupkan semangattt Diri.",
  //     "Jangan lupa senyum dulu yaa! 😊",
  //   ],
  //   typeSpeed: 30, // Kecepatan mengetik
  //   backSpeed: 20, // Kecepatan menghapus teks
  //   startDelay: 1000, // Delay sebelum mulai mengetik
  //   backDelay: 1500, // Delay sebelum menghapus teks
  //   loop: false, // Apakah teks akan berulang
  //   onComplete: function () {
  //     // Setelah animasi selesai
  //     setTimeout(function () {
  //       document.getElementById("textContainer4").style.display = "none";
  //       document.getElementById("puzzleContainer").style.display = "block";
  //     }, 2500);
  //   },
  // });

  //   document.getElementById("puzzleContainer").style.display = "block";

  // Ganti dengan teks berikutnya
  //   setTimeout(function () {
  //     document.getElementById("firstText").textContent =
  //       "Okaiii aku akan kasih teka teki untuk menghidupkan semangattt Diri";
  //     document.getElementById("firstText").classList.remove("zoom-in");
  //     document.getElementById("firstText").classList.add("showing-up");
  //   }, 10000);

  // Ganti dengan teks berikutnya
  //   setTimeout(function () {
  //     document.getElementById("firstText").textContent =
  //       "Sebelum itu Senyum dulu ya yang manis Diri";
  //     document.getElementById("firstText").classList.remove("showing-up");
  //     document.getElementById("firstText").classList.add("fade-in");
  //   }, 13000);

  // Teka-teki muncul setelah beberapa detik
  //   setTimeout(function () {
  //     document.getElementById("puzzleContainer").style.display = "block";
  //   }, 16000);
}

// Fungsi untuk mengecek jawaban puzzle
function checkAnswer() {
  const answer = document
    .getElementById("puzzleInput")
    .value.trim()
    .toLowerCase();
  const correctAnswer = "semangat";

  if (answer === correctAnswer) {
    document.getElementById("puzzleResult").style.display = "none";
    document.getElementById("puzzleContainer").style.display = "none";
    document.getElementById("textContainer5").style.display = "block";

    new Typed("#typed-output2", {
      strings: [
        "yapp betul kak audi jawabannya semangat, apalagi kalo udah dapat semangat dari ku hehe. pokoknya kak, ganbatte 🔥, Ini mungkin terasa berat sekarang, tapi kakak punya kesempatan untuk membangun hidup yang lebih baik, lebih bahagia, dan lebih sesuai dengan diri kak ☺️ 💪",
      ],
      typeSpeed: 50,
      onComplete: function () {
        setTimeout(function () {
          document.getElementById("textContainer5").style.display = "none";
          document.getElementById("textContainer6").style.display = "block";
        }, 6000);
      },
    });
  } else {
    document.getElementById("puzzleResult").textContent =
      "Tooteet, coba lagi Kak Audi!, *semangat* lagi Jawabnya hehe!";
    document.getElementById("puzzleResult").style.color = "red";
  }
}
