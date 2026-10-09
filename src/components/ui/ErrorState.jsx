import Button from './Button';


export default function ErrorState({ error, onRetry, title = 'Something went wrong' }) {
  return (
    <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-6 py-8 text-center">
      <h3 className="text-lg font-semibold text-red-800">{title}</h3>
      <p className="mt-1 text-sm text-red-700">{error?.message ?? 'Please try again.'}</p>
      {onRetry && (
        <div className="mt-4 flex justify-center">
          <Button variant="secondary" onClick={onRetry}>
            Try again
          </Button>
        </div>
      )}
    </div>
  );
}
