function CheckAnswer(){
    var myInput = document.querySelector("#answer").value;
    console.log(myInput);
    if (myInput === "B"){
        alert("Correct!");
    }else {
        alert("wrong");
    }
}