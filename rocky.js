var answer = "blue";
qnum = 0;

var data = {
    qnum = 0,
    questions: [
        {
            title: "WHAT IS MY FAVOURITE COLOR?",
            answer: "blue",
            bgcolor: "#DAD",
        },
        {
            title: "WHAT IS MY FAVOURITE FOOD",
            answer: "sushi",
            bgcolor: "#red",
        },
        {
            title: "WHAT IS MY FAVOURITE CAR",
            answer: "lambo",
            bgcolor: "#green",
        }
    ]
};

function Start(){
    document.querySelector("#question").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#results").innerHTML = "<img src='" + data.questions[data.qnum].img +"' />"
}

function CheckAnswer(){
    var  myInp = document.querySelector("#answer").value;
    console.log(myInp);
    console.log(data.questions[data.qnum].answer)
    if(myInp === data.questions[data.qnum].answer){
        document.querySelector("#results").innerHTML = "<h1>YESSIIIRRRRR</h1>";

        data.qnum++;
        document.querySelector("#question").innerHTML = data.questions[data.qnum].title;
        document.body.style.color = data.questions[data.qnum].bgcolor;
        document.querySelector("#results").innerHTML = "<img src='" + data.questions[data.qnum].img+ "' />";

    } else {
        document.querySelector("#results").innerHTML = "<h1>WOW DUMB IDIOT NO</h1>"

    }
}

Start();