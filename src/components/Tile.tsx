type Props = {
  color: string;
  xcod: number;
  ycod: number;
};
import Image from "next/image";
import Bishop from "../../public/assets/images/bishop_w.png";
const Tile = ({ color, xcod, ycod }: Props) => {
  return (
    <div
      className={`h-[100px] w-[100px] grid place-content-center ${color === "black" ? "bg-black " : "bg-transparent"}`}
    >
      {color === "black" && (
        <Image src={Bishop} alt="bishop" height={70} width={80} />
      )}
    </div>
  );
};
export default Tile;
