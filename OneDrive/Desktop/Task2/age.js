
function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    if (day && month && year) {
        const dob = new Date(year, month - 1, day); 
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();

        if (today < new Date(today.getFullYear(), dob.getMonth(), dob.getDate())) {
            age--;
        }

        document.getElementById('result').innerHTML = `Your age is ${age} years.`;
    } else {
        document.getElementById('result').innerHTML = "Please enter a valid date of birth.";
    }
}
