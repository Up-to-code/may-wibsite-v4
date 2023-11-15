import Link from "next/link";

function Logo() {
  return (
    <>
      <Link href={"/"}>
        <div className="text_PaynerColor font-bold text-xl  flex gap-1">
          Ahmed{" "}
          <span className="bg-blue-500   text-slate-50 px-2 ">Mansour</span>
        </div>
      </Link>
    </>
  );
}

export default Logo;
