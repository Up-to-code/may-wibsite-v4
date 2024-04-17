import Link from "next/link";

function Contanet_in_Hero() {
  return (
    <div className="ContantInHero">
      <h1 className="text-7xl font-bold ">
        Hello<span className="text-blue-600 ">.</span>
      </h1>
      <p className="text-gray-600 my-4 selection:text-white max-w-[300px] text-center sm:text-start text-lg">
        I am Ahmed Mansour  frontend developer
        I use ReactJS and Next.js in my work
      </p>
      <div className="flex gap-7">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/Up-to-code"}
          className="bg-black text-white font-semibold py-2 px-7 rounded"
        >
          Github
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://firebasestorage.googleapis.com/v0/b/my-website-310.appspot.com/o/%D8%B3%D9%8A%D8%B1%D8%A9%20%D8%B0%D8%A7%D8%AA%D9%8A%D8%A9%20%20%D8%A3%D8%A8%D9%8A%D8%B6%20%D9%88%20%D8%B1%D8%B5%D8%A7%D8%B5%D9%89%20%D8%AD%D8%AF%D9%8A%D8%AB%20%20%D8%A8%D8%B3%D9%8A%D8%B7%20(1).pdf?alt=media&token=0079feb0-24ab-4e64-9c1d-407e7f01aba6"}
          className="bg-blue-600  text-white font-semibold py-2 px-7 rounded"
        >
          CV
        </Link>
      </div>


    </div>
  );
}

export default Contanet_in_Hero;
