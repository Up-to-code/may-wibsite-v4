import Container from "../public_compnets/Container";
import Image from "next/image";
import { Get_image } from "@/public/Get_image";
import Skile from "./Skile";
function Skells() {
  return (
    <div className="min-h-[400px] bg-black w-full">
      <Container>
        <div className="flex items-center min-h-[400px]  justify-evenly ">
          <div className="h-full ">
            <Image
              src={Get_image.me_img1}
              alt="me"
              width={"100"}
              className=" flitr    "
            ></Image>
          </div>

          <div className="flex gap-3 flex-wrap w-72  ">
            <Skile sk="html" />
            <Skile sk="css" />
            <Skile sk="javascrpit" />
            <Skile sk="typescrpit" />
            <Skile sk="nodejs" />
            <Skile sk="react" />
            <Skile sk="nextjs" />
            <Skile sk="php" />
            <Skile sk="tailwind css" />
            <Skile sk="Bootstrp" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Skells;
