

const input1 = document.getElementById("table-r");
const input2 = document.getElementById("table-d");

const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const thead = document.querySelector("thead");


const form= document.getElementById("data");

data.addEventListener("submit", (event)=>{
    event.preventDefault();

    const rows= input1.value;
    const columns= input2.value;

    const theaderRow= document.createElement("tr");
    thead.appendChild(theaderRow);

    for (let z = 1; z <= columns; z++) {
        const th = document.createElement("th");
        th.innerText = `Column ${z}`;
        theaderRow.appendChild(th);
    }


    for (let i=1; i<=rows; i++){
        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        for(let x=1; x<=columns; x++){
            const td = document.createElement("td");
            td.innerText= `${i},${x}`;
            tr.appendChild(td);
        }
    }
});

