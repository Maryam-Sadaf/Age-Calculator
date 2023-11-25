let dob = document.getElementById("dob");
let currentDate = document.getElementById("currentDate");
let output = document.getElementById("output");

document.getElementById('calculatateBtn').addEventListener('click', () => {
    if (dob.value === "" || currentDate.value == "") {
        output.innerHTML = "Please select both dates.";
    } else {
        calculateAgeDifference(dob.value, currentDate.value);
    }
});

function calculateAgeDifference(start, end) {
    // Create Date objects from the input values
    const startDate = new Date(start);
    const endDate = new Date(end);

    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);

    // Calculate the time difference in milliseconds
    const timeDiff = endDate - startDate;
    console.log("Time Difference (milliseconds):", timeDiff);

    // Calculate the number of years, months, and days
    const years = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));
    const months = Math.floor((timeDiff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const days = Math.floor((timeDiff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    console.log("Years:", years);
    console.log("Months:", months);
    console.log("Days:", days);

    // Display the result
    output.innerHTML = `Age Difference: ${years} years, ${months} months, ${days} days`;
}
