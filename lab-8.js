const formula = (p, q) => {
    const firstPart = ((p === q) && (!p === q)) ? 1 : 0,
      secondPart = (!p === !q) ? 1 : 0;

    return {
      p,
      q,
      firstPart,
      secondPart,
      result: firstPart === secondPart ? 1 : 0
    }
  },
  table = document.querySelector('#table'),
  tableBody = table.querySelector('tbody'),
  addRow = part => {
    const tableRow = document.createElement('tr');
    
    tableRow.innerHTML = Object.keys(part)
      .map(partKey => `<td class="${partKey === 'result' 
        ? part[partKey] 
          ? 'bg-success' 
          : 'bg-danger' 
        : ''}">${part[partKey]}</td>`)
      .join('');
    
    tableBody.appendChild(tableRow);
  },
  variablesLength = 2,
  cases = Array
    .from({ length: 2 ** variablesLength })
    .map((el, index, array) => index
      .toString(2)
      .padStart(variablesLength, '0'))
    .map(el => el
      .split('')
      .map(el => parseInt(el)));

cases.forEach(someCase => addRow(formula(...someCase)));