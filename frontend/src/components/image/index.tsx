import './style/image.scss';

type PropType = {
  src?: string;
  alt?: string;
  label?: string;
};

function Image({ src, alt, label }: PropType) {
  return (
    <div className="image">
      <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/anime-1603495240.jpg"
        alt="hello"
      />
      <div className="image__overlay">
        <button className="image__button">delete</button>
        <p className="image__label">This will be the label</p>
      </div>
    </div>
  );
}

export default Image;
