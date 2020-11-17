const root = document.getElementById("root");
const searchBar = document.getElementById("searchBar");
let namesArray = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredData = namesArray.filter((data) => {
    return (
      data.name.toLowerCase().includes(searchString) ||
      data.gender.toLowerCase().includes(searchString) ||
      data.key.toLowerCase().includes(searchString)
    );
  });
  displayData(filteredData);
});

const loadData = async () => {
  try {
    const res = await fetch("./js/polishNames.json");
    namesArray = await res.json();
    displayData(namesArray);
  } catch (err) {
    console.error(err);
  }
};

const displayData = (data) => {
  if (!searchBar.value) {
    root.innerHTML = `<p>Write some name e.g. <b>"Paulina"<b></p>`;
    root.style.overflowY = "hidden";
  } else {
    root.style.overflowY = "scroll";
    const htmlString = data
      .map((data) => {
        return `
            <div key=${data.key} class="names__item">
            <img src="./img/${data.gender}.svg" alt="${data.gender} ${data.name}"></img>
                <h2>${data.name}</h2>
                <h3>Gender: ${data.gender}</h3>
                <p>Find more about name "${data.name}" <a href="https://en.wikipedia.org/wiki/${data.name}_(given_name)">here</a></p>
                </div>
            `;
      })
      .join("");
    root.innerHTML = htmlString;
  }
};
loadData();
