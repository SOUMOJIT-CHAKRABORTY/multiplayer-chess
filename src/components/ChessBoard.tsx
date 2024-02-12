import Tile from "./Tile";

type Props = {};
const rowItems = ["1", "2", "3", "4", "5", "6", "7", "8"];
const colItems = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ChessBoard = (props: Props) => {
  return (
    <div className="h-[801px] w-[801px] bg-emerald-500 grid grid-rows-8 grid-cols-8">
      {/* <div className="h-[100px] w-[100px] bg-black"></div> */}
      {rowItems.map((item, index) =>
        colItems.map((itm, i) => (
          //   <div
          //     key={index + i}
          //     className={`h-[100px] w-[100px] ${(index + i) % 2 === 0 ? "bg-black" : "bg-transparent"}`}
          //   ></div>
          <Tile
            key={index + i}
            xcod={index}
            ycod={i}
            color={(index + i) % 2 ? "normal" : "black"}
          />
        ))
      )}
    </div>
  );
};
export default ChessBoard;
