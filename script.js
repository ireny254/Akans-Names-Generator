document.getElementById("akan-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const birthdateInput = document.getElementById("birthdate").value;
    const genderInput = document.querySelector("input[name='gender']:checked");
  
    // Input validation
    if (!birthdateInput || !genderInput) {
      alert("Please enter your birthdate and select your gender.");
      return;
    }
  
    // Extract year, month, and day
    const dateParts = birthdateInput.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);
  
    if (month < 1 || month > 12) {
      alert("Please enter a valid month (1-12).");
      return;
    }
  
    if (day < 1 || day > 31) {
      alert("Please enter a valid day (1-31).");
      return;
    }
  
    // Apply Akan day calculation formula
    const CC = parseInt(year.toString().slice(0, 2));  // First two digits of the year
    const YY = parseInt(year.toString().slice(2));     // Last two digits
    const MM = month;
    const DD = day;
  
    // Formula: d = (( ( (CC/4) - 2*CC - 1 ) + (5*YY/4) + (26*(MM+1)/10) + DD )) % 7
    let dayOfWeek = Math.floor(
      ( ( (CC / 4) - 2 * CC - 1 ) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD )
    ) % 7;
  
    // Normalize negative result
    if (dayOfWeek < 0) {
      dayOfWeek += 7;
    }
  
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    const gender = genderInput.value;
    const akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
  
    document.getElementById("result").innerText = `Your Akan name is: ${akanName}`;
  });