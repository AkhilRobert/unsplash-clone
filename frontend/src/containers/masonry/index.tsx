import { ReactNode } from 'react';

import './style/masonry.scss';

type PropType = {
  children?: ReactNode | null;
};

function Masonry({ children = null }: PropType) {
  return <div className="masonry">{children} </div>;
}

export default Masonry;
