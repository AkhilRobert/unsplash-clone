import "./style/image.scss";
import { useContext } from "react";
import { AppContext } from "../../App";

type PropType = {
  src: string;
  alt: string;
  label: string;
  id: string;
};

function Image({ src, alt, label, id }: PropType) {
  const { deleteImage } = useContext(AppContext);

  return (
    <div className="image">
      <img src={src} alt={alt} />
      <div className="image__overlay">
        <button className="image__button" onClick={() => deleteImage(id)}>
          delete
        </button>
        <p className="image__label">{label}</p>
      </div>
    </div>
  );
}

export default Image;
