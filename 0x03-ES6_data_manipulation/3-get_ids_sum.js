// function returns an array of objects
export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((accumulated, obj) => accumulated + obj.id, 0);
}
