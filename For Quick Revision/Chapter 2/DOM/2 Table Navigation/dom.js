const table = document.body.firstElementChild
// console.log(table);

/* `table.rows` is accessing the collection of all `<tr>` elements within the specified
table element. This property returns a collection of all the rows in the table,
allowing you to access and manipulate them as needed. */
const rows = table.rows
console.log(rows);

const row = table.firstElementChild.nextElementSibling.firstElementChild

/* `row.cells` is accessing the collection of all `<td>` or `<th>` elements within the
specified row element. This property returns a collection of all the cells in the row,
allowing you to access and manipulate them as needed. */

console.log(row.cells);

const cell = row.firstElementChild
console.log(cell.parentNode);


/* `table.tBodies` is accessing the collection of `<tbody>` elements within the specified table element. This property returns a collection of all the `<tbody>` elements within the table, allowing you to access and manipulate them as needed. */
const tBodies = table.tBodies
console.log(tBodies);