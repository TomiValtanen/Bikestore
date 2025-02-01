import React, { cloneElement } from 'react'
import { useTable } from 'react-table'

export default function TableUser({ columnsUser, user }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columnsUser,
        user
    })

    const styles = {
        thead: {
          backgroundColor: 'black',
          color: 'white',
          padding: 5
        },
        td: {
          padding: "10px",
          borderBottom: "1px solid lightgrey"
        },
      };

  return (
    <table {...getTableProps()} style={{margin:'auto', textAlign: 'center', width: 1000}}>
        <thead style={styles.thead}>
        {headerGroups.map ((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} style={styles.td}>{column.render("Header")}</th>
            ))}
        </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row)
                return(
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()} style={styles.td}>
                                {cell.render("Cell")}
                                </td>
                        })}
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}
