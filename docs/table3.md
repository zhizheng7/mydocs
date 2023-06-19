## Testing Dynamic Table content from JSON

## Dynamic Table

<div id="data-table" class="cipam-table"></div>

<script>

fetch('../table/data.json')
  .then(response => response.json())
  .then(data => {
    const table = generateTableFromJson(data);

    // Append the table to the container element
    const container = document.getElementById('data-table');
    container.appendChild(table);
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });
</script>


## A differet test table here

| Method      | Description                          |
| :---------- | :----------------------------------- |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |


## Table 1

<table id="table1">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
  </tbody>
</table>

## Table 2

<table id="table2">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
  </tbody>
</table>




<script>
    window.addEventListener('DOMContentLoaded', function() {
        loadDynamicTable('table1', '../table/sample1.csv');
        loadDynamicTable('table2', '../table/sample2.csv');
    });


</script>
