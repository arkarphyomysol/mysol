import Image from "next/image";

const TeamPImage = (
  name: string,
  width: number,
  height?: number,
  ext?: string
) => {
  return (
    <div className="">
      <Image
        src={`/images/team/${name}.${ext ? ext : "png"}`}
        alt={name}
        width={width}
        height={height}
        className="rounded-full"
      />
    </div>
  );
};
export default TeamPImage;
