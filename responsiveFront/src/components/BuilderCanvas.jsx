export default function BuilderCanvas({ elements, setElements, onSelect, selectedId }) {
  const handleClick = (e, id) => {
    e.stopPropagation();
    onSelect(id);
  };

  return (
    <div
      className="border rounded h-100 position-relative"
      onClick={() => onSelect(null)}
    >
      {elements.map((el) => (
        <div
          key={el.id}
          style={{ position: 'absolute', top: el.y, left: el.x }}
          onClick={(e) => handleClick(e, el.id)}
          className={`p-2 border ${el.id === selectedId ? 'border-primary' : ''}`}
        >
          {el.type === 'text' && <p>{el.content}</p>}
          {el.type === 'image' && <img src={el.src} alt="" style={{ maxWidth: 100 }} />}
          {el.type === 'button' && <button className="btn btn-secondary">{el.label}</button>}
        </div>
      ))}
    </div>
  );
}
