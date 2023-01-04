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
  let res = 0;
  const bobotxskor = document.querySelectorAll("#bobotxskor");

  value > 50
    ? Swal.fire({
        title: "Error!",
        text: "Nilai maksimal 50",
        icon: "error",
        confirmButtonText: "Ok",
      })
    : bobotxskor.forEach((result) => {
        if (result.name === name) {
          result.value = hasilSkor;
        }
        res += parseInt(result.value);
      });

  const totalBobotSkor = document.getElementById("totalBobotxSkor");
  totalBobotSkor.value = res;
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

const getRataRata = (e) => {
  const { value, name } = e.target;
  const skorPenguji = document.querySelectorAll("#skorPenguji");
  const skorRataRata = document.querySelectorAll("#rataRata");

  let hasilSkorPenguji = 0;
  let hasilSkorRataRata = 0;

  skorPenguji.forEach((skor) => {
    if (skor.name === name) {
      skor.value = value;
    }
    hasilSkorPenguji += parseInt(skor.value);
  });

  skorRataRata.forEach((rata) => {
    if (rata.name === name) {
      rata.value = hasilSkorPenguji / 3;
    }
    // hasilSkorRataRata += parseInt(rata.value);
    rata.value = hasilSkorRataRata = hasilSkorPenguji / 3;
  });
  console.log(hasilSkorRataRata);
};

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
      skorPengujiElementInput.setAttribute("name", data.no + sp);
      skorPengujiElementInput.setAttribute("min", "0");
      skorPengujiElementInput.setAttribute("max", "4");
      skorPengujiElementInput.setAttribute("value", "0");
      skorPengujiElementInput.classList.add("input__content");
      skorPengujiElementInput.addEventListener("input", getRataRata);
      skorPengujiElement.appendChild(skorPengujiElementInput);
      tr.appendChild(skorPengujiElement);
    });

    // rata-rata
    const rataRataElement = document.createElement("td");
    const rataRataElementInput = document.createElement("input");
    rataRataElementInput.setAttribute("type", "number");
    rataRataElementInput.setAttribute("disabled", "disabled");
    rataRataElementInput.setAttribute("autocomplete", "off");
    rataRataElementInput.setAttribute("id", "rataRata");
    // get different name for each input
    rataRataElementInput.setAttribute("name", data.no);
    rataRataElementInput.setAttribute("min", "0");
    rataRataElementInput.setAttribute("max", "4");
    rataRataElementInput.setAttribute("value", "0");
    rataRataElementInput.classList.add("input__content");
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
    bobotxSkorElementInput.setAttribute("name", data.no);
    bobotxSkorElementInput.setAttribute("min", "0");
    bobotxSkorElementInput.setAttribute("max", "4");
    bobotxSkorElementInput.setAttribute("value", "0");
    bobotxSkorElementInput.classList.add("input__content");
    bobotxSkorElement.appendChild(bobotxSkorElementInput);
    tr.appendChild(bobotxSkorElement);

    // // add event listener to input
    // skorPengujiElementInput.addEventListener("input", (e) => {
    //   const value = e.target.value;
    //   const rataRata = (parseInt(value) + parseInt(value)) / 2;
    //   rataRataElementInput.value = rataRata;
    //   bobotxSkorElementInput.value = rataRata * data.bobot;
    // });

    // rataRataElementInput.addEventListener("input", (e) => {
    //   const value = e.target.value;
    //   // bobotxSkorElementInput.value = value * data.bobot;
    //   rataRataElementInput.value = value;
    // });

    // bobotxSkorElementInput.addEventListener("input", (e) => {
    //   const value = e.target.value;
    //   rataRataElementInput.value = value / data.bobot;
    // });

    tBody.appendChild(tr);
    table.appendChild(tBody);
  });

  table.appendChild(thead);
  form.appendChild(table);
});
