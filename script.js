let editor

let currentQuestion=0
let mcqScore=0
let codeScore=0

let answers=[]

let timer
let timeLeft=0

let studentName=""

/* =========================
ESCAPE HTML (IMPORTANT FIX)
========================= */

function escapeHTML(text){
return text
.replace(/&/g,"&amp;")
.replace(/</g,"&lt;")
.replace(/>/g,"&gt;");
}

/* =========================
INIT EDITOR
========================= */

window.onload=function(){

editor=CodeMirror.fromTextArea(
document.getElementById("codeEditor"),
{
lineNumbers:false,
mode:"text/x-java"
}
)

}

/* =========================
START TEST
========================= */

function startTest(){

studentName=document.getElementById("studentName").value

if(studentName===""){
alert("Please enter your name")
return
}

document.getElementById("startScreen").style.display="none"

let welcome=document.getElementById("welcomeText")

welcome.innerText="Hi, Welcome "+studentName
welcome.style.display="block"

document.getElementById("testScreen").style.display="block"

window.onbeforeunload=function(){
return "Test is running!"
}

loadQuestion()

}

/* =========================
LOAD QUESTION
========================= */

function loadQuestion(){

clearInterval(timer)

if(currentQuestion>=questions.length){
showResult()
return
}

let q=questions[currentQuestion]

document.getElementById("progress").innerText=
"Question "+(currentQuestion+1)+" / "+questions.length

document.getElementById("questionTitle").innerText=q.question

document.getElementById("mcqOptions").innerHTML=""

editor.setValue("")
editor.focus()

if(q.type==="mcq"){

editor.getWrapperElement().style.display="none"

q.options.forEach(opt=>{
document.getElementById("mcqOptions").innerHTML+=`
<label class="option">
<input type="radio" name="mcq" value="${opt}">
${opt}
</label>
`
})

timeLeft=60

}else{

editor.getWrapperElement().style.display="block"

timeLeft=180

}

/* Change button */

let nextBtn=document.getElementById("nextBtn")

if(currentQuestion===questions.length-1){
nextBtn.innerText="Submit"
}else{
nextBtn.innerText="Next"
}

/* Timer */

document.getElementById("timer").innerText=timeLeft

timer=setInterval(()=>{

timeLeft--

document.getElementById("timer").innerText=timeLeft

if(timeLeft<=0){
clearInterval(timer)
submitAnswer()
}

},1000)

}

/* =========================
SUBMIT ANSWER
========================= */

function submitAnswer(){

let q=questions[currentQuestion]

if(q.type==="mcq"){

let selected=document.querySelector('input[name="mcq"]:checked')

if(selected){

answers[currentQuestion]=selected.value

if(selected.value===q.answer){
mcqScore++
}

}

}else{

let code=editor.getValue()

answers[currentQuestion]=code

let ok=true

q.required.forEach(rule=>{
if(!code.toLowerCase().includes(rule)){
ok=false
}
})

if(ok){
codeScore++
}

}

currentQuestion++
loadQuestion()

}

/* =========================
SKIP
========================= */

function skipQuestion(){
currentQuestion++
loadQuestion()
}

/* =========================
HINT
========================= */

function showHint(){
alert(questions[currentQuestion].hint)
}

/* =========================
SHOW RESULT (FIXED)
========================= */

function showResult(){

window.onbeforeunload=null

document.getElementById("testScreen").style.display="none"
document.getElementById("welcomeText").style.display="none"

document.getElementById("resultScreen").style.display="block"

let total=mcqScore+codeScore

document.getElementById("studentResult").innerText=
"Student : "+studentName

document.getElementById("scoreMCQ").innerText=
"MCQ Score : "+mcqScore

document.getElementById("scoreCoding").innerText=
"Coding Score : "+codeScore

document.getElementById("scoreTotal").innerText=
"Total Score : "+total+" / "+questions.length

/* =========================
REVIEW (FIXED DISPLAY)
========================= */

let review=""

questions.forEach((q,i)=>{

if(q.type==="mcq"){

let student = answers[i] || "Not answered"

review+=`
<p>
<b>Q${i+1} : ${q.question}</b><br>

Your Answer :
<span class="${student===q.answer?'correct':'wrong'}">
${escapeHTML(student)}
</span><br>

Correct :
<span class="correct">
${escapeHTML(q.answer)}
</span>

</p>
<hr>
`

}else{

let studentCode = answers[i] || "No code submitted"

let missing=[]

q.required.forEach(rule=>{
if(!studentCode.toLowerCase().includes(rule)){
missing.push(rule)
}
})

review+=`
<p>
<b>Q${i+1} : ${q.question}</b><br>

<b>Your Code:</b>
<pre class="codeBox">${escapeHTML(studentCode)}</pre>

<b>Expected Solution:</b>
<pre class="codeBox">${escapeHTML(q.solution)}</pre>

<b>Missing Concepts:</b>
<span style="color:red">
${missing.length ? missing.join(", ") : "None"}
</span>

</p>
<hr>
`

}

})

document.getElementById("review").innerHTML=review

}

/* =========================
DOWNLOAD PDF
========================= */

function downloadPDF(){

try{

const { jsPDF } = window.jspdf

let doc = new jsPDF()

let y = 20

doc.setFontSize(16)
doc.text("Test Result", 20, y)

y+=10
doc.setFontSize(12)
doc.text("Student: "+studentName,20,y)

y+=10
doc.text("MCQ Score: "+mcqScore,20,y)

y+=10
doc.text("Coding Score: "+codeScore,20,y)

y+=10
doc.text("Total Score: "+(mcqScore+codeScore)+" / "+questions.length,20,y)

doc.save(studentName+"_Result.pdf")

}catch(e){

alert("PDF failed")
console.log(e)

}

}

/* =========================
ANTI CHEAT
========================= */

/* Disable right click */
document.addEventListener("contextmenu",e=>e.preventDefault())

/* Disable copy paste */
document.addEventListener("copy",e=>e.preventDefault())
document.addEventListener("paste",e=>e.preventDefault())
document.addEventListener("cut",e=>e.preventDefault())

/* Disable drag */
document.addEventListener("dragstart",e=>e.preventDefault())

/* Disable shortcuts */
document.addEventListener("keydown",function(e){

// Allow normal keys inside CodeMirror
if(document.activeElement.closest('.CodeMirror')) return

if(e.key==="F12") e.preventDefault()

if(e.ctrlKey && e.key==="u") e.preventDefault()

if(e.ctrlKey && e.shiftKey && e.key==="I") e.preventDefault()

if(e.ctrlKey && e.shiftKey && e.key==="J") e.preventDefault()

if(e.ctrlKey && e.key==="c") e.preventDefault()

if(e.ctrlKey && e.key==="v") e.preventDefault()

})

/* Detect DevTools */

setInterval(function(){

const devtools=window.outerWidth-window.innerWidth>150

if(devtools){

document.body.innerHTML=
"<h1 style='color:red;text-align:center;margin-top:20%'>Developer Tools Detected. Test Blocked.</h1>"

}

},1000)

/* Detect tab switching */

document.addEventListener("visibilitychange",function(){

if(document.hidden){

alert("Tab switching detected. Test restarted.")

location.reload()

}

})