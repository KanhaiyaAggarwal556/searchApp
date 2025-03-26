const data = [
    { name: "Kanhaiya Agrawal", date: "1 Jan 2025" },
    { name: "testsle1", date: "10 Jan 2025" },
    { name: "testsle2", date: "13 Feb 2025" },
    { name: "testsle3", date: "12 Feb 2025" },
    { name: "SjFeb10", date: "20 feb 2025" },
    { name: "SjFeb10_t2", date: "23 feb 2025" },
    { name: "SjFeb10_t3", date: "30 feb 2025" },
    { name: "SjFeb10_t4", date: "2 Mar 2025" },
    { name: "UmbrellaBundle1", date: "3 Mar 2025" },
    { name: "UmbrellaBundle2", date: "10 Mar 2025" },
    { name: "UmbrellaBundle3", date: "11 Mar 2025" },
    { name: "UmbrellaBundle5", date: "14 feb 2025" },
    { name: "comprobundle", date: "20 Mar 2025" },
    { name: "comprobundle2", date: "19 Mar 2025" },
    { name: "comprobundle3", date: "29 Mar 2025" },
    { name: "comprobundles", date: "2 Apr 2025" },
    { name: "testbundle", date: "8 Jan 2025" },
    { name: "testbundle2", date: "9 feb 2025" },
    { name: "testbundles", date: "28 Mar 2025" },
    { name: "anshika_bhatia", date: "10 Jan 2025" }
];

const container = document.getElementById("container");

data.forEach(item => {
    const div = document.createElement("div");
    div.className = "comp";
    const div_name = document.createElement("div");
    div_name.id = "name";
    div_name.innerHTML = `<h4> ${item.name}`;
    const div_date = document.createElement("div");
    div_date.id = "date";
    div_date.innerHTML = `<h4> ${item.date}`;
    div.appendChild(div_name);
    div.appendChild(div_date);
    container.appendChild(div);
});
document.getElementById("searchbar").addEventListener("input", function() {
    if(this.value.length>0){
        console.log("hello");
        document.getElementById("cross").style.display = "block";
    }else{
        document.getElementById("cross").style.display = "none";
        const container = document.getElementById("container");
        container.innerHTML = "";
        data.forEach(item => {
            const div = document.createElement("div");
            div.className = "comp";
            const div_name = document.createElement("div");
            div_name.id = "name";
            div_name.innerHTML = `<h4> ${item.name} </h4>`;
            const div_date = document.createElement("div");
            div_date.id = "date";
            div_date.innerHTML = `<h4> ${item.date} </h4>`;
            div.appendChild(div_name);
            div.appendChild(div_date);
            container.appendChild(div);
        });
    }
});


document.getElementById("searchBar").addEventListener("keydown",function (){
    if (event.key === "Enter") { 
        const searchValue = document.getElementById("searchbar").value;
        // console.log(searchValue);
    
        const filterArr = data.filter(item => item.name.includes(searchValue));
        const container = document.getElementById("container");
        container.innerHTML = "";
        filterArr.forEach(item => {
            const div = document.createElement("div");
            div.className = "comp";
            const div_name = document.createElement("div");
            div_name.id = "name";
            div_name.innerHTML = `<h4> ${item.name}`;
            const div_date = document.createElement("div");
            div_date.id = "date";
            div_date.innerHTML = `<h4> ${item.date}`;
            div.appendChild(div_name);
            div.appendChild(div_date);
            container.appendChild(div);
        });
        console.log(filterArr);
}
})
function getSearchValue(){
    const searchValue = document.getElementById("searchbar").value;
    // console.log(searchValue);

    const filterArr = data.filter(item => item.name.includes(searchValue));
    const container = document.getElementById("container");
    container.innerHTML = "";
    filterArr.forEach(item => {
        const div = document.createElement("div");
        div.className = "comp";
        const div_name = document.createElement("div");
        div_name.id = "name";
        div_name.innerHTML = `<h4> ${item.name}`;
        const div_date = document.createElement("div");
        div_date.id = "date";
        div_date.innerHTML = `<h4> ${item.date}`;
        div.appendChild(div_name);
        div.appendChild(div_date);
        container.appendChild(div);
    });
    console.log(filterArr);
}

function Backup(){
    const container = document.getElementById("container");
    container.innerHTML = "";
    data.forEach(item => {
        const div = document.createElement("div");
        div.className = "comp";
        const div_name = document.createElement("div");
        div_name.id = "name";
        div_name.innerHTML = `<h4> ${item.name} </h4>`;
        const div_date = document.createElement("div");
        div_date.id = "date";
        div_date.innerHTML = `<h4> ${item.date} </h4>`;
        div.appendChild(div_name);
        div.appendChild(div_date);
        container.appendChild(div);
    });
    document.getElementById("searchbar").value = "";
    document.getElementById("cross").style.display = "none";
}