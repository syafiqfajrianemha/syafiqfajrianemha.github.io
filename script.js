function kalkulator() {
  //variabel angka1 dan angka2 sebagai inputan
  var angka1 = parseInt(document.getElementById("angka1").value);
  var angka2 = parseInt(document.getElementById("angka2").value);

  // variabel operasi aritmatik
  var op = document.getElementById("op").value;

  //variabel hasil
  var hasil = document.getElementById("hasil");

  //variabel total
  var total;

  if (isNaN(angka1) || isNaN(angka2)) {
    alert("mohon isi form dengan angka!");
  } else {
    if (op == "+") {
      total = angka1 + angka2;
    } else if (op == "-") {
      total = angka1 - angka2;
    } else if (op == "*") {
      total = angka1 * angka2;
    } else {
      total = angka1 / angka2;
    }
  }

  hasil.innerHTML = "Hasil : " + total;
}

// Indikator
function cekIndikator() {
  const presentase = document.getElementById("presentase").value;
  const lamaStudi = document.getElementById("lamaStudi").value;
  const tugasAkhir = document.getElementById("tugasAkhir").value;
  const tugasTerstruktur = document.getElementById("tugasTerstruktur").value;
  const reviewSoal = document.getElementById("reviewSoal").value;

  const table = document.getElementById("dataTable");
  const baris = table.insertRow(1);

  if (presentase == "memenuhi") {
    const kol1 = baris.insertCell(0);
    kol1.innerHTML = `<span class="btn-memenuhi"><i class="fa-sharp fa-solid fa-circle-check"></i></span>`;
  } else {
    const kol1 = baris.insertCell(0);
    kol1.innerHTML = `<span class="btn-belumMemenuhi"><i class="fa-solid fa-circle-xmark"></i></span>`;
  }

  if (lamaStudi == "memenuhi") {
    const kol2 = baris.insertCell(1);
    kol2.innerHTML = `<span class="btn-memenuhi"><i class="fa-sharp fa-solid fa-circle-check"></i></span>`;
  } else {
    const kol2 = baris.insertCell(1);
    kol2.innerHTML = `<span class="btn-belumMemenuhi"><i class="fa-solid fa-circle-xmark"></i></span>`;
  }

  if (tugasAkhir == "memenuhi") {
    const kol3 = baris.insertCell(2);
    kol3.innerHTML = `<span class="btn-memenuhi"><i class="fa-sharp fa-solid fa-circle-check"></i></span>`;
  } else {
    const kol3 = baris.insertCell(2);
    kol3.innerHTML = `<span class="btn-belumMemenuhi"><i class="fa-solid fa-circle-xmark"></i></span>`;
  }

  if (tugasTerstruktur == "memenuhi") {
    const kol4 = baris.insertCell(3);
    kol4.innerHTML = `<span class="btn-memenuhi"><i class="fa-sharp fa-solid fa-circle-check"></i></span>`;
  } else {
    const kol4 = baris.insertCell(3);
    kol4.innerHTML = `<span class="btn-belumMemenuhi"><i class="fa-solid fa-circle-xmark"></i></span>`;
  }

  if (reviewSoal == "memenuhi") {
    const kol5 = baris.insertCell(4);
    kol5.innerHTML = `<span class="btn-memenuhi"><i class="fa-sharp fa-solid fa-circle-check"></i></span>`;
  } else {
    const kol5 = baris.insertCell(4);
    kol5.innerHTML = `<span class="btn-belumMemenuhi"><i class="fa-solid fa-circle-xmark"></i></span>`;
  }

  const dataIndikator = document.getElementsByName("dataIndikator")[0];
  dataIndikator.reset();
}
