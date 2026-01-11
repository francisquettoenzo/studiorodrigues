// Back to top button functionality

const backToTopButton = document.querySelector('.back-to-top')

const backToTop = () => {
 if (window.scrollY >= 100) {
backToTopButton.classList.add('show')
 } else {
backToTopButton.classList.remove('show')
 }
}

window.addEventListener('scroll', function () {
 backToTop()
})

// Character counter for textarea
const textarea = document.getElementById("mensagem");
const count = document.getElementById("count");

textarea.addEventListener("input", () => {
    count.textContent = textarea.value.length;
    if (textarea.value.length == 400) {
        count.style.color = "red";
    } else {
        count.style.color = "black";
    }
});
