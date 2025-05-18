// src/hooks/useDragAndDrop.js

import { useState } from 'react';

export function useDragAndDrop() {
  const [elements, setElements] = useState([]);

  const addElement = (type, defaultProps = {}) => {
    const newElement = {
      id: Date.now(),
      type,
      props: { ...defaultProps },
    };
    setElements((prev) => [...prev, newElement]);
  };

  const updateElement = (id, updatedProps) => {
    setElements((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, props: { ...el.props, ...updatedProps } } : el
      )
    );
  };

  const removeElement = (id) => {
    setElements((prev) => prev.filter((el) => el.id !== id));
  };

  return { elements, setElements, addElement, updateElement, removeElement };
}
