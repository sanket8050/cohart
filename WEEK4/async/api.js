
const URL = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
 
const getfacts = async () => {
    
    let response = await  fetch(URL);
    console.log(response);

    let data = await response.json();
    factPara.innerHTML = data.data[0].Nation
    console.log(data.data[0])
}

btn.addEventListener("click",getfacts);

        