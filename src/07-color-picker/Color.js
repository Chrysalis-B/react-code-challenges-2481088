export default function Color ({ hex, name, handleClick }) {
  return (
    <button
      className='color-square'
      style={{ backgroundColor: hex }}
      onClick={() => handleClick(hex)}
    >
      <h2>{name}</h2>
    </button>
  )
}
