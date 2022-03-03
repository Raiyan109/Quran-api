const searchBtn = () => {
    const input = document.getElementById('input')
    const inputField = input.value.toLowerCase()
    const url = `http://api.alquran.cloud/v1/juz/${inputField}/${inputField}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayAyah(data.data.ayahs))
}
const displayAyah = ayahs => {
    console.log(ayahs)
    const main = document.getElementById('container')
    for (const ayah of ayahs) {
        console.log(ayah)
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <h class="surah">${ayah.text}</h>
        <p class="surah">${ayah.juz}</p>
        <p class="surah">${ayah.surah.name}</p>
        `
        main.appendChild(div)
    }
}