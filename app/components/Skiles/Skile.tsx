import { type } from "os";

type Prps_ = {
  sk: string;
};

function Skile({ sk }: Prps_) {
  return <div className="bg-white py-1 px-4 font-bold  uppercase ">{sk}</div>;
}

export default Skile;
