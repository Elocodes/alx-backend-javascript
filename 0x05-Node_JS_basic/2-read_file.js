const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Initialize counters
    let totalStudents = 0;
    let csStudents = 0;
    let sweStudents = 0;
    const csList = [];
    const sweList = [];

    lines.forEach((line) => {
      if (line.trim() === '') return;

      const firstname = line.split(',')[0];
      const field = line.split(',')[3];

      // Increment field-specific counts and update lists
      if (field === 'CS') {
        csStudents += 1;
        csList.push(firstname);
      } else if (field === 'SWE') {
        sweStudents += 1;
        sweList.push(firstname);
      }
    });
    totalStudents = csStudents + sweStudents;

    // Display the results
    console.log(`Number of students: ${totalStudents}`);
    console.log(`Number of students in CS: ${csStudents}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents}. List: ${sweList.join(', ')}`);
  } catch (error) {
    console.error('Cannot load the database');
  }
}
module.exports = countStudents;
