function createCalendar(year, month) {
    // Get the table element where the calendar will be created
    
    const table = document.createElement("table");
    const tr = document.createElement('tr')
    const th = document.createElement('th')
    const td = document.createElement('td')



    // Get the first day of the month
    const firstDay = new Date(year, month - 1, 1);
  
    // Get the last day of the month
    const lastDay = new Date(year, month, 0);
  
    // Initialize variables for looping through days
    let currentDay = 1;
    let currentWeekday = firstDay.getDay();
  
    // Loop through weeks
    while (currentDay <= lastDay.getDate()) {
      const weekRow = document.createElement("tr");
  
      // Loop through weekdays in a week
      for (let i = 0; i < 7; i++) {
        const dayCell = document.createElement("td");
  
        // Fill cells with days of the month
        if (currentWeekday === i && currentDay <= lastDay.getDate()) {
          dayCell.textContent = currentDay;
          currentDay++;
        }
  
        weekRow.appendChild(dayCell);
      }
  
      table.appendChild(weekRow);
  
      currentWeekday = (currentWeekday + 1) % 7;
    }
  
    // Append the table to the body of the document
    document.body.appendChild(table);
  }
  
  // Call the function to create the calendar for October 2012
  createCalendar(2012, 10);
  