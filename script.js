function transaksiNilaiPertama() {
  const skorPoinSatu = document.getElementById("skorPoinSatu").value;
  const skorPoinDua = document.getElementById("skorPoinDua").value;

  const txtDisplaySkorSatu = document.getElementById("txtDisplaySkorSatu");
  const txtDisplaySkorDua = document.getElementById("txtDisplaySkorDua");

  const totalNilaiPertama = document.getElementById("totalNilaiPertama");

  const hasilSkorSatu = (skorPoinSatu / 50) * 50;
  txtDisplaySkorSatu.value = hasilSkorSatu;

  const hasilSkorDua = (skorPoinDua / 50) * 50;
  txtDisplaySkorDua.value = hasilSkorDua;

  const hasilTotalNilaiPertama = hasilSkorSatu + hasilSkorDua;
  totalNilaiPertama.value = hasilTotalNilaiPertama;

  const formPertama = document.getElementsByName(
    "formTransaksiNilaiPertama"
  )[0];
  if (skorPoinSatu > 50) {
    alert("Skor melebihi bobot!. Silahkan masukkan skor 1-50");
    formPertama.reset();
  }

  if (isNaN(skorPoinSatu)) {
    alert("Mohon isi skor dengan angka!");
    formPertama.reset();
  }
}

function transaksiNilaiKedua() {
  // Skor A
  const skorAsatu = parseInt(document.getElementById("skorAsatu").value);
  const skorAdua = parseInt(document.getElementById("skorAdua").value);
  const skorAtiga = parseInt(document.getElementById("skorAtiga").value);

  totalA = skorAsatu + skorAdua + skorAtiga;
  const ratarataA = (document.getElementById("ratarataA").value = totalA / 3);

  hasilSkorA = (ratarataA / 15) * 15;
  totalNilaiA = document.getElementById("txtDisplaySkorA").value = hasilSkorA;

  //   Skor B
  const skorBsatu = parseInt(document.getElementById("skorBsatu").value);
  const skorBdua = parseInt(document.getElementById("skorBdua").value);
  const skorBtiga = parseInt(document.getElementById("skorBtiga").value);

  totalB = skorBsatu + skorBdua + skorBtiga;
  const ratarataB = (document.getElementById("ratarataB").value = totalB / 3);

  hasilSkorB = (ratarataB / 20) * 20;
  totalNilaiB = document.getElementById("txtDisplaySkorB").value = hasilSkorB;

  //   Skor C
  const skorCsatu = parseInt(document.getElementById("skorCsatu").value);
  const skorCdua = parseInt(document.getElementById("skorCdua").value);
  const skorCtiga = parseInt(document.getElementById("skorCtiga").value);

  totalC = skorCsatu + skorCdua + skorCtiga;
  const ratarataC = (document.getElementById("ratarataC").value = totalC / 3);

  hasilSkorC = (ratarataC / 20) * 20;
  totalNilaiC = document.getElementById("txtDisplaySkorC").value = hasilSkorC;

  //   Skor D
  const skorDsatu = parseInt(document.getElementById("skorDsatu").value);
  const skorDdua = parseInt(document.getElementById("skorDdua").value);
  const skorDtiga = parseInt(document.getElementById("skorDtiga").value);

  totalD = skorDsatu + skorDdua + skorDtiga;
  const ratarataD = (document.getElementById("ratarataD").value = totalD / 3);

  hasilSkorD = (ratarataD / 20) * 20;
  totalNilaiD = document.getElementById("txtDisplaySkorD").value = hasilSkorD;

  //   Skor E
  const skorEsatu = parseInt(document.getElementById("skorEsatu").value);
  const skorEdua = parseInt(document.getElementById("skorEdua").value);
  const skorEtiga = parseInt(document.getElementById("skorEtiga").value);

  totalE = skorEsatu + skorEdua + skorEtiga;
  const ratarataE = (document.getElementById("ratarataE").value = totalE / 3);

  hasilSkorE = (ratarataE / 15) * 15;
  totalNilaiE = document.getElementById("txtDisplaySkorE").value = hasilSkorE;

  //   Skor F
  const skorFsatu = parseInt(document.getElementById("skorFsatu").value);
  const skorFdua = parseInt(document.getElementById("skorFdua").value);
  const skorFtiga = parseInt(document.getElementById("skorFtiga").value);

  totalF = skorFsatu + skorFdua + skorFtiga;
  const ratarataF = (document.getElementById("ratarataF").value = totalF / 3);

  hasilSkorF = (ratarataF / 10) * 10;
  totalNilaiF = document.getElementById("txtDisplaySkorF").value = hasilSkorF;

  const hasilTotalNilaiKedua = (document.getElementById(
    "totalNilaiKedua"
  ).value =
    totalNilaiA +
    totalNilaiB +
    totalNilaiC +
    totalNilaiD +
    totalNilaiE +
    totalNilaiF);

  nilaiAkhirPertama = (hasilTotalNilaiPertama * 40) / 100;
  nilaiAkhirKedua = (hasilTotalNilaiKedua * 60) / 100;
  const nilaiAkhir = (document.getElementById("nilaiAkhir").value =
    nilaiAkhirPertama + nilaiAkhirKedua);

  const nilaiHuruf = document.getElementById("nilaiHuruf");
  if (nilaiAkhir >= 86 && nilaiAkhir <= 100) {
    nilaiHuruf.innerHTML = "A";
  } else if (nilaiAkhir >= 81 && nilaiAkhir < 86) {
    nilaiHuruf.innerHTML = "A-";
  } else if (nilaiAkhir >= 76 && nilaiAkhir < 81) {
    nilaiHuruf.innerHTML = "B+";
  } else if (nilaiAkhir >= 71 && nilaiAkhir < 76) {
    nilaiHuruf.innerHTML = "B";
  } else if (nilaiAkhir >= 66 && nilaiAkhir < 71) {
    nilaiHuruf.innerHTML = "B-";
  } else if (nilaiAkhir >= 61 && nilaiAkhir < 66) {
    nilaiHuruf.innerHTML = "C+";
  } else if (nilaiAkhir >= 56 && nilaiAkhir < 61) {
    nilaiHuruf.innerHTML = "C";
  } else if (nilaiAkhir >= 41 && nilaiAkhir < 56) {
    nilaiHuruf.innerHTML = "D";
  } else {
    nilaiHuruf.innerHTML = "E";
  }
}

function simulasiAudit() {
  const nilaiIndikator1 = parseInt(
    document.getElementById("nilaiIndikator1").value
  );
  const skorIndikator1 = document.getElementById("skorIndikator1");
  const hasilIndikator1 = 0;

  if (nilaiIndikator1 >= 80) {
    hasilIndikator1 = 4;
  } else if (nilaiIndikator1 >= 60 && nilaiIndikator1 < 80) {
    hasilIndikator1 = 3;
  } else if (nilaiIndikator1 >= 40 && nilaiIndikator1 < 60) {
    hasilIndikator1 = 2;
  } else if (nilaiIndikator1 >= 10 && nilaiIndikator1 < 40) {
    hasilIndikator1 = 1;
  } else if (nilaiIndikator1 < 10) {
    hasilIndikator1 = 0;
  }
  skorIndikator1.innerHTML = hasilIndikator1;

  const nilaiIndikator2 = parseInt(
    document.getElementById("nilaiIndikator2").value
  );
  const skorIndikator2 = document.getElementById("skorIndikator2");
  const hasilIndikator2 = 0;

  if (nilaiIndikator2 >= 80) {
    hasilIndikator2 = 4;
  } else if (nilaiIndikator2 >= 60 && nilaiIndikator2 < 80) {
    hasilIndikator2 = 3;
  } else if (nilaiIndikator2 >= 40 && nilaiIndikator2 < 60) {
    hasilIndikator2 = 2;
  } else if (nilaiIndikator2 >= 10 && nilaiIndikator2 < 40) {
    hasilIndikator2 = 1;
  } else if (nilaiIndikator2 < 10) {
    hasilIndikator2 = 0;
  }
  skorIndikator2.innerHTML = hasilIndikator2;

  const nilaiIndikator3 = parseInt(
    document.getElementById("nilaiIndikator3").value
  );
  const skorIndikator3 = document.getElementById("skorIndikator3");
  const hasilIndikator3 = 0;

  if (nilaiIndikator3 >= 80) {
    hasilIndikator3 = 4;
  } else if (nilaiIndikator3 >= 60 && nilaiIndikator3 < 80) {
    hasilIndikator3 = 3;
  } else if (nilaiIndikator3 >= 40 && nilaiIndikator3 < 60) {
    hasilIndikator3 = 2;
  } else if (nilaiIndikator3 >= 10 && nilaiIndikator3 < 40) {
    hasilIndikator3 = 1;
  } else if (nilaiIndikator3 < 10) {
    hasilIndikator3 = 0;
  }
  skorIndikator3.innerHTML = hasilIndikator3;

  const nilaiIndikator4 = parseInt(
    document.getElementById("nilaiIndikator4").value
  );
  const skorIndikator4 = document.getElementById("skorIndikator4");
  const hasilIndikator4 = 0;

  if (nilaiIndikator4 >= 80) {
    hasilIndikator4 = 4;
  } else if (nilaiIndikator4 >= 60 && nilaiIndikator4 < 80) {
    hasilIndikator4 = 3;
  } else if (nilaiIndikator4 >= 40 && nilaiIndikator4 < 60) {
    hasilIndikator4 = 2;
  } else if (nilaiIndikator4 >= 10 && nilaiIndikator4 < 40) {
    hasilIndikator4 = 1;
  } else if (nilaiIndikator4 < 10) {
    hasilIndikator4 = 0;
  }
  skorIndikator4.innerHTML = hasilIndikator4;

  const ratarataNilai = document.getElementById("ratarataNilai");
  const ratarataSkor = document.getElementById("ratarataSkor");

  ratarataNilai.innerHTML =
    (nilaiIndikator1 + nilaiIndikator2 + nilaiIndikator3 + nilaiIndikator4) / 4;
  ratarataSkor.innerHTML =
    (hasilIndikator1 + hasilIndikator2 + hasilIndikator3 + hasilIndikator4) / 4;
}

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
    // total: 100,
  },
];

// const form = document.createElement("form");
const form = document.querySelector(".form__pertama");
form.classList.add("form__pertama");

nilaiPertama.forEach((section) => {
  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const subTitleContent = document.createElement("tr");

  section.subTitle.forEach((title) => {
    const subTitleElement = document.createElement("th");
    subTitleElement.innerHTML = title;
    subTitleContent.appendChild(subTitleElement);
    thead.appendChild(subTitleContent);
    table.appendChild(thead);
    // form.appendChild(table);
  });

  const tBody = document.createElement("tbody");
  section.data.forEach((data) => {
    const tr = document.createElement("tr");

    const noElement = document.createElement("td");
    noElement.textContent = data.no;
    tr.appendChild(noElement);

    const komponenPenilaianElement = document.createElement("td");
    komponenPenilaianElement.textContent = data.komponenPenilaian;
    tr.appendChild(komponenPenilaianElement);

    const skorElement = document.createElement("td");
    const skorElementInput = document.createElement("input");
    skorElementInput.setAttribute("type", "number");
    skorElementInput.setAttribute("autocomplete", "off");
    skorElementInput.setAttribute("id", "skor");
    skorElementInput.setAttribute("name", "skor");
    skorElementInput.setAttribute("min", "0");
    skorElementInput.setAttribute("max", "50");
    skorElementInput.setAttribute("value", "0");
    // skorElementInput.setAttribute("onchange", "hitungNilai()");
    skorElement.appendChild(skorElementInput);
    tr.appendChild(skorElement);

    const bobotElement = document.createElement("td");
    bobotElement.textContent = data.bobot;
    tr.appendChild(bobotElement);

    const bobotxskorElement = document.createElement("td");
    const bobotxskorElementInput = document.createElement("input");
    bobotxskorElementInput.setAttribute("type", "number");
    // disable input
    bobotxskorElementInput.setAttribute("disabled", "disabled");
    bobotxskorElementInput.setAttribute("autocomplete", "off");
    bobotxskorElementInput.setAttribute("id", "bobotxskor");
    bobotxskorElementInput.setAttribute("name", "bobotxskor");
    bobotxskorElementInput.setAttribute("min", "0");
    bobotxskorElementInput.setAttribute("max", "4");
    bobotxskorElementInput.setAttribute("value", "0");
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
  const total = section.data.reduce((acc, cur) => acc + cur.bobot, 0);
  totalBobot.textContent = total;
  totalBobotxSkorInput.setAttribute("type", "number");
  totalBobotxSkorInput.setAttribute("disabled", "disabled");
  totalBobotxSkorInput.setAttribute("autocomplete", "off");
  totalBobotxSkorInput.setAttribute("id", "totalBobotxSkor");
  totalBobotxSkorInput.setAttribute("name", "totalBobotxSkor");
  totalBobotxSkorInput.setAttribute("min", "0");
  totalBobotxSkorInput.setAttribute("max", "4");
  totalBobotxSkorInput.setAttribute("value", "0");
  totalBobotxSkor.appendChild(totalBobotxSkorInput);

  totalTr.appendChild(totalTd);
  totalTr.appendChild(totalBobot);
  totalTr.appendChild(totalBobotxSkor);
  tBody.appendChild(totalTr);
  form.appendChild(table);
});
