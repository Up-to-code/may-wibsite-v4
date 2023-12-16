import Link from "next/link";

function Contanet_in_Hero() {
  return (
    <div className="ContantInHero">
      <h1 className="text-7xl font-bold ">
        Hello<span className="text-blue-600 ">.</span>
      </h1>
      <p className="text-gray-600 my-4 selection:text-white max-w-[300px] text-center sm:text-start">
        I am Ahmed Mansour  frontend developer
        I use ReactJS and Next.js in my work
      </p>
      <Link
        href={"https://github.com/Up-to-code"}
        className="bg-black text-white font-semibold py-2 px-7"
      >
        Github
      </Link>
    </div>
  );
}

export default Contanet_in_Hero;
