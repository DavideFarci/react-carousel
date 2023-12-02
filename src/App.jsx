import { useState } from "react";
import { carousel } from "./data";

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
        <div className="absolute top-0 z-10 p-2">
          {carousel.map((dot, i) => {
            return (
              <i
                onClick={() => setBullets(i)}
                key={i}
                className={`fa-solid fa-circle ${
                  index !== i && "text-slate-600"
                } cursor-pointer text-sm mr-0.5`}
              ></i>
            );
          })}
        </div>
        <button onClick={prevImg} className="p-4">
          <i className="fa-solid fa-circle-arrow-left text-2xl"></i>
        </button>
        {carousel.map((carousel, i) => {
          return (
            <div className={`${index !== i && "hidden"} relative`} key={i}>
              <img src={carousel.image} alt={`image-${carousel.image}`} />
              <div className="absolute bottom-0 w-full p-4  font-semibold bg-slate-500/50">
                {carousel.title}
              </div>
            </div>
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
