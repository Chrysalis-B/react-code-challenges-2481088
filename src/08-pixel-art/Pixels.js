import { Pixel } from './';

export function Pixels() {
  const pixels = [...Array(100).keys()].map(i => <Pixel key={i} />);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}