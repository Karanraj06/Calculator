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
let span = document.getElementsByTagName("span")[0];
let s = "";
let t = "";
let operator = "";

ac.addEventListener("click", () => {
    display.innerHTML = '0';
    span.classList.add("hidden")
    s = "";
    t = "";
    operator = "";
});

Array.from(document.querySelectorAll(".btn-dark")).forEach((element) => {
    element.addEventListener("click", (event) => {
        if (event.target.innerHTML == '.') {
            if (t == "") {
                t = "0.";
            }
            else if (!t.includes('.')) {
                t += '.';
            }
        } else {
            t += event.target.innerHTML;
        }
        display.innerHTML = t;
    });
});

zero.addEventListener("click", () => {
    if (t != "") {
        t += '0';
        display.innerHTML = t;
    }
});

plus.addEventListener("click", () => {
    operator = '+';
    s += t;
    t = "";
});

minus.addEventListener("click", () => {
    operator = '-';
    s += t;
    t = "";
});

multiply.addEventListener("click", () => {
    operator = '*';
    s += t;
    t = "";
});

divide.addEventListener("click", () => {
    operator = '/';
    s += t;
    t = "";
});

percentage.addEventListener("click", () => {
    operator = '%';
    s += t;
    t = "";
});

plusMinus.addEventListener("click", () => {
    if (display.innerHTML != '0') {
        span.classList.toggle("hidden");
    }

    if (operator == '') {
        operator = '-';
    }
    else if (operator == '+') {
        operator = '-';
    }
    else if (operator == '-') {
        operator = '+';
    }
    else {
        if (operator.length == 1) {
            operator += '-';
        } else {
            operator = operator[0];
        }
    }
});

equals.addEventListener("click", () => {
    s += operator + t;
    s = display.innerHTML = eval(s);
    t = "";
    operator = "";
    span.classList.add("hidden")
})