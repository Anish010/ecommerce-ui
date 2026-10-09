import { forwardRef, useId } from 'react';

const Input = forwardRef(function Input({ label, error, id, className = '', ...rest }, ref) {
    const autoId = useId();
    const inputId = id ?? autoId;


    return (
        <div className="space-y-1">
            {label && (
                <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                ref={ref}
                id={inputId}
                aria-invalid={Boolean(error)}
                className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${error ? 'border-red-500' : 'border-gray-300'
                    } ${className}`}
                {...rest}
            />
            {error && <p className="text-xs text-red-600">{error}</p>}
        </div>
    );
});


export default Input;
