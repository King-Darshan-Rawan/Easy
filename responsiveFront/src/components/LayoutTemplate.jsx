export default function DraggableElement({ type, label }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('type', type);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="p-2 border rounded mb-2 bg-white text-center cursor-pointer"
    >
      {label}
    </div>
  );
}
