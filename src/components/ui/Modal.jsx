import { useEffect } from 'react';

export default function Modal({ open, onClose, title, children }) {
    useEffect(() => {
        if (!open) return undefined;
        const onkey = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onkey);
        return () => window.removeEventListener('keydown', onkey);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onMouseDown={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label={title}
                className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-xl"
                onMouseDown={(e) => e.stopPropagation()}
            >
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="text-gray-500 hover:text-gray-800"
                    >
                        &#x2715;
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
