import { useContext } from 'react';
import { DrawingContext } from './PixelArt';

export function ColorPicker() {
  const { setColor } = useContext(DrawingContext);
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple'];
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button
        key={color}
        style={{ backgroundColor: color }}
        onClick={() => setColor(color)}
      />)}
    </div>
  )
}