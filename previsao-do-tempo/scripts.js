const key = "abb8f19f6b85f577a3c48aec2b1caf4d"

const inputCidade = document.querySelector(".input-cidade")
const botaoBusca = document.querySelector(".botao-busca")
const cidadeEl = document.querySelector(".cidade")
const tempEl = document.querySelector(".temp")
const textoPrevisaoEl = document.querySelector(".texto-previsao")
const umidadeEl = document.querySelector(".umidade")
const imgPrevisaoEl = document.querySelector(".img-previsao")

function colocarDadosNaTela(dados) {
    if (dados.cod !== 200) {
        alert("Cidade não encontrada")
        return
    }

    cidadeEl.innerHTML = `Tempo em ${dados.name}`
    tempEl.innerHTML = `${Math.floor(dados.main.temp)} <span class="grau">°</span>C`
    textoPrevisaoEl.innerHTML = dados.weather[0].description
    umidadeEl.innerHTML = `Umidade ${dados.main.humidity}%`
    imgPrevisaoEl.src =
        `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    tempEl.innerHTML = "Carregando..."

    const resposta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
    )

    const dados = await resposta.json()
    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = inputCidade.value.trim()
    if (cidade) buscarCidade(cidade)
}

/* Eventos */
botaoBusca.addEventListener("click", cliqueiNoBotao)

inputCidade.addEventListener("keypress", e => {
    if (e.key === "Enter") cliqueiNoBotao()
})







