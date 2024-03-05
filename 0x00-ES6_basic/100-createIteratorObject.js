export default function createIteratorObject(report) {
  function* employeeIterator() {
    for (const department in report.employees) {
      if (department) {
        const allEmployees = report.employees[department];
        for (const employee of allEmployees) {
          yield employee;
        }
      }
    }
  }

  return { [Symbol.iterator]: employeeIterator };
}
