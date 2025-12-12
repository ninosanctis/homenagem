// filepath: c:\AMN\my-project\src\scripts\hub.js
// Carrossel de Imagens
const images = [
  "/image1.jpg", // Substitua pelos caminhos das suas imagens
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
]
let currentIndex = 0
const carousel = document.getElementById("carousel")

function renderCarousel() {
  carousel.innerHTML = ""
  images.forEach((img, index) => {
    const imgElement = document.createElement("img")
    imgElement.src = img
    imgElement.alt = `Imagem ${index + 1}`
    imgElement.className = `w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full transition-opacity duration-300 ${
      index === currentIndex ? "opacity-100 scale-110" : "opacity-50 scale-90"
    }`
    carousel.appendChild(imgElement)
  })
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length
  renderCarousel()
})

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length
  renderCarousel()
})

renderCarousel()

// Temporizador
function updateTimer() {
  const startDate = new Date("2021-09-06T00:00:00")
  const now = new Date()
  const diff = now - startDate

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  document.getElementById(
    "timer"
  ).textContent = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`
}

updateTimer()
setInterval(updateTimer, 1000)
