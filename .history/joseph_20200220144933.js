var answer = "C" ||"c";
function CheckAnswer(){
    var myInput = document.querySelector("#answer").value;
    console.log(myInput);
    if (myInput === "C"||"c"){
        // alert("Correct!");
        document.querySelector("#h_r").innerHTML = "<h1>Correct!<h1/>";

        document.querySelector("h1").innerHTML = "";
    }else {
        // alert("wrong");
        document.querySelector("#h_r").innerText = "<h1>Incorrect!<h1/>"
    }
}