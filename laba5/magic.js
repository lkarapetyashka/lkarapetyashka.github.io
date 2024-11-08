window.addEventListener("DOMContentLoaded", function () {
    const goodsPriceList =
    {"pr1": 10, "pr2": 100, "pr3": 0.5, "pr4": 11, "pr5": 21};

    let amount = document.getElementById("amount");
    let product = document.getElementById("goodsList");
    let calcButton = document.getElementById("calculate");
    let resultfield = document.getElementById("result");
    calcButton.addEventListener("click", function () {
        let inp = amount.value;
        if (inp.match(/^\d+$/) !== null) {
            let res = goodsPriceList[product.value] * inp;
            resultfield.innerText = res;
        } else {
            resultfield.innerText = "error";
        }
    });
});
