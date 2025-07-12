const baseURL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromVal = document.querySelector(".from select");
const toVal = document.querySelector(".to select");
const message = document.querySelector(".msg");
// for (code in countryList) {
//     console.log(code , countryList[code]);
// }

for (let select of dropdowns){
    for(currCode in countryList){
      let newOption = document.createElement("option");
      newOption.innerText= currCode;
      newOption.value = currCode;
      if(select.name === "from" && currCode ==="USD"){
        newOption.selected = "selected";
      }else if(select.name === "to" && currCode ==="INR"){
        newOption.selected = "selected";
      }
      select.append(newOption);
    }

    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag = (element)=>{
    let currCode = element.value
    console.log(currCode);
    let countryCode = countryList[currCode];
    console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

}

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal ==="" || amtVal < 1){
        amtVal= 1;
        amount.value = "1";
    }
    console.log(amtVal);
    const URL = `${baseURL}/${fromVal.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    let rate = data[fromVal.value.toLowerCase()][toVal.value.toLowerCase()];
    console.log(rate);
    console.log(amtVal);
    let finalAmt = amtVal * rate;
    message.innerHTML = `${amtVal}${fromVal.value} = ${finalAmt}${toVal.value}`
})

