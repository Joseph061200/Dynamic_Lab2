var data = {
    qnum:0,
    questions: [
        {
            title:"what comes after A?",
            answer:"b",
            bgcolor:"thistle",
            img: "http://place-puppy.com/200x200"
        },
        {
            title:"is 5 bigger than 4?",
            answer:"yes",
            bgcolor:"lightblue",
            img: "http://place-puppy.com/300x300"
        },

        {
            title:"what is 10+2?",
            answer:"12                  v                                                                      ",
            bgcolor:"thistle",
            img: "http://place-puppy.com/200x200"
        },
    ]
};
//var answer = "b";
var qnum = 0;

var questions = [
    "What comes after A?",
    "is 5 bigger than 4?",
    "what is 10+2?",
    "what country did coronavirus come from?",
    "is alex a cutie?"
];

var answers = [
    "b",
    "yes",
    "12",
    "china",
    "hell yes"
]

function Start(){
    document.querySelector("#question").innerText=data.questions[data.qnum].title;
    document.querySelector(".container").style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#newalert").innerHTML = "<img src='"+data.questions[data.qnum].img+"'/>"
}
function CheckAnswer(){

    var myInp = document.querySelector("#answer").value;
    console.log(myInp);
    console.log(data.questions[data.qnum].answer)
    
    if(myInp === data.questions[data.qnum].answer){
        // alert("Correct!");
        document.querySelector("#newalert").innerHTML = "<p>Correct!</p>";
        data.qnum++;
        document.querySelector("#question").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#newalert").innerHTML = "<img src='"+data.questions[data.qnum].img+"'/>";

        /*if(qnum === 1){
            qnum++;
            document.querySelector("#question").innerText = "is 5 bigger than 4?";
            answer ="yes";
        } else if(qnum === 2){
            qnum++;
            document.querySelector("#question").innerText = "what is 10+2?";
            answer ="12";
        }*/
    } else {
        //alert("Wrong :(");
        document.querySelector("#newalert").innerHTML = "<p>Wrong :(</p>";
    }
}

Start();