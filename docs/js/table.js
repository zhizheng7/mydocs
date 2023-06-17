function generateTableFromJson(jsonData) {
    const table = document.createElement('table');
    const keys = Object.keys(jsonData[0]);
  
    // Generate table header row
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    keys.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    // Generate table data rows
    const tbody = document.createElement('tbody');
    jsonData.forEach(row => {
      const tr = document.createElement('tr');
      keys.forEach(key => {
        const td = document.createElement('td');
        td.textContent = row[key] || '';
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
  
    return table;
}
  


function updateCSVTable(tablediv, csvfilename) {
  fetch('/table/' + csvfilename)
    .then(response => response.text())
    .then(data => {
      const parsedData = Papa.parse(data, { header: true}).data;
      const table = generateTableFromJson(parsedData);

      // Append the table to the container element
      const container = document.getElementById(tablediv);
      container.appendChild(table);
    })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });

  return;
}