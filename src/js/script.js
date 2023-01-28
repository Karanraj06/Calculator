let ac = document.getElementById("ac");
let zero = document.getElementById("zero");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let equals = document.getElementById("equals");
let percentage = document.getElementById("percentage");
let plusMinus = document.getElementById("plus-minus");
let display = document.getElementById("display")

let s = "";

ac.addEventListener("click", () => {
    display.innerHTML = '0';
    s = "";
});

Array.from(document.querySelectorAll(".btn-dark")).forEach((element) => {
    element.addEventListener("click", (event) => {
        s += event.target.innerHTML;
        display.innerHTML = s;
    });
});

zero.addEventListener("click", () => {
    if (s != "") {
        s += '0';
        display.innerHTML = s;
    }
});

plus.addEventListener("click", () => {
    s += '+';
    display.innerHTML = s;
});

minus.addEventListener("click", () => {
    s += '-';
    display.innerHTML = s;
});

multiply.addEventListener("click", () => {
    s += '*';
    display.innerHTML = s;
});

divide.addEventListener("click", () => {
    s += '/';
    display.innerHTML = s;
});

equals.addEventListener("click", () => {
    try {
        s = display.innerHTML = eval(s);
    } catch (error) {
        display.innerHTML = "Error";
        s = "";
    }
});