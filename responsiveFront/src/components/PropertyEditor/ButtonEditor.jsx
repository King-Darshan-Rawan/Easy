export default function ButtonEditor({ element, onUpdate }) {
  return (
    <div className="p-3">
      <label className="form-label">Button Label</label>
      <input
        className="form-control"
        value={element.label}
        onChange={(e) => onUpdate({ ...element, label: e.target.value })}
      />
    </div>
  );
}
