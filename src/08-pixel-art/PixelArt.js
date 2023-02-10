import { createContext, useMemo, useState } from 'react';
import { ColorPicker, Pixels } from './';

export const DrawingContext = createContext({
  color: 'lightGrey',
  setColor: undefined
});

export default function PixelArt() {
  const [color, setColor] = useState('lightGrey');
  const contextValue = useMemo(() => ({
    color,
    setColor
  }), [color, setColor]);
  return (
    <DrawingContext.Provider value={contextValue}>
      <ColorPicker />
      <Pixels />
    </DrawingContext.Provider>
  )
}
