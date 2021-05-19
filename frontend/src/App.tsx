import { createContext, useEffect, useState } from "react";

import { Header, Image } from "./components";
import { Masonry } from "./containers";
import { deleteImage, getAllImages, sendImage } from "./services/api";

type ImageType = {
  _id: string;
  label: string;
  imageURL: string;
};

type AppContextType = {
  addImage: (label: string, URL: string) => void;
  deleteImage: (id: string) => void;
};

export const AppContext = createContext<AppContextType>({
  addImage(): void {},
  deleteImage(): void {},
});

function App() {
  const [images, setImages] = useState<ImageType[] | undefined>();

  useEffect(() => {
    getAllImages().then((res) => setImages(res));
  }, []);

  function handleAdd(label: string, url: string) {
    sendImage(label, url).then(() => {
      getAllImages().then((res) => setImages(res));
    });
  }

  function handleDelete(id: string) {
    deleteImage(id).then(() => getAllImages().then((res) => setImages(res)));
  }

  return (
    <AppContext.Provider
      value={{ addImage: handleAdd, deleteImage: handleDelete }}
    >
      <div className="container">
        <Header />
        <Masonry>
          {images &&
            images.map((d) => (
              <Image
                key={d._id}
                src={d.imageURL}
                label={d.label}
                alt={d.label}
                id={d._id}
              />
            ))}
        </Masonry>
      </div>
    </AppContext.Provider>
  );
}

export default App;
