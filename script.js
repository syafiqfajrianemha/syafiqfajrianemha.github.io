function transaksiNilaiPertama() {
  var skorPoinSatu = document.getElementById("skorPoinSatu").value;
  var skorPoinDua = document.getElementById("skorPoinDua").value;

  var txtDisplaySkorSatu = document.getElementById("txtDisplaySkorSatu");
  var txtDisplaySkorDua = document.getElementById("txtDisplaySkorDua");

  var totalNilaiPertama = document.getElementById("totalNilaiPertama");

  hasilSkorSatu = (skorPoinSatu / 50) * 50;
  txtDisplaySkorSatu.value = hasilSkorSatu;

  hasilSkorDua = (skorPoinDua / 50) * 50;
  txtDisplaySkorDua.value = hasilSkorDua;

  hasilTotalNilaiPertama = hasilSkorSatu + hasilSkorDua;
  totalNilaiPertama.value = hasilTotalNilaiPertama;

  var formPertama = document.getElementsByName("formTransaksiNilaiPertama")[0];
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
  var skorAsatu = parseInt(document.getElementById("skorAsatu").value);
  var skorAdua = parseInt(document.getElementById("skorAdua").value);
  var skorAtiga = parseInt(document.getElementById("skorAtiga").value);

  totalA = skorAsatu + skorAdua + skorAtiga;
  var ratarataA = (document.getElementById("ratarataA").value = totalA / 3);

  hasilSkorA = (ratarataA / 15) * 15;
  totalNilaiA = document.getElementById("txtDisplaySkorA").value = hasilSkorA;

  //   Skor B
  var skorBsatu = parseInt(document.getElementById("skorBsatu").value);
  var skorBdua = parseInt(document.getElementById("skorBdua").value);
  var skorBtiga = parseInt(document.getElementById("skorBtiga").value);

  totalB = skorBsatu + skorBdua + skorBtiga;
  var ratarataB = (document.getElementById("ratarataB").value = totalB / 3);

  hasilSkorB = (ratarataB / 20) * 20;
  totalNilaiB = document.getElementById("txtDisplaySkorB").value = hasilSkorB;

  //   Skor C
  var skorCsatu = parseInt(document.getElementById("skorCsatu").value);
  var skorCdua = parseInt(document.getElementById("skorCdua").value);
  var skorCtiga = parseInt(document.getElementById("skorCtiga").value);

  totalC = skorCsatu + skorCdua + skorCtiga;
  var ratarataC = (document.getElementById("ratarataC").value = totalC / 3);

  hasilSkorC = (ratarataC / 20) * 20;
  totalNilaiC = document.getElementById("txtDisplaySkorC").value = hasilSkorC;

  //   Skor D
  var skorDsatu = parseInt(document.getElementById("skorDsatu").value);
  var skorDdua = parseInt(document.getElementById("skorDdua").value);
  var skorDtiga = parseInt(document.getElementById("skorDtiga").value);

  totalD = skorDsatu + skorDdua + skorDtiga;
  var ratarataD = (document.getElementById("ratarataD").value = totalD / 3);

  hasilSkorD = (ratarataD / 20) * 20;
  totalNilaiD = document.getElementById("txtDisplaySkorD").value = hasilSkorD;

  //   Skor E
  var skorEsatu = parseInt(document.getElementById("skorEsatu").value);
  var skorEdua = parseInt(document.getElementById("skorEdua").value);
  var skorEtiga = parseInt(document.getElementById("skorEtiga").value);

  totalE = skorEsatu + skorEdua + skorEtiga;
  var ratarataE = (document.getElementById("ratarataE").value = totalE / 3);

  hasilSkorE = (ratarataE / 15) * 15;
  totalNilaiE = document.getElementById("txtDisplaySkorE").value = hasilSkorE;

  //   Skor F
  var skorFsatu = parseInt(document.getElementById("skorFsatu").value);
  var skorFdua = parseInt(document.getElementById("skorFdua").value);
  var skorFtiga = parseInt(document.getElementById("skorFtiga").value);

  totalF = skorFsatu + skorFdua + skorFtiga;
  var ratarataF = (document.getElementById("ratarataF").value = totalF / 3);

  hasilSkorF = (ratarataF / 10) * 10;
  totalNilaiF = document.getElementById("txtDisplaySkorF").value = hasilSkorF;

  var hasilTotalNilaiKedua = (document.getElementById("totalNilaiKedua").value =
    totalNilaiA +
    totalNilaiB +
    totalNilaiC +
    totalNilaiD +
    totalNilaiE +
    totalNilaiF);

  nilaiAkhirPertama = (hasilTotalNilaiPertama * 40) / 100;
  nilaiAkhirKedua = (hasilTotalNilaiKedua * 60) / 100;
  var nilaiAkhir = document.getElementById("nilaiAkhir").value = nilaiAkhirPertama + nilaiAkhirKedua;

  var nilaiHuruf = document.getElementById("nilaiHuruf");
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
  var nilaiIndikator1 = parseInt(
    document.getElementById("nilaiIndikator1").value
  );
  var skorIndikator1 = document.getElementById("skorIndikator1");
  var hasilIndikator1 = 0;

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

  var nilaiIndikator2 = parseInt(
    document.getElementById("nilaiIndikator2").value
  );
  var skorIndikator2 = document.getElementById("skorIndikator2");
  var hasilIndikator2 = 0;

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

  var nilaiIndikator3 = parseInt(
    document.getElementById("nilaiIndikator3").value
  );
  var skorIndikator3 = document.getElementById("skorIndikator3");
  var hasilIndikator3 = 0;

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

  var nilaiIndikator4 = parseInt(
    document.getElementById("nilaiIndikator4").value
  );
  var skorIndikator4 = document.getElementById("skorIndikator4");
  var hasilIndikator4 = 0;

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

  var ratarataNilai = document.getElementById("ratarataNilai");
  var ratarataSkor = document.getElementById("ratarataSkor");

  ratarataNilai.innerHTML =
    (nilaiIndikator1 + nilaiIndikator2 + nilaiIndikator3 + nilaiIndikator4) / 4;
  ratarataSkor.innerHTML =
    (hasilIndikator1 + hasilIndikator2 + hasilIndikator3 + hasilIndikator4) / 4;
}
