import { Header, Image } from './components';
import { Masonry } from './containers';
import data from './data';
import './app.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Masonry>
        {data.map((d) => (
          <Image key={d._id} label={d.label} src={d.imageURL} alt={d.label} />
        ))}
      </Masonry>
    </div>
  );
}

export default App;
