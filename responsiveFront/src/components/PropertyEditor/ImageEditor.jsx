export default function ImageEditor({ element, onUpdate }) {
  return (
    <div className="p-3">
      <label className="form-label">Image URL</label>
      <input
        className="form-control"
        value={element.src}
        onChange={(e) => onUpdate({ ...element, src: e.target.value })}
      />
    </div>
  );
}
