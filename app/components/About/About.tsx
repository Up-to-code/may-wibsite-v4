import Container from "../public_compnets/Container";
import Image from "next/image";
import { Get_image } from "@/public/Get_image";
import Title from "../public_compnets/Title";

function About() {
  return (
    <div className="min-h-[400px] bg-black">
      <Container>
        <div className="flex items-center min-h-[400px]  justify-center   ">
          <div className="h-full ">
            <Image
              src={Get_image.me_img1}
              alt="me"
              width={"100"}
              className=" flitr    "
            ></Image>
          </div>
          <div className=" w-72  h-60 px-10 flex justify-center flex-col">
            <Title>
              <span className="text-white ">About me</span>
            </Title>
            <p className="text-white ">
              I am Ahmed Mansour  frontend developer
              I use ReactJS and Next.js in my work
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
