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
  fetch('../table/' + csvfilename)
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



function loadDynamicTable(tableId, csvPath) {
  const table = document.getElementById(tableId);

  // Load the CSV data dynamically
  fetch(csvPath)
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      // Parse the CSV data
      const rows = Papa.parse(data, { header: true }).data;

      // Create the table body
      const tbody = document.createElement('tbody');
      rows.forEach(function(row) {
        const tr = document.createElement('tr');
        Object.values(row).forEach(function(value) {
          const td = document.createElement('td');
          td.textContent = value;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });

      // Replace the existing table body with the dynamic data
      table.replaceChild(tbody, table.tBodies[0]);

      // Initialize tablesort on the updated table
      new Tablesort(table);
    })
    .catch(function(error) {
      console.error('Error loading CSV:', error);
    });
}


function loadDynamicTableJson(tableId, jsonPath) {
  const table = document.getElementById(tableId);

  // Load the JSON data dynamically
  fetch(jsonPath)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Create the table body
      const tbody = document.createElement('tbody');
      data.forEach(function(item) {
        const tr = document.createElement('tr');
        Object.values(item).forEach(function(value) {
          const td = document.createElement('td');
          td.textContent = value;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });

      // Replace the existing table body with the dynamic data
      table.replaceChild(tbody, table.tBodies[0]);

      // Initialize tablesort on the updated table
      new Tablesort(table);
    })
    .catch(function(error) {
      console.error('Error loading JSON:', error);
    });
}

// Usage example:
//loadDynamicTableJson('table1', 'path/to/table1.json');
//loadDynamicTableJson('table2', 'path/to/table2.json');

