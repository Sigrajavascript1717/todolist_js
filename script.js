const input = document.getElementById("inputTodo");
const AddButon = document.getElementById("addTodo");
const list = document.getElementById("todoList");

AddButon.addEventListener("click", function () {
    // Cek apakah input kosong
    if (input.value === "") {
        alert("Tidak boleh kosong, harus masukan todo");
        return;
    }

    // Membuat elemen <li> baru
    const li = document.createElement("li");
    li.textContent = input.value;
    
    // Mengosongkan input setelah menambahkan todo
    input.value = "";

    // Membuat tombol hapus
    const hapus = document.createElement("button");
    hapus.classList.add("btn", "btn-danger"); // Menambahkan kelas Bootstrap
    hapus.style.marginLeft = "20px";
    hapus.textContent = "Hapus";

    // Menambahkan tombol hapus ke dalam <li>
    li.appendChild(hapus);

    // Menambahkan <li> ke dalam <ul>
    list.appendChild(li);

    // Event listener untuk menghapus todo
    hapus.addEventListener("click", function () {
        li.remove(); // Menghapus elemen <li>
        alert(`List "${li.textContent.replace("Hapus", "")}" berhasil dihapus`);
    });
});
