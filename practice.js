//Exercise #2
let personName = prompt("Enter your name:");
let personemail = prompt("Enter your email:");
let salaryMonthly = Number(prompt("Enter your age:"));
let salaryYearly = salaryMonthly * 12;

document.write(`
    <div class="container">
        <p> <span>Name:</span> ${personName} </p>
        <p> <span>Email:</span> ${personemail} </p>
        <p> <span>Salary (Yearly):</span> $${salaryYearly} </p>
    </div>
`);