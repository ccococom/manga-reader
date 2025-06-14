const pages = [
  "https://i.imgur.com/0rVeh4U.jpg",
  "https://i.imgur.com/x6e5J2T.jpg",
  "https://i.imgur.com/RKbPZLv.jpg"
];

let currentPage = 0;

function showPage() {
  document.getElementById("comic-page").src = pages[currentPage];
  document.getElementById("page-number").textContent = `หน้า ${currentPage + 1}`;
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage();
  }
}

showPage();
