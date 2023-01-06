// __nilai pertama
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
// __nilai kedua
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

const onHandleInput = (e) => {
  const inputBobotxSkor = document.querySelectorAll("#bobotxskor");
  const scores = document.querySelectorAll("#skor");

  const getValue = e.target.value;
  const getName = e.target.name;
  const getUserInputValue = (getValue / 50) * 50;
  let resultFirst = 0;

  if (getValue > 50) {
    Swal.fire({
      title: "Error!",
      text: "Nilai maksimal 50",
      icon: "error",
      confirmButtonText: "Ok",
    });
  } else if (isNaN(getValue) || getValue === "" || getValue === undefined) {
    Swal.fire({
      title: "Error!",
      text: "Nilai tidak boleh kosong",
      icon: "error",
      confirmButtonText: "Ok",
    });

    // reset all input when the user input empty
    scores.forEach((skor) => {
      skor.placeholder = 0;
    });
  } else {
    inputBobotxSkor.forEach((result) => {
      if (result.name === getName) {
        result.value = getUserInputValue;
      }
      resultFirst += parseInt(result.value);
    });
  }

  // get total bobot x skor
  const totalBobotSkor = document.getElementById("totalBobotxSkor");
  totalBobotSkor.value = resultFirst;

  // get nilai akhir
  // const hasilAkhir = document.getElementById("nilaiAkhir");

  // const nilaiAkhirPertama = (resultFirst * 40) / 100;
  // const nilaiAkhirKedua = (newBobot * 60) / 100;
  // hasilAkhir.value = nilaiAkhirPertama + nilaiAkhirKedua;

  // // get nilai huruf
  // const nilaiHuruf = document.getElementById("nilaiHuruf");
  // const nilaiAkhir = nilaiAkhirPertama + nilaiAkhirKedua;
  // if (nilaiAkhir >= 86 && nilaiAkhir <= 100) {
  //   nilaiHuruf.innerHTML = "A";
  // } else if (nilaiAkhir >= 81 && nilaiAkhir < 86) {
  //   nilaiHuruf.innerHTML = "A-";
  // } else if (nilaiAkhir >= 76 && nilaiAkhir < 81) {
  //   nilaiHuruf.innerHTML = "B+";
  // } else if (nilaiAkhir >= 71 && nilaiAkhir < 76) {
  //   nilaiHuruf.innerHTML = "B";
  // } else if (nilaiAkhir >= 66 && nilaiAkhir < 71) {
  //   nilaiHuruf.innerHTML = "B-";
  // } else if (nilaiAkhir >= 61 && nilaiAkhir < 66) {
  //   nilaiHuruf.innerHTML = "C+";
  // } else if (nilaiAkhir >= 56 && nilaiAkhir < 61) {
  //   nilaiHuruf.innerHTML = "C";
  // } else if (nilaiAkhir >= 41 && nilaiAkhir < 56) {
  //   nilaiHuruf.innerHTML = "D";
  // } else {
  //   nilaiHuruf.innerHTML = "E";
  // }
};

const onHandleInput__2 = (e) => {
  // KEDUA
  // get rata-rata
  const testerScores = document.querySelectorAll("#skorPenguji");
  const averageScores = document.querySelectorAll("#rataRata");
  const inputBobotxSkor__2 = document.querySelectorAll("#bobotxSkor");
  const totalValue = document.querySelector("#totalNilai");

  const getName__2 = e.target.name;
  const getValue__2 = e.target.value;
  let resultTesterScores = 0;
  let tempResult = 0;

  testerScores.forEach((skor) => {
    if (skor.name === getName__2) {
      resultTesterScores += parseInt(skor.value);
      // resultTesterScores += skor.value;
      // resultTesterScores += parseFloat(skor.value);

      if (getValue__2 >= 100) {
        return Swal.fire({
          title: "Error!",
          text: "Nilai maksimal 100",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }

      // if the input user isn't a number or empty
      isNaN(resultTesterScores) &&
        Swal.fire({
          title: "Error!",
          text: "Isikan semua nilai penguji ",
          icon: "error",
          confirmButtonText: "Ok",
        });

      averageScores.forEach((rataRata) => {
        if (rataRata.name === getName__2) {
          rataRata.value = (resultTesterScores / 3).toFixed(2);
          tempResult = resultTesterScores / 3;
        }
      });
    }
  });

  let newBobot = 0;

  inputBobotxSkor__2.forEach((bobot, i) => {
    if (bobot.name === getName__2) {
      const getBobot = nilaiKedua[0].data[i].bobot;
      // const bobotRes = parseInt((tempResult / getBobot) * getBobot);
      const bobotRes = (tempResult / getBobot) * getBobot;
      bobot.value = bobotRes.toFixed(2);
    }
    newBobot += parseFloat(bobot.value);
  });

  // get nilai akhir__1
  // totalValue.value = newBobot;
};

// ! first form

nilaiPertama.forEach((result) => {
  const form = document.querySelector(".form__pertama");
  form.classList.add("form__pertama");

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const subTitleContent = document.createElement("tr");

  // sub title
  result.subTitle.forEach((title) => {
    const subTitleElement = document.createElement("th");
    subTitleElement.innerHTML = title;
    subTitleContent.appendChild(subTitleElement);
    thead.appendChild(subTitleContent);
    table.appendChild(thead);
  });

  // table body
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
    skorElementInput.setAttribute("name", data.no);
    skorElementInput.setAttribute("min", "0");
    skorElementInput.setAttribute("max", "50");
    skorElementInput.setAttribute("placeholder", "0");
    skorElementInput.addEventListener("input", onHandleInput);
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
    bobotxskorElementInput.setAttribute("id", "bobotxskor");
    bobotxskorElementInput.setAttribute("name", data.no);
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

// ! second form
nilaiKedua.forEach((result) => {
  const form = document.querySelector(".form__kedua");
  form.classList.add("form__kedua");

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const subTitleContent = document.createElement("tr");
  const addScorPengujiContent = document.createElement("tr");

  // sub title
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

  // skor penguji
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
      skorPengujiElementInput.setAttribute("name", `${data.no} x `);
      skorPengujiElementInput.setAttribute("min", "0");
      skorPengujiElementInput.setAttribute("max", "4");
      skorPengujiElementInput.setAttribute("placeholder", "0");
      skorPengujiElementInput.classList.add("input__content");
      skorPengujiElementInput.addEventListener("input", onHandleInput__2);
      skorPengujiElement.appendChild(skorPengujiElementInput);
      tr.appendChild(skorPengujiElement);
    });

    const rataRataElement = document.createElement("td");
    const rataRataElementInput = document.createElement("input");
    rataRataElementInput.setAttribute("type", "number");
    rataRataElementInput.setAttribute("autocomplete", "off");
    rataRataElementInput.setAttribute("disabled", "disabled");
    rataRataElementInput.setAttribute("id", "rataRata");
    rataRataElementInput.setAttribute("name", `${data.no} x `);
    rataRataElementInput.setAttribute("untuk", `${data.no}`);
    rataRataElementInput.setAttribute("min", "0");
    rataRataElementInput.setAttribute("max", "4");
    rataRataElementInput.setAttribute("value", "0");
    rataRataElementInput.classList.add("input__content");
    rataRataElementInput.addEventListener("input", onHandleInput__2);
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
    bobotxSkorElementInput.setAttribute("name", `${data.no} x `);
    bobotxSkorElementInput.setAttribute("min", "0");
    bobotxSkorElementInput.setAttribute("max", "4");
    bobotxSkorElementInput.setAttribute("value", "0");
    bobotxSkorElementInput.classList.add("input__content");
    bobotxSkorElement.appendChild(bobotxSkorElementInput);
    tr.appendChild(bobotxSkorElement);

    tBody.appendChild(tr);
    table.appendChild(tBody);
  });

  // total
  const totalTr = document.createElement("tr");
  const totalTd = document.createElement("td");
  const totalBobotxSkor = document.createElement("td");
  const totalBobotxSkorInput = document.createElement("input");

  totalTd.setAttribute("colspan", "7");
  totalTd.textContent = "Total";
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

  nilaiHurufTd.setAttribute("colspan", "7");
  nilaiHurufTd.textContent = "Nilai Huruf";
  nilaiHurufskor.setAttribute("id", "nilaiHuruf");
  nilaiHurufskor.classList.add("nilai-huruf");

  nilaiHurufTr.appendChild(nilaiHurufTd);
  nilaiHurufTr.appendChild(nilaiHurufskor);

  tBody.appendChild(nilaiHurufTr);
  form.appendChild(table);

  table.appendChild(thead);
  form.appendChild(table);
});
