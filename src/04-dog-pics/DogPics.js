import { useState, useEffect } from "react";

const fetchImageUrl = async () => {
  const { message } = await (await fetch('https://dog.ceo/api/breeds/image/random')).json();
  return message;
};

const getAltText = (url) => {
  // example https://images.dog.ceo/breeds/setter-gordon/n02101006_22.jpg
  const breed = url.substring(url.indexOf('breeds/') + 7, url.lastIndexOf('/')).replace('-', ' ');
  return `A dog of the breed ${breed}`;
}

export default function DogPics() {
  const [imageUrl, setImageUrl] = useState('');
  const [altText, setAlText] = useState('');

  useEffect(() => {
    fetchImageUrl().then(url => setImageData(url));
  }, []);

  const setImageData = url => {
    setImageUrl(url);
    setAlText(getAltText(url));
  }

  return (
    <div className='dog-pics'>
      <img
        src={imageUrl}
        width='400px'
        height='400px'
        style={{ objectFit: 'cover' }}
        alt={altText}
      />
      <button onClick={async () => setImageData(await fetchImageUrl())}>🐶</button>
    </div>
  )
}
