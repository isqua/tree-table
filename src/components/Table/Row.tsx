import { Row } from "@tanstack/table-core"
import { Person } from "./makeData"
import { flexRender } from "@tanstack/react-table"

type RowProps = {
    row: Row<Person>
}

export function RowRenderer({ row }: RowProps) {
    return (
        <tr key={row.id}>
            {row.getVisibleCells().map(cell => {
                return (
                    <td key={cell.id}>
                        {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                        )}
                    </td>
                )
            })}
        </tr>
    )
}
