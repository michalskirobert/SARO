const dataLang = document.querySelector("html").lang;
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");

let root = document.getElementById("root");
let isLoading = true;
let url = "";
let view = "";
let closeIcon = "";

switch (dataLang) {
  case "ja":
    url = "./../assets/js/data/ja.json";
    closeIcon = "./../assets/img/embl/close.svg";
    view = "さらに読む";
    break;
  case "zh":
    url = "./../assets/js/data/zh.json";
    closeIcon = "./../assets/img/embl/close.svg";
    view = "更多";
    break;
  case "vi":
    url = "./../assets/js/data/vi.json";
    closeIcon = "./../assets/img/embl/close.svg";
    view = "Xem thêm";
    break;
  default:
    url = "./assets/js/data/en.json";
    closeIcon = "./assets/img/embl/close.svg";
    view = "See more";
    break;
}

let data = [];

const getData = async () => {
  const resp = await fetch(url);
  data = await resp.json();
  isLoading = false;
  display(data);
};

const display = (data) => {
  const useFetch = data
    .map((headling) => {
      const { page, people } = headling;
      return `<h3>${page}</h3>
          <div class="row">
         ${people
           .map((person) => {
             const { id, name, about, img, profession } = person;
             return `<div class="column" id=${id}>
             <div class="card">
                 <div class="container__card">
                 <div class="image-container">
                 <img src="./../../../assets/img/saro/${img}" alt="${name}"/>
                 </div>
                 <div class="container-card__item">
                     <h2>${name}</h2>
                     <p class="title">${profession}</p>
                     <p>${about.substring(0, 77)}...</p>
                     </div>
                     <div class="button-container">
                     <button class="button__black" onclick="modalOpen(${id});">${view}</button>
                     </div>
                 </div>
             </div>
         </div>
           `;
           })
           .join(" ")}
         </div>`;
    })
    .join(" ");
  root.innerHTML = useFetch;
};

const closeModal = () => {
  modal.classList.remove("show");
};

const modalOpen = (id) => {
  let showModal = data
    .map((pages) => {
      return pages.people
        .map((person) => {
          const { name, about, img, profession } = person;
          if (person.id === id) {
            return `<div key=${person.id} class="modal-container">
            <h1>${pages.page}</h1>
            <img src="${img}" alt="${name}"/>
            <h2>${name}</h2>
            <h3 style="text-decoration: underline; font-size: 22.5px;">${profession}</h3>
            <p>${about}</p>
            <button class="close" onclick="closeModal();"><img style="width: 4rem;" src="${closeIcon}" alt="close"></button>
            </div>`;
          }
        })
        .join("");
    })
    .join("");
  modal.classList.add("show");
  modal.innerHTML = showModal;
};

if (isLoading) {
  root.innerHTML = `<div class="loading"> <h2>LOADING...</h2>
   <div class="loadingio-spinner-bean-eater-swm5ygtgd9b"><div class="ldio-xnu0f7hmo3">
  <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
  </div></div></div>`;
}

getData();
