const images = ["1.jpg", "2.jpg", "3.jpg"];
let currentPage = 0;

const comicPage = document.getElementById("comic-page");
const pageNumber = document.getElementById("page-number");

// โหลดรูปแรก
function showPage(index) {
  comicPage.src = `images/${images[index]}`;
  pageNumber.textContent = `หน้า ${index + 1}`;
}

// ถอยหลัง
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

// ไปหน้าใหม่
function nextPage() {
  if (currentPage < images.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

// โหลดหน้าแรกเมื่อเปิดเว็บ
showPage(currentPage);
