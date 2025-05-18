import { nanoid } from 'nanoid';

export default function ElementPalette({ setElements }) {
  const addElement = (type) => {
    const newElement = {
      id: nanoid(),
      type,
      content: type === 'text' ? 'Sample Text' : '',
      label: type === 'button' ? 'Click Me' : '',
      src: type === 'image' ? 'https://via.placeholder.com/150' : '',
      x: 50,
      y: 50,
    };
    setElements((prev) => [...prev, newElement]);
  };

  return (
    <div className="p-3">
      <h5>Elements</h5>
      <button className="btn btn-light w-100 my-2" onClick={() => addElement('text')}>
        Text
      </button>
      <button className="btn btn-light w-100 my-2" onClick={() => addElement('image')}>
        Image
      </button>
      <button className="btn btn-light w-100 my-2" onClick={() => addElement('button')}>
        Button
      </button>
    </div>
  );
}
