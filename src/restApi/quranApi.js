const quran_api = "https://api.npoint.io/99c279bb173a6e28359c/surat/";

const searchBtn = document.querySelector('.search-btn');
const inputKey = document.querySelector('.input-value');

export function getAyat() {
    fetch(quran_api + inputKey.value)
        .then(response => response.json())
        .then(response => console.log(response))
        .then(response => {
            const ayat = response;
            let cards = '';
            // ayat.forEach(m => cards += showAyat(m));
            ayat.array.forEach(m => {
                cards += showAyat(m)
            });
            const ayatContainer = document.querySelector('.ayat-container');
            ayatContainer.innerHTML = cards;
        });
};

export function showAyat(m) {
    return (
        <div>

        </div>
    )
}