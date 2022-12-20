let sayi1;
let sayi2;
let islem;
let ekranEl = document.querySelector("#ekran");
let yapılacakIslem = document.querySelector("#islem");

function sec(num) {
  ekranEl.innerHTML += num;
  ekranEl.innerHTML = Number(ekranEl.innerHTML);
}

function topla() {
  sayi1 = Number(ekranEl.innerHTML);
  ekranEl.innerHTML = "";
  islem = "+";
}

function cikar() {
  sayi1 = Number(ekranEl.innerHTML);
  ekranEl.innerHTML = "";
  islem = "-";
}
function carp() {
  sayi1 = Number(ekranEl.innerHTML);
  ekranEl.innerHTML = "";
  islem = "*";
}
function bol() {
  sayi1 = Number(ekranEl.innerHTML);
  ekranEl.innerHTML = "";
  islem = "/";
}
function sil() {
  sayi1 = 0;
  sayi2 = 0;
  ekranEl.innerHTML = 0;
  islem = "";
}

function hesapla() {
  sayi2 = Number(ekranEl.innerHTML);
  if (islem == "+") {
    ekranEl.innerHTML = sayi1 + sayi2;
  }
  if (islem == "-") {
    ekranEl.innerHTML = sayi1 - sayi2;
  }
  if (islem == "*") {
    ekranEl.innerHTML = sayi1 * sayi2;
  }
  if (islem == "/") {
    ekranEl.innerHTML = sayi1 / sayi2;
  }
}
