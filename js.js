function showWelcomePrompt() {
    var name = prompt("Enter your name:");
    
    if (name !== null && name !== "") {
        showMarkPrompt(name);
    }
}

function showMarkPrompt(name) {
    var mark = parseFloat(prompt("Welcome, " + name + "! Enter your mark:"));
    
    if (!isNaN(mark)) {
        calculateResult(name, Math.floor(mark));
    } else {
        alert("Invalid input. Please enter a valid numeric mark.");
    }
}

function calculateResult(name, mark) {
    var grade;
    
    if (mark < 0 || mark > 100) {
        grade = "Invalid";
    } else if (mark <= 49) {
        grade = "F";
    } else if (mark <= 60) {
        grade = "D";
    } else if (mark <= 70) {
        grade = "C";
    } else if (mark <= 80) {
        grade = "B";
    } else if (mark <= 90) {
        grade = "A";
    } else {
        grade = "A+";
    }
    
    var passStatus = mark >= 50 ? "Pass" : "Fail";
    
    var resultMsg = "Hi " + name + "!\nYour mark is: " + mark + "\nGrade: " + grade + "\nStatus: " + passStatus;
    alert(resultMsg);
}