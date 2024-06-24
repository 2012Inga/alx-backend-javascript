export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  // Iterate through the iterator
  for (const employee of reportWithIterator) {
    // Append each employee name followed by '|', except for the last one
    result += `${employee} | `;
  }

  // Remove the last ' | ' from the result
  result = result.slice(0, -3);

  return result;
}
