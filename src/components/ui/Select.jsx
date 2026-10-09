import { forwardRef, useId } from 'react';

import { forwardRef, useId } from 'react';


const Select = forwardRef(function Select(
  { label, error, id, className = '', children, ...rest },
  ref
) {
  const autoId = useId();
  const selectId = id ?? autoId;


  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        ref={ref}
        id={selectId}
        aria-invalid={Boolean(error)}
        className={`w-full rounded-md border bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
        {...rest}
      >
        {children}
      </select>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
});


export default Select;
