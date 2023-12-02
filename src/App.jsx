import { useState } from "react";
import { carousel } from "./data";
import Bullets from "./components/Bullets";
import Images from "./components/images";

function App() {
  const [index, setIndex] = useState(0);

  const nextImg = () => {
    if (index >= 9) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevImg = () => {
    if (index <= 0) {
      setIndex(9);
    } else {
      setIndex(index - 1);
    }
  };

  const setBullets = (i) => {
    setIndex(i);
  };

  return (
    <div>
      <h1 className="text-3xl text-center py-4">Carosello</h1>
      <div className="flex justify-center relative">
        <Bullets carousel={carousel} index={index} setBullets={setBullets} />
        <button onClick={prevImg} className="p-4">
          <i className="fa-solid fa-circle-arrow-left text-2xl"></i>
        </button>
        {carousel.map((carousel, i) => {
          return (
            <Images
              image={carousel.image}
              title={carousel.title}
              index={index}
              carIndex={i}
              key={i}
            />
          );
        })}

        <button onClick={nextImg} className="p-4">
          <i className="fa-solid fa-circle-arrow-right text-2xl"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
