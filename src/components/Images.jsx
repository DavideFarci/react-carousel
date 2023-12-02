const Images = (props) => {
  const { index, carIndex, title, image } = props;
  return (
    <div className={`${index !== carIndex && "hidden"} relative`}>
      <img src={image} alt={`image-${image}`} />
      <div className="absolute bottom-0 w-full p-4  font-semibold bg-slate-500/50">
        {title}
      </div>
    </div>
  );
};

export default Images;
