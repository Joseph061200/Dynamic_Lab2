var answer = "C";


var data = {
    qnum:0,
    questions:[
        {
            title:"Limes are a rich source of what vitamin?",
            answer:"C"
        },
        {
            title:"Oranges originated in which country?",
            answer:"China"
        },
        {
            title:"Limes are a rich source of what vitamin?",
            answer:"Yellow"
        },
        {
            title:"Limes are a rich source of what vitamin?",
            answer:"No"
        },
    ]

}

var qnum = 0;

var questions = [
    "Limes are a rich source of what vitamin?",
    "Oranges originated in which country?",
    "Lemons are what color?",
    "Are lemons sweet?"
];

var answers = [
    "C"||"c",
    "China",
    "Yellow",
    "No"
];

var bgImage = [
    "limes.jpg",
    "oranges.jpg",
];

function CheckAnswer(){
    var myInput = document.querySelector("#answer").value;
    console.log(myInput);
    if (myInput === answers[qnum]){
        // alert("Correct!");
        document.querySelector("#h_r").innerHTML = "<h1>Correct!<h1/>";

        qnum++;
        document.querySelector(".h1").innerHTML = questions[qnum];
        

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