import ElementPalette from '../components/ElementPalette';
import BuilderCanvas from '../components/BuilderCanvas';
import PropertyEditor from '../components/PropertyEditor';
import { useState } from 'react';

export default function BuilderPage() {
  const [selectedId, setSelectedId] = useState(null);
  const [elements, setElements] = useState([]);

  const selectedElement = elements.find((el) => el.id === selectedId);

  const handleUpdate = (updated) => {
    setElements(elements.map(el => el.id === updated.id ? updated : el));
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-2">
          <ElementPalette />
        </div>
        <div className="col-8">
          <BuilderCanvas
            elements={elements}
            setElements={setElements}
            onSelect={setSelectedId}
          />
        </div>
        <div className="col-2">
          <PropertyEditor
            selectedElement={selectedElement}
            onUpdate={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
}
