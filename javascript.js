/*БАНКНОТЫ скрипт*/
function filterGallery() {
    let selectedYear = document.getElementById('yearFilter').value;
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (selectedYear === 'all' || card.getAttribute('data-year') === selectedYear) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function openModal(src) {
    document.getElementById('modalImage').src = src;
    document.getElementById('imageModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll("img");
    images.forEach(img => {
        img.addEventListener("click", function () {
            openModal(this.src);
        });
    });
});