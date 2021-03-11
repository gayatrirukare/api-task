import react from 'react'
import {useTable} from 'react-table'
import styles from './mystyle.module.css'; 

function Table(props) {
  const {columns , data }= props;
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
        

    return data.length ? (
      <div className={styles.tablediv}>
        <table {...getTableProps()}>
          <thead style={{ border: 'solid 1px gray' }}>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px #1e4f7bc2',
                    background: '#212529',
                    color: 'white',
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
                      background: 'rgb(45 50 56)',
                      color:'white'
                    }}
                    ><a  onClick={ () => props.showDetails(data[i].id) }
                    style = {{
                      color: 'white'
                    }}
                    > 
                      {cell.render("Cell")}
                    
                      </a></td>;
                      
                  })} 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    ):(
      <div>
        
      </div>
    )
}
export default Table