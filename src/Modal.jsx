export default function Modal({ isOpen, onClose, title, children }) {
      if (!isOpen) return null; // Don't render if closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="flex flex-col z-10 bg-white p-6 rounded-lg shadow-lg w-[70%] h-[85%] max-h-[600px]">
        <h2 className="text-2xl font-bold text-textPrimary mb-8 text-center">{title}</h2>
        {/* to remove the scrollbar */}
        <div
  className="flex-1 w-full min-h-0 mb-4 overflow-auto"
  style={{
    scrollbarWidth: 'none',      // Firefox
    msOverflowStyle: 'none',     // IE/Edge
  }}
>
  {children}

  <style jsx>{`
    div::-webkit-scrollbar {
      display: none;
    }
  `}</style>
</div>

        <button onClick={onClose} className="px-4 py-2 bg-c2 text-white rounded hover:bg-c3 self-center">
          Close
        </button>
      </div>
    </div>
  );
}