// when we use css variable we can then update that variable on any element in any selectors that are inside of that element that reference that variable be using it.

const inputs = document.querySelectorAll('.controls input') // mengontrol semua input yg ada di halamsn html. querySelector akan mereturn nodelist (bukan array). Kita melakukan iterasi menggunakan forEach method, tidak perlu mengkonversi ke array.

function handleUpdate() {
    const suffix = this.dataset.sizing || '' // this dataset contains "px". In JavaScript, the this keyword refers to an object.
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))