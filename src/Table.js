import react from 'react'
import {useTable} from 'react-table'

function Table({columns , data}) {
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });


    return (
        <table {...getTableProps()}>
      <thead style={{ border: 'solid 1px blue' }}>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}
              style={{
                borderBottom: 'solid 3px #1e4f7bc2',
                background: 'aliceblue',
                color: 'black',
                fontWeight: 'bold',
              }}
              >
                {column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}
                style={{
                  padding: '10px',
                  border: 'solid 1px gray',
                  background: '#e3ebec',
                }}
                >
                  {cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  
    )
}
export default Table