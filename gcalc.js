const form = document.getElementById("gradeForm");

form.addEventListener("submit", function(event) {
    
    event.preventDefault();
    
    const score1 = Number(document.getElementById("score1").value);
    const score2 = Number(document.getElementById("score2").value);
    const score3 = Number(document.getElementById("score3").value);
    const score4 = Number(document.getElementById("score4").value);

    const finalGrade = score1 + score2 + score3 + score4
    const average = finalGrade / 4;

    let mark;
    if (average < 40) {
        mark = "Failed";
    } else if (average < 60) {
        mark = "Average";
    } else if (average < 90) {
        mark = "Above Average";
    } else {
        mark = "Excellent";
    }

    console.log(document.getElementById("resultscore1"));
    console.log(document.getElementById("resultscore2"));
    console.log(document.getElementById("resultscore3"));
    console.log(document.getElementById("resultscore4"));
    console.log(document.getElementById("resultAverage"));

    document.getElementById("resultscore1").textContent = "Subject 1: " + score1;
    document.getElementById("resultscore2").textContent = "Subject 2: " + score2;
    document.getElementById("resultscore3").textContent = "Subject 3: " + score3;
    document.getElementById("resultscore4").textContent = "Subject 4: " + score4;

    document.getElementById("resultAverage").textContent = "Average: " + average;
    document.getElementById("resultMark").textContent = "Mark: " + mark;
    document.getElementById("result").style.display = "block";
});