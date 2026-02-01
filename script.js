// Enviar WhatsApp
function enviarWhats(e) {
    e.preventDefault()
    const nome = document.getElementById("nome").value
    const msg = document.getElementById("mensagem").value

    window.open(
        `https://wa.me/5514910042214?text=${encodeURIComponent(
            `Olá! Me chamo ${nome}. ${msg}`
        )}`
    )
}

document.querySelector(".formulario-contato")
    .addEventListener("submit", enviarWhats)

// Scroll ativo
const sections = document.querySelectorAll("section, main")
const navLinks = document.querySelectorAll(".menu-link")

window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id")
        }
    })

    navLinks.forEach(link => {
        link.classList.remove("ativo")
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("ativo")
        }
    })
})

// Fade animation
const fades = document.querySelectorAll(".fade")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, { threshold: 0.3 })

fades.forEach(el => observer.observe(el))

// Título animado
const titulo = document.querySelector(".titulo-animado")
const texto = titulo.innerText

titulo.innerHTML = ""

texto.split("").forEach((letra, index) => {
    const span = document.createElement("span")
    span.innerText = letra === " " ? "\u00A0" : letra
    span.style.animationDelay = `${index * 0.08}s`
    titulo.appendChild(span)
})
