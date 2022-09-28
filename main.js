function changeToRed() {
    let lineItem = document.getElementById('my-line');
    lineItem.classList.add('red');
}

document.getElementById("color-change-btn").addEventListener('click',changeToRed);