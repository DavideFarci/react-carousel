import { useEffect, useState } from "react";
import { carousel } from "./data";
import Bullets from "./components/Bullets";
import Images from "./components/Images"; // Assicurati che il nome del componente sia corretto

function App() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowRight":
        nextImg();
        break;
      case "ArrowLeft":
        prevImg();
        break;
      default:
        break;
    }
  };

  const nextImg = () => {
    setIndex((prevIndex) => (prevIndex + 1) % carousel.length);
  };

  const prevImg = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + carousel.length) % carousel.length
    );
  };

  const setBullets = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const startAutoplay = () => {
    setAutoplay(true);
  };

  const stopAutoplay = () => {
    setAutoplay(false);
  };

  const autoplayControl = () => {
    if (!autoplay) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (autoplay) {
        nextImg();
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [autoplay]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-mono text-blue-300 text-center py-10">
        Carosello
      </h1>
      <div className="flex justify-center relative">
        <Bullets carousel={carousel} index={index} setBullets={setBullets} />
        <button onClick={prevImg} className="p-4">
          <i className="fa-solid fa-circle-arrow-left text-4xl text-blue-700 hover:text-blue-500 transition-all duration-100"></i>
        </button>
        {carousel.map((item, i) => (
          <Images
            image={item.image}
            title={item.title}
            index={index}
            carIndex={i}
            key={i}
          />
        ))}
        <button onClick={nextImg} className="p-4">
          <i className="fa-solid fa-circle-arrow-right text-4xl text-blue-700 hover:text-blue-500 transition-all duration-100"></i>
        </button>
      </div>
      <button
        className="mt-8 rounded-md shadow shadow-blue-500 font-semibold px-4 py-2 bg-blue-600 hover:bg-blue-700 transition ease-in-out delay-150 duration-20000 hover:-translate-y-1 hover:scale-110"
        onClick={autoplayControl}
      >
        Autoplay
      </button>
    </div>
  );
}

export default App;
