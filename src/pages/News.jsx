// const api_url = "https://api-berita-indonesia.vercel.app/antara/terbaru/2";


// fetch(api_url)
//     .then(response => response.json())
//     .then(response => console.log(response))

// function cardNews(m) {
//     return (
//         <div>

//         </div>
//     )
// }

const News = () => {
    return (
        <div className="max-w-full py-16 pb-96">
            <div id="news" className="news"></div>
        </div>
    )
}


// TEST PERTAMA

// async function getNews() {
//     const response = await fetch(api_url);
//     const total = await response.json();
//     const hasil = total.data
//     const isi = hasil.posts // tambahkan id array di belakang dengan besar 20

//     document.getElementById("title").textContent = hasil.description;

//     function addNews(isi) {
//         var newsCard = document.getElementById("news");
//         for (var i = 0; i < isi.length; i++) {
//             var div = document.createElement("div");
//             div.innerHTML = 'Name: ' + isi[i].firstName + ' ' + isi[i].lastName;
//             newsCard.appendChild(div);
//         }
//     }


//     console.log(total)
// };

// getNews();


// TEST KEDUA

// fetch(api_url)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (all) {
//         addNews(all);
//         console.log(all.data.posts)
//     })
//     .catch(function (err) {
//         console.log('error: ' + err);
//     });

// function addNews(all) {
//     var card = document.getElementById("news");
//     for (var i = 0; i < all.data.posts.length; i++) {
//         var div = document.createElement("div");
//         div.innerHTML = 'title: ' + all.data.posts + 'deskripsi: ' + all.data.posts;
//         card.appendChild(div);
//     }
// }

export default News