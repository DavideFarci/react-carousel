const Bullets = (props) => {
  const { carousel, index, setBullets } = props;

  return (
    <div className="absolute top-0 z-10 p-2">
      {carousel.map((dot, i) => {
        return (
          <i
            onClick={() => setBullets(i)}
            key={i}
            className={`fa-solid fa-circle ${
              index !== i && "text-blue-400 transition-all duration-500"
            } cursor-pointer text-sm mr-0.5 hover:text-blue-500`}
          ></i>
        );
      })}
    </div>
  );
};

export default Bullets;
