import TextEditor from './TextEditor';
import ImageEditor from './ImageEditor';
import ButtonEditor from './ButtonEditor';

const PropertyEditor = ({ selectedElement, updateElement }) => {
  if (!selectedElement) {
    return <div className="p-4">Select an element to edit.</div>;
  }

  const renderEditor = () => {
    switch (selectedElement.type) {
      case 'text':
        return (
          <TextEditor element={selectedElement} onUpdate={updateElement} />
        );
      case 'image':
        return (
          <ImageEditor element={selectedElement} onUpdate={updateElement} />
        );
      case 'button':
        return (
          <ButtonEditor element={selectedElement} onUpdate={updateElement} />
        );
      default:
        return <div>No editor available.</div>;
    }
  };

  return <div className="p-4">{renderEditor()}</div>;
};

export default PropertyEditor;
