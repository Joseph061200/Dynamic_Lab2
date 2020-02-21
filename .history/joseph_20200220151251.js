var answer = "C";
var qnum = 1;

function CheckAnswer(){
    var myInput = document.querySelector("#answer").value;
    console.log(myInput);
    if (myInput === answer){
        // alert("Correct!");
        answer = "C"||"c";
        document.querySelector("#h_r").innerHTML = "<h1>Correct!<h1/>";

        if (qnum === 1){
            qnum++;
            document.querySelector("h1").innerHTML = "Oranges originated in which country?";
            document.querySelector(".app").style.backgroundImage = url("oranges.jpg");
            answer = "China"||"china";
        }else if(qnum === 2){
            qnum++;
            document.querySelector("h1").innerHTML = "Lemons are what color?";
            document.querySelector(".app").style.backgroundImage = "url('oranges.jpg')";
            answer = "Yellow"||"yellow";
        }
        
    }else {
        // alert("wrong");
        document.querySelector("#h_r").innerHTML = "<h1>Incorrect!<h1/>"
    }
}