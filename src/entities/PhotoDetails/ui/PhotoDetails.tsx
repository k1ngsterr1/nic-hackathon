import { PhotoDetailsProps } from "./props";

const PhotoDetails = (props: PhotoDetailsProps) => {
  const { image, selectPhoto, i } = props;

  return (
    <div
      key={i}
      className="image-photo border-[2px] border-solid border-purple"
      style={{ backgroundImage: `url(${image})` }}
      onClick={selectPhoto}
    />
  );
};

export default PhotoDetails;
