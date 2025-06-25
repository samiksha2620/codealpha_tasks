
const todayDate = new Date();
    const day = String(todayDate.getDate()).padStart(2, '0');
    const month = String(todayDate.getMonth() + 1).padStart(2, '0'); // 0-indexed
    const year = todayDate.getFullYear();
    const formattedToday = `${day}-${month}-${year}`;
    document.getElementById("today").textContent = `Aaj ki tareekh: ${formattedToday}`;

    function calculateAge() {
      const dobInput = document.getElementById("dob").value;
      const result = document.getElementById("result");

      result.textContent = ""; // Clear old result

      if (!dobInput) return;

      const dob = new Date(dobInput);
      const today = new Date();

      if (dob > today) return;

      let years = today.getFullYear() - dob.getFullYear();
      let months = today.getMonth() - dob.getMonth();
      let days = today.getDate() - dob.getDate();

      // Adjust if days are negative
      if (days < 0) {
        months--;
        const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += daysInPrevMonth;
      }

      // Adjust if months are negative
      if (months < 0) {
        years--;
        months += 12;
      }

      const output = `Your Age: ${years} years, ${months} months, ${days} days`;

      // Show result on webpage
      result.textContent = output;

      // Show result in popup alert on screen
      alert(output);
      result,innerhtml
    }