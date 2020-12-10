const mapLang = {
  en: {
    gender: "gender: ",
    findMore: "Find more about this name:",
    here: "here",
    write: `<p>Write some name e.g. <b>"Paulina"<b></p>`,
    notif: `<i>Type <b>g-m</b> for searching only masculine names <br>
    or <b>g-f</b> for only feminine names</i>`,
    female: "female",
    male: "male",
  },
  ja: {
    gender: "性別: ",
    findMore: "この名前については",
    here: "こちら",
    write: `<p>名前を入力して下さい例<b>「Paulina」<b></p>`,
    notif: `<i>男性の名を知りたければ、<b>「g-m」</b>と入力して下さい。<br>
    もしくは、女性の名前だったら、<b>「g-f」</b></i>`,
    female: "女性",
    male: "男性",
  },
  zh: {
    gender: "性别: ",
    findMore: "查看更多关于这个名字的信息",
    here: "这里",
    write: `<p>输入一些名字，比如
     <b>"Paulina"<b></p>`,
    notif: `<i>仅搜索男性名字<b>「g-m」</b><br>
    仅搜索女性名字 <b>「g-f」</b></i>`,
    female: "女性",
    male: "男性",
  },
  vi: {
    gender: "Giới tính: ",
    findMore: "Tìm thêm nhiều tên hơn",
    here: "ở đây",
    write: `<p>Hãy viết một vài cái tên, ví dụ <b>"Paulina"<b></p>`,
    notif: `<i>Loại <b>g-m</b> Tìm kiếm tên cho nam giới <br>
    hoặc <b>g-f</b> Cho tên của nữ giới</i>`,
    female: "giống cái",
    male: "Nam giới",
  },
};
const root = document.getElementById("root");
const searchBar = document.getElementById("searchBar");
const isLang = document.querySelector("html").lang;
let namesArray = [];
let lang = "";

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
    const res = await fetch("./../../../../assets/js/data/polishNames.json");
    namesArray = await res.json();
    displayData(namesArray);

    switch (isLang) {
      case "ja":
      case "zh":
        lang = "ja";
        break;
      case "vi":
        break;
      case "ko":
        break;
      default:
        lang = "en";
        break;
    }

    namesArray.map((person) => {
      if (person.gender == "female") {
        person.gender = mapLang[lang].female;
      } else if (person.gender == "male") {
        person.gender = mapLang[lang].male;
      }
    });
  } catch (err) {
    console.error(err);
  }
};

if (isLang === "en") {
  lang = "en";
} else if (isLang === "ja") {
  lang = "ja";
} else if (isLang === "zh") {
  lang = "zh";
} else if (isLang === "vi") {
  lang = "vi";
}

const displayData = (data) => {
  if (!searchBar.value) {
    root.innerHTML = `${mapLang[lang].write}`;
    root.style.overflowY = "hidden";
  } else {
    root.style.overflowY = "scroll";
    const htmlString = data
      .map((person) => {
        return `
            <div key=${person.key} class="names__item">
            <img src="${person.img}" alt="${person.gender} ${person.name}"></img>
                <h2>${person.name}</h2>
                <h3>${mapLang[lang].gender} ${person.gender}</h3>
                <p>${mapLang[lang].findMore} "${person.name}" <a href="https://en.wikipedia.org/wiki/${data.name}_(given_name)">${mapLang[lang].here}</a></p>
                </div>
            `;
      })
      .join("");
    root.innerHTML = htmlString;
  }
};

document.getElementById("notif").innerHTML = `${mapLang[lang].notif}`;

loadData();
