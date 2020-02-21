var answer = "C";


var data = {
    qnum:0,
    questions:[
        {
            title:"Limes are a rich source of what vitamin?",
            answer:"C",
            img:"limes.jpg"
        },
        {
            title:"Oranges originated in which country?",
            answer:"China",
            img:"oranges.jpg"

        },
        {
            title:"Limes are a rich source of what vitamin?",
            answer:"Yellow",
            img:"lemons.jpg"
        },
        {
            title:"Limes are a rich source of what vitamin?",
            answer:"No"
        }
    ]

}

var qnum = 0;

// var questions = [
//     "Limes are a rich source of what vitamin?",
//     "Oranges originated in which country?",
//     "Lemons are what color?",
//     "Are lemons sweet?"
// ];

// var answers = [
//     "C"||"c",
//     "China",
//     "Yellow",
//     "No"
// ];

// var bgImage = [
//     "limes.jpg",
//     "oranges.jpg",
// ];

function CheckAnswer(){
    var myInput = document.querySelector("#answer").value;
    console.log(myInput);
    if (myInput === data.questions[data.qnum].answer){
        // alert("Correct!");
        document.querySelector("#h_r").innerHTML = "<h1>Correct!<h1/>";

        data.qnum++;
        document.querySelector(".h1").innerHTML = data.questions[data.qnum].title;
        document.querySelector(".app").style.backgroundImage = "url('"+data.questions[data.qnum].img+"')";
        

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