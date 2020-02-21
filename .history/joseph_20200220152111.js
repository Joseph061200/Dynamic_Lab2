var answer = "C";
var qnum = 0;

var questions = [
    "Limes are a rich source of what vitamin?",
    "Oranges originated in which country?",
    "Lemons are what color?"
];

var answers = [
    "C",
    "China",
    "Yellow"
];

function CheckAnswer(){
    var myInput = document.querySelector("#answer").value;
    console.log(myInput);
    if (myInput === answers[qnum]){
        // alert("Correct!");
        document.querySelector("#h_r").innerHTML = "<h1>Correct!<h1/>";

        qnum++;
        document.querySelector(".h1").innerHTML = "Oranges originated in which country?

        // if (qnum === 1){
        //     qnum++;
        //     document.querySelector("h1").innerHTML = "Oranges originated in which country?";
        //     // document.querySelector(".app").style.backgroundImage = url("oranges.jpg");
        //     answer = "China"||"china";
        // }else if(qnum === 2){
        //     qnum++;
        //     document.querySelector("h1").innerHTML = "Lemons are what color?";
        //     // document.querySelector(".app").style.backgroundImage = "url('oranges.jpg')";
        //     answer = "Yellow"||"yellow";
        // }
        
    }else {
        // alert("wrong");
        document.querySelector("#h_r").innerHTML = "<h1>Incorrect!<h1/>"
    }
}