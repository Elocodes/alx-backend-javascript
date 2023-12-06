// function returns an array of objects
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((obj) => obj.location === city)
    .map((obj) => {
      const studentHasGrade = newGrades.find((grade) => grade.studentId === obj.id);
      const grades = !studentHasGrade ? 'N/A' : studentHasGrade.grade;
      return { ...obj, grades };
    });
}
