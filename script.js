const nilaiPertama = [
  {
    title: "Simulasi Nilai Skripsi",
    subTitle: ["No", "Komponen Penilaian ", "Skor", "Bobot", "Bobot x Skor"],
    data: [
      {
        no: "1",
        komponenPenilaian:
          "Ketepatan dan kedisiplinan selama pelaksanaan bimbingan skripsi",
        bobot: 50,
      },
      {
        no: "2",
        komponenPenilaian:
          "Kemauan dan tingkat keseriusan dalam menyelesaikan skripsi",
        bobot: 50,
      },
    ],
  },
];

const hitungNilai = function (e) {
  const hasilSkor = (e.target.value / 50) * 50;

  const { name, value } = e.target;
  let resPertama = 0;
  const bobotxskor = document.querySelectorAll("#bobotxskor");

  value > 50
    ? Swal.fire({
        title: "Error!",
        text: "Nilai maksimal 50",
        icon: "error",
        confirmButtonText: "Ok",
      })
    : isNaN(value) || value === "" || value === undefined
    ? Swal.fire({
        title: "Error!",
        text: "Nilai tidak boleh kosong",
        icon: "error",
        confirmButtonText: "Ok",
      })
    : bobotxskor.forEach((result) => {
        if (result.name === name) {
          result.value = hasilSkor;
        }
        resPertama += parseInt(result.value);
      });

  const totalBobotSkor = document.getElementById("totalBobotxSkor");
  totalBobotSkor.value = resPertama;
  hasilResPertama = (resPertama * 40) / 100;
  console.log(hasilResPertama);
};

// const form = document.createElement("form");
const form = document.querySelector(".form__pertama");
form.classList.add("form__pertama");

nilaiPertama.forEach((result) => {
  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const subTitleContent = document.createElement("tr");

  result.subTitle.forEach((title) => {
    const subTitleElement = document.createElement("th");
    subTitleElement.innerHTML = title;
    subTitleContent.appendChild(subTitleElement);
    thead.appendChild(subTitleContent);
    table.appendChild(thead);
    // form.appendChild(table);
  });

  const tBody = document.createElement("tbody");
  result.data.forEach((data) => {
    const tr = document.createElement("tr");

    const noElement = document.createElement("td");
    noElement.textContent = data.no;
    tr.appendChild(noElement);

    const komponenPenilaianElement = document.createElement("td");
    komponenPenilaianElement.textContent = data.komponenPenilaian;
    tr.appendChild(komponenPenilaianElement);

    // skor input
    const skorElement = document.createElement("td");
    const skorElementInput = document.createElement("input");

    skorElementInput.setAttribute("type", "number");
    skorElementInput.setAttribute("autocomplete", "off");
    skorElementInput.setAttribute("id", "skor");
    // get different name for each input
    skorElementInput.setAttribute("name", data.no);
    // skorElementInput.setAttribute("name", "skor");
    skorElementInput.setAttribute("min", "0");
    skorElementInput.setAttribute("max", "50");
    skorElementInput.setAttribute("value", "0");
    // when user change input, call function
    skorElementInput.addEventListener("input", hitungNilai);
    skorElementInput.classList.add("input__content");

    skorElement.appendChild(skorElementInput);
    tr.appendChild(skorElement);

    // bobot x skor input
    const bobotElement = document.createElement("td");
    bobotElement.textContent = data.bobot;
    tr.appendChild(bobotElement);

    const bobotxskorElement = document.createElement("td");
    const bobotxskorElementInput = document.createElement("input");
    bobotxskorElementInput.setAttribute("type", "number");
    bobotxskorElementInput.setAttribute("disabled", "disabled");
    bobotxskorElementInput.setAttribute("autocomplete", "off");
    bobotxskorElementInput.setAttribute("id", "bobotxskor");
    // get different name for each input
    bobotxskorElementInput.setAttribute("name", data.no);
    // bobotxskorElementInput.setAttribute("name", "bobotxskor");
    bobotxskorElementInput.setAttribute("min", "0");
    bobotxskorElementInput.setAttribute("max", "4");
    bobotxskorElementInput.setAttribute("value", "0");
    bobotxskorElementInput.classList.add("input__content");
    bobotxskorElement.appendChild(bobotxskorElementInput);
    tr.appendChild(bobotxskorElement);

    tBody.appendChild(tr);
    table.appendChild(tBody);
  });

  const totalTr = document.createElement("tr");
  const totalTd = document.createElement("td");
  const totalBobot = document.createElement("td");
  const totalBobotxSkor = document.createElement("td");
  const totalBobotxSkorInput = document.createElement("input");

  totalTd.setAttribute("colspan", "3");
  totalTd.textContent = "Total";
  const total = result.data.reduce((acc, cur) => acc + cur.bobot, 0);
  totalBobot.textContent = total;
  totalBobotxSkorInput.setAttribute("type", "number");
  totalBobotxSkorInput.setAttribute("disabled", "disabled");
  totalBobotxSkorInput.setAttribute("autocomplete", "off");
  totalBobotxSkorInput.setAttribute("id", "totalBobotxSkor");
  totalBobotxSkorInput.setAttribute("name", "totalBobotxSkor");
  totalBobotxSkorInput.setAttribute("min", "0");
  totalBobotxSkorInput.setAttribute("max", "4");
  totalBobotxSkorInput.setAttribute("value", "0");
  totalBobotxSkorInput.classList.add("input__content");
  totalBobotxSkor.appendChild(totalBobotxSkorInput);

  totalTr.appendChild(totalTd);
  totalTr.appendChild(totalBobot);
  totalTr.appendChild(totalBobotxSkor);
  tBody.appendChild(totalTr);
  form.appendChild(table);
});

// nilai kedua
const nilaiKedua = [
  {
    subTitle: [
      "No",
      "Komponen Penilaian",
      "Skor Penguji",
      "Rata-rata",
      "Bobot",
      "Bobot x Skor",
    ],
    data: [
      {
        no: "1",
        komponenPenilaian: "Orisinalitas dan kebaruan topik penelitian",
        bobot: 15,
        skorPenguji: ["penguji 1", "penguji 2", "penguji 3"],
      },
      {
        no: "2",
        komponenPenilaian:
          "RELEVANSI LOGIS ANTARA JUDUL, MASALAH, TEORI, METODE DAN HASIL PENELITIAN",
        bobot: 20,
        skorPenguji: ["penguji 1", "penguji 2", "penguji 3"],
      },
      {
        no: "3",
        komponenPenilaian: "TATA TULIS",
        bobot: 20,
        skorPenguji: ["penguji 1", "penguji 2", "penguji 3"],
      },
      {
        no: "4",
        komponenPenilaian: "PENGUASAAN MATERI PENELITIAN",
        bobot: 20,
        skorPenguji: ["penguji 1", "penguji 2", "penguji 3"],
      },
      {
        no: "5",
        komponenPenilaian: "PRESENTASI DAN ARGUMENTASI JAWABAN",
        bobot: 15,
        skorPenguji: ["penguji 1", "penguji 2", "penguji 3"],
      },
      {
        no: "6",
        komponenPenilaian: "PENAMPILAN SAAT PRESENTASI",
        bobot: 10,
        skorPenguji: ["penguji 1", "penguji 2", "penguji 3"],
      },
    ],
    jumlahPenguji: ["1", "2", "3"],
  },
];

// *
let hasilResPertama = 0;
let hasilResKedua = 0;

console.log(hasilResPertama);

const getRataRata = function (e) {
  const { value, name, untuk } = e.target;
  const skorPenguji = document.querySelectorAll("#skorPenguji");
  const skorRataRata = document.querySelectorAll("#rataRata");
  const bobotxSkor = document.querySelectorAll("#bobotxSkor");
  // const rataContent = document.querySelectorAll(".rata__content");
  const totalNilai = document.querySelector("#totalNilai");

  let hasilSkorPenguji = 0;
  let res = 0;
  let hasilTotalNilaiPertama = 0;

  // const nilaiAkhirPertama = (hasilTotalNilaiPertama * 40) / 100;
  // const nilaiAkhirKedua = (hasilTotalNilaiKedua * 60) / 100;

  skorPenguji.forEach((skor) => {
    if (skor.name === name) {
      hasilSkorPenguji += parseInt(skor.value);

      // if the input user is not a number or empty
      isNaN(hasilSkorPenguji)
        ? Swal.fire({
            title: "Error!",
            text: "Nilai tidak boleh kosong",
            icon: "error",
            confirmButtonText: "Ok",
          })
        : console.log("ok");

      skorRataRata.forEach((rataRata) => {
        if (rataRata.name === name) {
          rataRata.value = hasilSkorPenguji / 3;
          res = hasilSkorPenguji / 3;
        }
      });
    }
  });

  let newBobot = 0;
  bobotxSkor.forEach((bobot, i) => {
    if (bobot.name === name) {
      const getBobot = nilaiKedua[0].data[i].bobot;

      // const bobotRes = parseInt((res / getBobot) * getBobot);
      const bobotRes = (res / getBobot) * getBobot;

      bobot.value = bobotRes;
    }
    newBobot += parseFloat(bobot.value);
  });
  totalNilai.value = newBobot;
};

// bobotxskor.forEach((result) => {
//   if (result.name === name) {
//     result.value = hasilSkor;
//   }
//   res += parseInt(result.value);
// });
// console.log(getBobot);
// const skorPengujiLength = nilaiKedua[0].data[0].skorPenguji.length;

nilaiKedua.forEach((result) => {
  const form = document.querySelector(".form__kedua");
  form.classList.add("form__kedua");
  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const subTitleContent = document.createElement("tr");
  const addScorPengujiContent = document.createElement("tr");

  result.subTitle.forEach((subTitle) => {
    const subTitleElement = document.createElement("th");
    subTitleElement.setAttribute("rowspan", "2");
    if (subTitle === "Skor Penguji") {
      subTitleElement.setAttribute("colspan", "3");
      subTitleElement.removeAttribute("rowspan");
    }
    subTitleElement.textContent = subTitle;
    subTitleContent.appendChild(subTitleElement);
  });

  result.jumlahPenguji.forEach((jumlahPenguji) => {
    const addSkorPengujiContent = document.createElement("th");
    addSkorPengujiContent.textContent = `${jumlahPenguji}`;
    addScorPengujiContent.appendChild(addSkorPengujiContent);
  });

  thead.appendChild(subTitleContent);
  thead.appendChild(addScorPengujiContent);

  const tBody = document.createElement("tbody");
  result.data.forEach((data) => {
    // const tr = document.createElement("tr");

    // no
    const tr = document.createElement("tr");
    const noElement = document.createElement("td");
    noElement.textContent = data.no;
    tr.appendChild(noElement);

    // komponen penilaian
    const komponenPenilaianElement = document.createElement("td");
    komponenPenilaianElement.textContent = data.komponenPenilaian;
    tr.appendChild(komponenPenilaianElement);

    // skor penguji
    data.skorPenguji.forEach((sp) => {
      const skorPengujiElement = document.createElement("td");
      const skorPengujiElementInput = document.createElement("input");
      skorPengujiElementInput.setAttribute("type", "number");
      skorPengujiElementInput.setAttribute("autocomplete", "off");
      skorPengujiElementInput.setAttribute("id", "skorPenguji");
      // get different name for each input
      skorPengujiElementInput.setAttribute("name", `${data.no} x `);
      skorPengujiElementInput.setAttribute("untuk", `${data.no}`);
      // skorPengujiElementInput.setAttribute("name", `${data.no} x ${sp}`);
      // skorPengujiElementInput.setAttribute("name", data.no + sp);
      skorPengujiElementInput.setAttribute("min", "0");
      skorPengujiElementInput.setAttribute("max", "4");
      skorPengujiElementInput.setAttribute("value", "0");
      skorPengujiElementInput.classList.add("input__content");
      skorPengujiElementInput.addEventListener("input", getRataRata);
      skorPengujiElement.appendChild(skorPengujiElementInput);
      tr.appendChild(skorPengujiElement);
    });

    // const rataRataElement = document.createElement("td");
    // const rataRataElementInput = document.createElement("input");
    // rataRataElementInput.setAttribute("type", "number");
    // // rataRataElementInput.setAttribute("disabled", "disabled");
    // rataRataElementInput.setAttribute("autocomplete", "off");
    // rataRataElementInput.setAttribute("id", "rataRata");
    // // get different name for each input
    // // rataRataElementInput.setAttribute("name", `${data.no} x`);
    // rataRataElementInput.setAttribute("untuk", `${data.no}`);
    // // data.skorPenguji.forEach((sp) => {
    // //   rataRataElementInput.setAttribute("name", `${data.no} x ${sp}`);
    // // });
    // rataRataElementInput.setAttribute("min", "0");
    // rataRataElementInput.setAttribute("max", "4");
    // rataRataElementInput.setAttribute("value", "0");
    // rataRataElementInput.classList.add("input__content");
    // rataRataElement.appendChild(rataRataElementInput);
    // tr.appendChild(rataRataElement);

    const rataRataElement = document.createElement("td");
    const rataRataElementInput = document.createElement("input");
    rataRataElementInput.setAttribute("type", "number");
    rataRataElementInput.setAttribute("autocomplete", "off");
    rataRataElementInput.setAttribute("disabled", "disabled");
    rataRataElementInput.setAttribute("id", "rataRata");
    // get different name for each input
    rataRataElementInput.setAttribute("name", `${data.no} x `);
    rataRataElementInput.setAttribute("untuk", `${data.no}`);
    // rataRataElementInput.setAttribute("name", `${data.no} x ${sp}`);
    // rataRataElementInput.setAttribute("name", data.no + sp);
    rataRataElementInput.setAttribute("min", "0");
    rataRataElementInput.setAttribute("max", "4");
    rataRataElementInput.setAttribute("value", "0");
    rataRataElementInput.classList.add("input__content");
    rataRataElementInput.addEventListener("input", getRataRata);
    rataRataElement.appendChild(rataRataElementInput);
    tr.appendChild(rataRataElement);

    // bobot
    const bobotElement = document.createElement("td");
    bobotElement.textContent = data.bobot;
    tr.appendChild(bobotElement);

    // bobot x skor
    const bobotxSkorElement = document.createElement("td");
    const bobotxSkorElementInput = document.createElement("input");
    bobotxSkorElementInput.setAttribute("type", "number");
    bobotxSkorElementInput.setAttribute("disabled", "disabled");
    bobotxSkorElementInput.setAttribute("autocomplete", "off");
    bobotxSkorElementInput.setAttribute("id", "bobotxSkor");
    // get different name for each input
    bobotxSkorElementInput.setAttribute("name", `${data.no} x `);
    bobotxSkorElementInput.setAttribute("min", "0");
    bobotxSkorElementInput.setAttribute("max", "4");
    bobotxSkorElementInput.setAttribute("value", "0");
    bobotxSkorElementInput.classList.add("input__content");
    // bobotxSkorElementInput.addEventListener("input", getBobotxSkor);
    bobotxSkorElement.appendChild(bobotxSkorElementInput);
    tr.appendChild(bobotxSkorElement);

    tBody.appendChild(tr);
    table.appendChild(tBody);
  });

  // total
  const totalTr = document.createElement("tr");
  const totalTd = document.createElement("td");
  // const totalBobot = document.createElement("td");
  const totalBobotxSkor = document.createElement("td");
  const totalBobotxSkorInput = document.createElement("input");

  totalTd.setAttribute("colspan", "7");
  totalTd.textContent = "Total";
  // const total = result.data.reduce((acc, cur) => acc + cur.bobot, 0);
  // totalBobot.textContent = total;
  totalBobotxSkorInput.setAttribute("type", "number");
  totalBobotxSkorInput.setAttribute("disabled", "disabled");
  totalBobotxSkorInput.setAttribute("autocomplete", "off");
  totalBobotxSkorInput.setAttribute("id", "totalNilai");
  totalBobotxSkorInput.setAttribute("name", "totalNilai");
  totalBobotxSkorInput.setAttribute("min", "0");
  totalBobotxSkorInput.setAttribute("max", "4");
  totalBobotxSkorInput.setAttribute("value", "0");
  totalBobotxSkorInput.classList.add("input__content");
  totalBobotxSkor.appendChild(totalBobotxSkorInput);

  totalTr.appendChild(totalTd);
  // totalTr.appendChild(totalBobot);
  totalTr.appendChild(totalBobotxSkor);
  tBody.appendChild(totalTr);
  form.appendChild(table);

  // nilai akhir
  const nilaiAkhirTr = document.createElement("tr");
  const nilaiAkhirTd = document.createElement("td");
  const nilaiAkhirskor = document.createElement("td");
  const nilaiAkhirInput = document.createElement("input");

  nilaiAkhirTd.setAttribute("colspan", "7");
  nilaiAkhirTd.textContent = "Nilai Akhir";
  nilaiAkhirInput.setAttribute("type", "number");
  nilaiAkhirInput.setAttribute("disabled", "disabled");
  nilaiAkhirInput.setAttribute("autocomplete", "off");
  nilaiAkhirInput.setAttribute("id", "nilaiAkhir");
  nilaiAkhirInput.setAttribute("name", "nilaiAkhir");
  nilaiAkhirInput.setAttribute("min", "0");
  nilaiAkhirInput.setAttribute("max", "4");
  nilaiAkhirInput.setAttribute("value", "0");
  nilaiAkhirInput.classList.add("input__content");
  nilaiAkhirskor.appendChild(nilaiAkhirInput);

  nilaiAkhirTr.appendChild(nilaiAkhirTd);
  nilaiAkhirTr.appendChild(nilaiAkhirskor);
  tBody.appendChild(nilaiAkhirTr);
  form.appendChild(table);

  // nilai huruf
  const nilaiHurufTr = document.createElement("tr");
  const nilaiHurufTd = document.createElement("td");
  const nilaiHurufskor = document.createElement("td");
  const nilaiHurufInput = document.createElement("input");

  nilaiHurufTd.setAttribute("colspan", "7");
  nilaiHurufTd.textContent = "Nilai Akhir";
  nilaiHurufInput.setAttribute("type", "number");
  nilaiHurufInput.setAttribute("disabled", "disabled");
  nilaiHurufInput.setAttribute("autocomplete", "off");
  nilaiHurufInput.setAttribute("id", "nilaiHuruf");
  nilaiHurufInput.setAttribute("name", "nilaiHuruf");
  nilaiHurufInput.setAttribute("min", "0");
  nilaiHurufInput.setAttribute("max", "4");
  nilaiHurufInput.setAttribute("value", "0");
  nilaiHurufInput.classList.add("input__content");
  nilaiHurufskor.appendChild(nilaiHurufInput);

  nilaiHurufTr.appendChild(nilaiHurufTd);
  nilaiHurufTr.appendChild(nilaiHurufskor);
  tBody.appendChild(nilaiHurufTr);
  form.appendChild(table);

  table.appendChild(thead);
  form.appendChild(table);
});
