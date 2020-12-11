import { owners, group, exCrew } from "./data.js";

export const root = document.querySelector("#root");

function dataBuild() {
  const people = owners
    .map((person) => {
      const { name, profession, img, id, about } = person;
      return `
    <div class="column" id=${id}>
    <div class="card">
        <img src="${img}" alt="${name}" style="width:100%">
        <div class="container__card">
        <div class="container-card__item">
            <h2>${name}</h2>
            <p class="title">${profession}</p>
            <p>${about}</p>
            </div>
            <div class="container-card__item--button">
            <button class="button__black">Contact</button>
            </div>
        </div>
    </div>
</div> `;
    })
    .join("");

  const crew = group
    .map((person) => {
      const { name, profession, img, id, about } = person;
      return `
      <div class="column" id=${id}>
      <div class="card">
          <img src="${img}" alt="${name}" style="width:100%">
          <div class="container__card">
          <div class="container-card__item">
              <h2>${name}</h2>
              <p class="title">${profession}</p>
              <p>${about}</p>
              </div>
              <div class="container-card__item--button">
              <button class="button__black">Contact</button>
              </div>
          </div>
      </div>
</div> `;
    })
    .join("");

  const exGroup = exCrew
    .map((person) => {
      const { name, profession, img, id, about } = person;
      return `
      <div class="column" id=${id}>
      <div class="card">
          <img src="${img}" alt="${name}" style="width:100%">
          <div class="container__card">
          <div class="container-card__item">
              <h2>${name}</h2>
              <p class="title">${profession}</p>
              <p>${about}</p>
              </div>
              <div class="container-card__item--button">
              <button class="button__black">Contact</button>
              </div>
          </div>
      </div>
</div> `;
    })
    .join("");

  root.innerHTML = `
<h3>Owners</h3>
<div class="row">
${people}
</div>
<h3>The crew</h3>
<div class="row">
${crew}
</div>
<h3>Ex crew</h3>
<div class="row">
${exGroup}
</div>`;

  const button = document.querySelectorAll(".button__black");
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (e) => {
      window.open("contact.html");
    });
  }
}
export default dataBuild;
