function addStock() {

    const input =
    document.getElementById("stockInput");

    const stockName =
    input.value.trim();

    if(stockName === ""){
        return;
    }

    const li =
    document.createElement("li");

    li.textContent = stockName;

    document
    .getElementById("stockList")
    .appendChild(li);

    input.value = "";
}
