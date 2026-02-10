export default function Modal({ isOpen, onClose, title, children }) {
      if (!isOpen) return null; // Don't render if closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="flex flex-col z-10 bg-white p-6 rounded-lg shadow-lg w-[70%] h-[85%] max-h-[600px]">
        <h1 className="text-xl font-bold mb-4 text-center">{title}</h1>
        {/* Give more space to children, move button outside if needed */}
        <div className="flex-1 w-full min-h-0 mb-4">
          {children}
        </div>
        <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 self-center">
          Close
        </button>
      </div>
    </div>
  );
}