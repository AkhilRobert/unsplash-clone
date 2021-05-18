import './style/image.scss';

type PropType = {
  src: string;
  alt: string;
  label: string;
};

function Image({ src, alt, label }: PropType) {
  return (
    <div className="image">
      <img src={src} alt={alt} />
      <div className="image__overlay">
        <button className="image__button">delete</button>
        <p className="image__label">{label}</p>
      </div>
    </div>
  );
}

export default Image;
