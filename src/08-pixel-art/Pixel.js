import { useContext, useState } from 'react';
import { DrawingContext } from './PixelArt';

export function Pixel() {
  const { color } = useContext(DrawingContext);
  const [backgroundColor, setBackgroundColor] = useState('lightGrey');
  return <div
    onClick={() => setBackgroundColor(color)}
    style={{ height: '20px', width: '20px', backgroundColor, margin: '1px' }}
  />
}
