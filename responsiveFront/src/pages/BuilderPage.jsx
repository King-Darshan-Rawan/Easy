import ElementPalette from '../components/ElementPalette';
import BuilderCanvas from '../components/BuilderCanvas';
import PropertyEditor from '../components/PropertyEditor';
import { useState } from 'react';

export default function BuilderPage() {
  const [selectedId, setSelectedId] = useState(null);
  const [elements, setElements] = useState([]);

  const selectedElement = elements.find((el) => el.id === selectedId);

  const handleUpdate = (updated) => {
    setElements((prev) =>
      prev.map((el) => (el.id === updated.id ? updated : el))
    );
    setSelectedId(updated.id);
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-2 border-end">
          <ElementPalette setElements={setElements} />
        </div>
        <div className="col-8 p-3 bg-light">
          <BuilderCanvas
            elements={elements}
            setElements={setElements}
            onSelect={setSelectedId}
            selectedId={selectedId}
          />
        </div>
        <div className="col-2 border-start bg-white">
          <PropertyEditor
            selectedElement={selectedElement}
            updateElement={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
}
