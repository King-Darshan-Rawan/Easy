import TextEditor from './PropertyEditor/TextEditor';
import ImageEditor from './PropertyEditor/ImageEditor';
import ButtonEditor from './PropertyEditor/ButtonEditor';

export default function PropertyEditor({ selectedElement, updateElement }) {
  if (!selectedElement) return <div className="p-3">Select an element to edit.</div>;

  switch (selectedElement.type) {
    case 'text':
      return <TextEditor element={selectedElement} onUpdate={updateElement} />;
    case 'image':
      return <ImageEditor element={selectedElement} onUpdate={updateElement} />;
    case 'button':
      return <ButtonEditor element={selectedElement} onUpdate={updateElement} />;
    default:
      return <div className="p-3">Unsupported element.</div>;
  }
}
