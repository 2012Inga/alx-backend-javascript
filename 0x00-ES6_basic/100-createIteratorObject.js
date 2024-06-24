export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);

  function* employeeGenerator() {
    for (let department of departments) {
      for (let employee of department) {
        yield employee;
      }
    }
  }

  return {
    [Symbol.iterator]: employeeGenerator
  };
}
