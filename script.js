const giftBox = document.getElementById('giftBox');
const message = document.getElementById('message');
const birthdayText = document.getElementById("birthdayText");
const birthdayMusic = document.getElementById("birthdayMusic");
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("birthdayVideo");

const texts = [
  "Chúc mừng sinh nhật nàng 2K6 năng động! Tuổi mới thật nhiều niềm vui, thật nhiều trải nghiệm thú vị và thật nhiều điểm cao nha. Cứ tự tin tỏa sáng theo cách riêng của bản thân nhé!  😎✨🥳🔥",
  
  "Hãy cứ sống chân thành, yêu thương bản thân và đừng quên dành thời gian tận hưởng vẻ đẹp của tuổi trẻ. Hy vọng tuổi mới sẽ mang đến cho cậu thật nhiều may mắn, bình an và một trái tim luôn tràn đầy tình yêu thương. Happy birthday!🎁🎉"
];

giftBox.addEventListener('click', () => {
  // 1. Ẩn hộp quà
  giftBox.style.display = 'none';

  // 2. Hiện video
  videoContainer.classList.remove("hidden");
  videoContainer.classList.add("show");

  // 3. Phát video nếu autoplay bị chặn
  video.play().catch(err => {
    console.log("Trình duyệt chặn autoplay video:", err);
  });

  // 4. Hiện thiệp
  message.classList.remove("hidden");
  message.classList.add("show");

  // 5. Bắn confetti 🎊
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    confetti.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(confetti);
  }

  // 6. Bật nhạc 🎵
  birthdayMusic.play();

  // 7. Chạy hiệu ứng chữ
  setTimeout(() => {
    typeWriter(texts, birthdayText);
  }, 1500);
});

function typeWriter(texts, element, textIndex = 0, i = 0) {
  if (textIndex < texts.length) {
    const text = texts[textIndex];
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      setTimeout(() => typeWriter(texts, element, textIndex, i + 1), 40);
    } else {
      setTimeout(() => {
        element.innerHTML += '<br>';
        typeWriter(texts, element, textIndex + 1);
      }, 2000);
    }
  } else {
    setTimeout(() => {
      const imgGift = document.createElement('div');
      imgGift.classList.add('img-gift');
      message.appendChild(imgGift);
    }, 1500);
  }
}
