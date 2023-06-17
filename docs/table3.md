## Testing Dynamic Table content from JSON

## Dynamic Table

<div id="data-table"></div>

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
