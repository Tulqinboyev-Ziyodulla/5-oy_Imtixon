// const navbar = document.querySelector(".navbar__collection")
// const API__URL = "https://fakestoreapi.com"
// const skeleton = document.querySelector(".skeleton")
// const wrapper = document.querySelector(".wrapper")
// const semore = document.querySelector(".semore")
// const collection = document.querySelector(".collection")
// for (let i = 0; i < 12; i++) {
//     let skeletonItem = document.createElement("div")
//     skeletonItem.classList.add("skeleton__item")
//     skeletonItem.innerHTML = `
//       <div class="skeletton__images skelete__inme"></div>
//                     <div class="skeleton__line skelete__inme"></div>
//                     <div class="skeleton__line skelete__inme"></div>
//                     <div class="skeleton__line skelete__inme"></div>
//     `
//     skeleton.append(skeletonItem)
// }
// let perPageCount = 8
// let offset = 1
// let category = "";
// async function fetchData(api, limit, category) {
//     let response = await fetch(`${api}/products${category}?limit=${limit}`)
//     response
//         .json()
//         .then(res => createCard(res))
//         .catch(err => console.log(err))
//         .finally(() => {
//             skeleton.style.display = "none"
//         })
// }
// fetchData(API__URL, perPageCount, category)

// function createCard(data) {
//     while (wrapper.firstChild) {
//         wrapper.firstChild.remove()
//     }
//     console.log(data.products[0]);
//     data.products.forEach((product) => {
//         let cardItem = document.createElement("div")
//         cardItem.classList.add("card")
//         cardItem.dataset.id = product.id
//         cardItem.innerHTML = `
//         <img class= "card__image" src=${product.images[0]} alt="">
//         <p>${product.title}</p>
//         <p class= "pi">${product.price}</p>
//             <div class="now">
//                 <div class="icon"><i class="fa-solid fa-star"></i></div>
//                 <div class="icon"><i class="fa-solid fa-star"></i></div>
//                 <div class="icon"><i class="fa-solid fa-star"></i></div>
//                 <div class="icon"><i class="fa-solid fa-star"></i></div>
//                 <div class="icon"><i class="fa-solid fa-star"></i></div>
//             </div>
//         `
//         wrapper.appendChild(cardItem)

//     })
// }
// semore.addEventListener("click", () => {
//     offset++
//     fetchData(API__URL, perPageCount * offset, category)
// })
// async function fetchCategory(api) {
//     let response = await fetch(`${api}/products/category-list`)
//     response
//         .json()
//         .then(res => createCategory(res))

// }
// fetchCategory(API__URL)

// function createCategory(data) {
//     data.forEach((category) => {
//         let list = document.createElement("li")
//         list.className = "item"
//         list.innerHTML = `
//         <data value="/category/${category}">${category}</data>
//         `
//         collection.appendChild(list)
//     })
// }
// collection.addEventListener("click", (e) => {
//     if (e.target.tagName === "DATA") {
//         let val = e.target.value
//         let category = val;
//         fetchData(API__URL, perPageCount * offset, category)
//     }
// })
// wrapper.addEventListener("click", (e) => {
//     if (e.target.className.includes("card__image"))
//         window.open(`/pages/product.html?id=${e.target.closest(".card").dataset.id} `, "_self")
// })



// function toggleShow() {
//     navbar.classList.toggle("show")
// }


// function setupCarousel() {
//     let maxPages = Math.ceil(usersData.length / itemsPerPage);

//     prevButton.onclick = () => {
//         if (currentPage > 1) {
//             currentPage--;
//             createCard();
//         }
//     };

//     nextButton.onclick = () => {
//         if (currentPage < maxPages) {
//             currentPage++;
//             createCard();
//         }
//     };
// }


const navbar = document.querySelector(".navbar__collection")
const API__URL = "https://fakestoreapi.com"
const skeleton = document.querySelector(".skeleton")
const wrapper = document.querySelector(".wrapper")
const semore = document.querySelector(".semore")
const collection = document.querySelector(".collection")
for (let i = 0; i < 12; i++) {
    let skeletonItem = document.createElement("div")
    skeletonItem.classList.add("skeleton__item")
    skeletonItem.innerHTML = `
                   <div class="skeletton__images skelete__inme"></div>
                    <div class="skeleton__line skelete__inme"></div>
                    <div class="skeleton__line skelete__inme"></div>
    `
    skeleton.append(skeletonItem)
}
let perPageCount = 8
let offset = 1
let category = "";
async function fetchData(api, limit, category) {
    let response = await fetch(`${api}/products${category}?limit=${limit}`)
    response
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
        .finally(() => {
            skeleton.style.display = "none"
        })
}
fetchData(API__URL, perPageCount, category)

function createCard(data) {
    while (wrapper.firstChild) {
        wrapper.firstChild.remove()
    }
    // console.log(data.products.id);
    data.forEach((product) => {
        let cardItem = document.createElement("div")
        cardItem.classList.add("card")
        cardItem.dataset.id = product.id
        cardItem.innerHTML = `
        <div class="card__foto"><img class= "card__image" src=${product.image} alt=""></div>
        
        <p class= "card__item" title ="${product.title}">${product.title}</p>
        <div class="card__star">
        <p class= "desck" title ="${product.description}">${product.price}$</p>
            <img src="./assets/Vector.svg" alt="">
            <img src="./assets/Vector.svg" alt="">
            <img src="./assets/Vector.svg" alt="">
            <img src="./assets/Vector.svg" alt="">
            <img src="./assets/Vector.svg" alt="">

        
        </div>
       <button class="buy">Add To Cart</button>
       <div class="card__icon">
       <div class="eey"> <i class="fa-solid fa-heart"></i></div>
       <div class="eey">  <i class="fa-solid  fa-eye"></i></div>
        </div> 
       
        `
        wrapper.appendChild(cardItem)

    })
}
semore.addEventListener("click", () => {
    offset++
    fetchData(API__URL, perPageCount * offset, category)
})
wrapper.addEventListener("click", (e) => {
    if (e.target.className.includes("card__image")){

        //console.log(e.target.closest(".card").dataset.id);

        let id = e.target.closest(".card").dataset.id

        console.log(id);
        window.open(`/pages/product.html?id=${id}`, "_self")

    }
})
function toggleShow() {
    navbar.classList.toggle("show")
}
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
