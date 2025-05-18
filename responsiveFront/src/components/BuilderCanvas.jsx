import { useState } from 'react';

export default function BuilderCanvas({ onSelect }) {
  const [elements, setElements] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    const newElement = {
      id: Date.now(),
      type,
      props: { text: 'Edit Me', src: '', href: '#' },
    };
    setElements([...elements, newElement]);
  };

  return (
    <div
      className="border bg-white p-3"
      style={{ minHeight: '80vh' }}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {elements.map((el) => (
        <div
          key={el.id}
          className="my-2"
          onClick={() => onSelect(el.id)}
        >
          {el.type === 'text' && <p>{el.props.text}</p>}
          {el.type === 'image' && (
            <img src={el.props.src || 'https://via.placeholder.com/150'} alt="" />
          )}
          {el.type === 'button' && (
            <a href={el.props.href} className="btn btn-primary">
              {el.props.text}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
// This code defines a React component called `BuilderCanvas` that serves as a canvas for building a web page. It allows users to drag and drop elements (text, image, button) onto the canvas. The component maintains a state of elements and renders them based on their type. When an element is clicked, it triggers a callback function (`onSelect`) with the element's ID, allowing for further actions like editing or deleting the element.