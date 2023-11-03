import React, { HTMLProps } from 'react';

export function IndeterminateCheckbox({
    indeterminate, className = '', ...rest
}: { indeterminate?: boolean; } & HTMLProps<HTMLInputElement>) {
    const ref = React.useRef<HTMLInputElement>(null!);
    const { checked } = rest;

    React.useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            ref.current.indeterminate = !checked && indeterminate;
        }
    }, [checked, indeterminate, ref]);

    return (
        <input
            type="checkbox"
            ref={ref}
            className={className + ' cursor-pointer'}
            {...rest} />
    );
}
