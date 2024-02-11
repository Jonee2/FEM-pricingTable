//TODO button toggle and change text
// 19,99, 24,99, 39,99 

let toggle = document.querySelector('.toggle')
let price = document.querySelectorAll('.liprice')

toggle?.addEventListener('click', function () {
    if (toggle.checked == true) {
    price[0].textContent = "$19.99";
    price[1].textContent = "$24.99"
    price[2].textContent = "$39.99"
    } else {
    price[0].textContent = "$199.99";
    price[1].textContent = "$249.99"
    price[2].textContent = "$399.99"
    }
})




