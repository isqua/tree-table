import { ColumnDef } from '@tanstack/react-table';

import { IndeterminateCheckbox } from './IndeterminateCheckbox';
import { Person } from './makeData';

export const columns: ColumnDef<Person>[] = [
    {
        accessorKey: 'firstName',
        enableSorting: false,
        header: ({ table }) => (
            <>
                <IndeterminateCheckbox
                    {...{
                        checked: table.getIsAllRowsSelected(),
                        indeterminate: table.getIsSomeRowsSelected(),
                        onChange: table.getToggleAllRowsSelectedHandler(),
                    }} />{' '}
                <button
                    {...{
                        onClick: table.getToggleAllRowsExpandedHandler(),
                    }}
                >
                    {table.getIsAllRowsExpanded() ? '👇' : '👉'}
                </button>{' '}
                First Name
            </>
        ),
        cell: ({ row, getValue }) => (
            <div
                style={{
                    // Since rows are flattened by default,
                    // we can use the row.depth property
                    // and paddingLeft to visually indicate the depth
                    // of the row
                    paddingLeft: `${row.depth * 2}rem`,
                }}
            >
                <>
                    <IndeterminateCheckbox
                        {...{
                            checked: row.getIsSelected(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler(),
                        }} />{' '}
                    {row.getCanExpand() ? (
                        <button
                            {...{
                                onClick: row.getToggleExpandedHandler(),
                                style: { cursor: 'pointer' },
                            }}
                        >
                            {row.getIsExpanded() ? '👇' : '👉'}
                        </button>
                    ) : (
                        '🔵'
                    )}{' '}
                    {getValue()}
                </>
            </div>
        ),
        footer: props => props.column.id,
    },
    {
        accessorFn: row => row.lastName,
        id: 'lastName',
        cell: info => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: props => props.column.id,
    },
    {
        accessorKey: 'age',
        header: () => 'Age',
        footer: props => props.column.id,
    },
    {
        accessorKey: 'visits',
        sortDescFirst: true,
        header: () => <span>Visits</span>,
        footer: props => props.column.id,
    },
    {
        accessorKey: 'status',
        header: 'Status',
        footer: props => props.column.id,
    },
    {
        accessorKey: 'progress',
        header: 'Profile Progress',
        footer: props => props.column.id,
    },
];
