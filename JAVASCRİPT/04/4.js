let giris = document.querySelector("#enter");
const add = document.querySelector("#add");
const sort = document.querySelector("#sort");
const removeLast = document.querySelector("#removeLast");
const removeFirst = document.querySelector("#removeFirst");
const removeAll = document.querySelector("#removeAll");
const reverse = document.querySelector("#reverse");
const mix = document.querySelector("#mix");
const list = document.querySelector("#list");

let liste = [];

const ekle = () => {
  if (!giris.value || !isNaN(giris.value)) return false;
  liste.push(giris.value);
  diziyeEkle();
  giris.value = "";
  giris.focus();
};

const diziyeEkle = () => {
  let dizi = "";
  liste.forEach((degree) => {
    dizi += `<li>${degree}</li>`;
  });
  list.innerHTML = dizi;
};

giris.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    ekle();
  }
});

document.querySelector("#add").addEventListener("click", () => {
  ekle();
});

function addList() {
  document.querySelector("#list").innerHTML = `<li>${data}</li>`;
}

const sortingen = (dizi) => {
  dizi.sort();
  diziyeEkle();
};

sort.addEventListener("click", () => {
  sortingen(liste);
});

const reversle = (dizi) => {
  dizi.reverse();
  diziyeEkle();
};
reverse.addEventListener("click", () => {
  reversle(liste);
});

const sondanKaldir = (dizi) => {
  dizi.pop();
  diziyeEkle();
};

removeLast.addEventListener("click", () => {
  sondanKaldir(liste);
});

const bastanCikar = (dizi) => {
  dizi.shift();
  diziyeEkle();
};
removeFirst.addEventListener("click", () => {
  bastanCikar(liste);
});

const alayiniKaldir = (dizi) => {
  while (dizi.length > 0) {
    dizi.pop();
  }
  diziyeEkle();
};
removeAll.addEventListener("click", () => {
  alayiniKaldir(liste);
});

const karistirHepsini = (dizi) => {
  const yeniArr = [];
  const mixDizi = [];
  while (true) {
    let x = Math.floor(Math.random() * (dizi.length - 1 + 1)) + 1;
    if (!yeniArr.includes(x)) {
      yeniArr.push(x);
    }
    if (yeniArr.length == dizi.length) {
      break;
    }
  }
  for (let i = 0; i < dizi.length; i++) {
    let x = yeniArr[i];
    mixDizi[i] = dizi[x - 1];
  }

  return mixDizi;
};

const diziyiMixleGari = () => {
  const sonDizi = karistirHepsini(liste);
  let dizi = "";
  sonDizi.forEach((degree) => {
    dizi += `<li>${degree}</li>`;
  });
  list.innerHTML = dizi;
};

mix.addEventListener("click", () => {
  diziyiMixleGari();
});
