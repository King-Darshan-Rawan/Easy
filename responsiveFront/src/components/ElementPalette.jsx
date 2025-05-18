const elements = [
  { type: 'text', label: 'Text' },
  { type: 'image', label: 'Image' },
  { type: 'button', label: 'Button' },
];

export default function ElementPalette() {
  return (
    <div className="p-3 bg-light border-end h-100">
      <h5>Elements</h5>
      {elements.map((el, idx) => (
        <div
          key={idx}
          draggable
          onDragStart={(e) => e.dataTransfer.setData('type', el.type)}
          className="p-2 border rounded mb-2 bg-white text-center cursor-pointer"
        >
          {el.label}
        </div>
      ))}
    </div>
  );
}
// This code defines a React component called `ElementPalette` that renders a list of draggable elements (text, image, and button) in a sidebar. Each element is represented by a div with a label and can be dragged to a different location in the application. The component uses Bootstrap classes for styling.