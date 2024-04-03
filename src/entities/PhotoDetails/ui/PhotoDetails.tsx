import { PhotoDetailsProps } from "./props";

const PhotoDetails = (props: PhotoDetailsProps) => {
  const { image, selectPhoto } = props;

  return (
    <div className="flex flex-col">
      <div style={{ backgroundImage: `url(${image})` }} onClick={selectPhoto} />
    </div>
  );
};

export default PhotoDetails;
