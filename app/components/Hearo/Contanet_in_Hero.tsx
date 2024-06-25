import Link from "next/link";

function Contanet_in_Hero() {
  return (
    <div className="ContantInHero">
      <h1 className="text-7xl font-bold ">
        Hello<span className="text-blue-600 ">.</span>
      </h1>
      <p className="text-gray-600 my-4 selection:text-white max-w-[300px] text-center sm:text-start text-lg">
        I am Ahmed Mansour frontend developer I use ReactJS and Next.js in my
        work
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
          href={
            "https://firebasestorage.googleapis.com/v0/b/my-website-310.appspot.com/o/cv.pdf?alt=media&token=f3e516c9-51a3-41ac-963d-2fb4ff12084a"
          }
          className="bg-blue-600  text-white font-semibold py-2 px-7 rounded"
        >
          CV
        </Link>
      </div>
    </div>
  );
}

export default Contanet_in_Hero;
