import Color from './Color'
import './ColorRenderer.css';

const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
}]

export default function ColorRenderer() {
  return (
    <section className='color-renderer__container'>
      {colors.map(color => <Color key={color.name} hex={color.hex} name={color.name} />)}
    </section>
  )
}
