function hasilnilai1() {
    // Ambil nilai dari input
    const nilai1 = parseFloat(document.getElementById('nilai1').value);
    const nilai2 = parseFloat(document.getElementById('nilai2').value);

    // Cek jika input valid
    if (!isNaN(nilai1) && !isNaN(nilai2)) {
        // Hitung hasil penjumlahan
        const hasil = nilai1 + nilai2;
        // Tampilkan hasil
        document.getElementById('hasil').value = hasil;
    } else {
        alert("Harap masukkan angka yang valid.");
    }
}

function hasilnilai2() {
    // Ambil nilai dari input
    const nilai1 = parseFloat(document.getElementById('nilai1').value);
    const nilai2 = parseFloat(document.getElementById('nilai2').value);

    // Cek jika input valid
    if (!isNaN(nilai1) && !isNaN(nilai2)) {
        // Hitung hasil pengurangan
        const hasil = nilai1 - nilai2;
        // Tampilkan hasil
        document.getElementById('hasil').value = hasil;
    } else {
        alert("Harap masukkan angka yang valid.");
    }
}

function hasilnilai3() {
    // Ambil nilai dari input
    const nilai1 = parseFloat(document.getElementById('nilai1').value);
    const nilai2 = parseFloat(document.getElementById('nilai2').value);

    // Cek jika input valid
    if (!isNaN(nilai1) && !isNaN(nilai2)) {
        // Hitung hasil perkalian
        const hasil = nilai1 * nilai2;
        // Tampilkan hasil
        document.getElementById('hasil').value = hasil;
    } else {
        alert("Harap masukkan angka yang valid.");
    }
}

function hasilnilai4() {
    // Ambil nilai dari input
    const nilai1 = parseFloat(document.getElementById('nilai1').value);
    const nilai2 = parseFloat(document.getElementById('nilai2').value);

    // Cek jika input valid
    if (!isNaN(nilai1) && !isNaN(nilai2)) {
        // Cek jika nilai2 adalah 0 untuk menghindari pembagian dengan nol
        if (nilai2 === 0) {
            alert("Pembagian dengan nol tidak diizinkan.");
            document.getElementById('hasil').value = '';
        } else {
            // Hitung hasil pembagian
            const hasil = nilai1 / nilai2;
            // Tampilkan hasil
            document.getElementById('hasil').value = hasil;
        }
    } else {
        alert("Harap masukkan angka yang valid.");
    }
}
