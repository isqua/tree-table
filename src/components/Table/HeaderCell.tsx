import {
    flexRender,
    Header
} from '@tanstack/react-table';
import { Person } from './makeData';

type HeaderProps = {
    header: Header<Person, unknown>;
};
export function HeaderCell({ header }: HeaderProps) {
    return (
        <th key={header.id} colSpan={header.colSpan}>
            {header.isPlaceholder ? null : (
                <div
                    className={header.column.getCanSort()
                        ? 'sortable'
                        : ''}
                    onClick={header.column.getToggleSortingHandler()}
                >
                    {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                    )}
                    {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                    }[header.column.getIsSorted() as string] ?? null}
                </div>
            )}
        </th>
    );
}
