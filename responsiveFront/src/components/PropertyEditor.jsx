export default function PropertyEditor({ selectedElement, onUpdate }) {
  if (!selectedElement) return <p>Select an element to edit.</p>;

  const handleChange = (e) => {
    onUpdate({ ...selectedElement, props: { ...selectedElement.props, [e.target.name]: e.target.value } });
  };

  return (
    <div className="p-3 bg-light border-start">
      <h5>Properties</h5>
      {Object.keys(selectedElement.props).map((key) => (
        <div className="mb-2" key={key}>
          <label className="form-label">{key}</label>
          <input
            name={key}
            value={selectedElement.props[key]}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      ))}
    </div>
  );
}
