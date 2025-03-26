const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalid;
const actiononstart = function () {
    if (!intervalid) {
        intervalid = setInterval(changeBgcolor, 2000);
    }
};
function changeBgcolor() {
    document.body.style.backgroundColor = randomColor();
}
const actiononstop = function () {
    clearInterval(intervalid);
    intervalid = null;
};
document.querySelector('#start').addEventListener('click', actiononstart);
document.querySelector('#stop').addEventListener('click', actiononstop);
document.querySelector('#stop').addEventListener('click', actiononstop);
