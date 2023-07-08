const form1=document.getElementById("form1");
form1.addEventListener('submit',function(event1){
    event1.preventDefault();
    const table1=document.getElementById("table1");
    const row=document.createElement("tr");
    row.classList.add("row7");
    const fName=document.createElement("td");
    fName.classList.add("column8");
    fName.innerHTML=document.getElementById("add2").value;
    row.append(fName);
    const lName=document.createElement("td");
    lName.classList.add("column8");
    lName.innerHTML=document.getElementById("add3").value;
    row.append(lName);
    const Add=document.createElement("td");
    Add.classList.add("column8");
    Add.innerHTML=document.getElementById("add4").value;
    row.append(Add);
    const tele=document.createElement("td");
    tele.classList.add("column8");
    tele.innerHTML=document.getElementById("add5").value;
    row.append(tele);
    const Email=document.createElement("td");
    Email.classList.add("column8");
    Email.innerHTML=document.getElementById("add6").value;
    row.append(Email);
    const button2=document.createElement("button");
    const Remove=document.createElement("span");
    Remove.classList.add("material-symbols-outlined");
    Remove.classList.add("column8");
    Remove.innerHTML="delete";
    button2.append(Remove);
    row.append(button2);
    table1.append(row);
});
const table1 = document.getElementById("table1");
table1.addEventListener('click', function(event){
    if(event.target.classList.contains("column8")){
        event.target.parentNode.parentNode.remove();
    }
})
