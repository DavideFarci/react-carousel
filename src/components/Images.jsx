const Images = (props) => {
  const { index, carIndex, title, image } = props;
  return (
    <div className={`${index !== carIndex && "hidden"} relative`}>
      <img src={image} alt={`image-${image}`} />
      <div className="absolute bottom-0 w-full p-4  font-semibold bg-blue-300/20">
        {title}
      </div>
    </div>
  );
};

export default Images;
