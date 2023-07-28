var row =null;

function Submitbtn(){
    var dataEntered= retriveData();
    var readData= readingDataFromlocalStorage(dataEntered);
    if(dataEntered == false){
        alert("Please Enter Data !")
    }
    else{
        if(row == null){
            insert(readData);
            alert("Data Submited!")    
        }else{
            update();
            alert("Data Updated!")
        }
    }
}
function fun(){
    document.getElementById("form").reset();
}
function retriveData(){
    var name1 = document.getElementById("name").value;
    var job = document.getElementById("job").value;
    var exp = document.getElementById("exp").value;

    var arr= [name1,job,exp];
    if(arr.includes("")){
        return false
    }else{
        return arr; 
    }
}
function readingDataFromlocalStorage(dataEntered){
    //Storing Data in Local Storage
    var n = localStorage.setItem("Name",dataEntered[0]);
    var j = localStorage.setItem("Job",dataEntered[1]);
    var e = localStorage.setItem("Experience",dataEntered[2]);

    //Getting Values from local to table
    var n1 = localStorage.getItem("Name",n);
    var j1 = localStorage.getItem("Job",j);
    var e1 = localStorage.getItem("Experience",e);

    var arr = [n1,j1,e1];
    return arr;
}
function insert(readData){
    var row = table.insertRow();
    row.insertCell(0).innerHTML =readData[0];
    row.insertCell(1).innerHTML =readData[1];
    row.insertCell(2).innerHTML =readData[2];
    row.insertCell(3).innerHTML =`<button onclick=edit(this)>Edit</button>
    <button onclick=remove(this)>Delete</button>`;

}

function edit(td){
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("job").value = row.cells[1].innerHTML;
    document.getElementById("exp").value = row.cells[2].innerHTML;
}
function update(){
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("job").value;
    row.cells[2].innerHTML = document.getElementById("exp").value;
    row = null;
}
function remove(td){
    var ans= confirm("Are You sure You Want To Delete This Record ?");
    if(ans==true){
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
    }
}