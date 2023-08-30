function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');

    return `${year}${month}${day}${hour}${minute}${second}`;
}

// Test cases
console.log(formatDate(new Date(2020, 6, 4, 8, 0, 0))); 
console.log(formatDate(new Date(2019, 11, 31, 23, 59, 59))); 
console.log(formatDate(new Date(2020, 6, 4))); 
