var answer = "C"||"c";
function CheckAnswer(){
    var myInput = document.querySelector("#answer").value;
    console.log(myInput);
    if (myInput === answer){
        // alert("Correct!");
        document.querySelector("#h_r").innerHTML = "<h1>Correct!<h1/>";

        document.querySelector("h1").innerHTML = "Oranges originated in which country?";
        document.querySelector(".app").backgroundImage = url("oranges.jpg");
        answer = "China"||"china";
    }else {
        // alert("wrong");
        document.querySelector("#h_r").innerHTML = "<h1>Incorrect!<h1/>"
    }
}