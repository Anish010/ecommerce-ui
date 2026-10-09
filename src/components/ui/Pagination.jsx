import Button from './Button';


export default function Pagination({ page, totalPages, onChange }) {
  if (!totalPages || totalPages <= 1) return null;


  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-3">
      <Button variant="secondary" size="sm" disabled={page <= 0} onClick={() => onChange(page - 1)}>
        Previous
      </Button>
      <span className="text-sm text-gray-600">
        Page {page + 1} of {totalPages}
      </span>
      <Button
        variant="secondary"
        size="sm"
        disabled={page + 1 >= totalPages}
        onClick={() => onChange(page + 1)}
      >
        Next
      </Button>
    </nav>
  );
}
