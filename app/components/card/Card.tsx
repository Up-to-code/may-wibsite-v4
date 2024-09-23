import Image from "next/image";
import Link from "next/link";

interface PropsTypes {
  title_art: string;
  url: string;
  urlImage: string;
}

function Card({ title_art, url, urlImage }: PropsTypes) {
  return (
    <Link href={`/Projects/${url}`}>
      <div className="relative max-w-[320px] mx-auto p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-white rounded-lg group">
        {/* Card Image */}
        <div className="w-full h-48 bg-gray-200 rounded-lg flex justify-center items-center overflow-hidden relative">
          <Image
            width={320}
            height={200}
            src={urlImage ? urlImage : "/default-placeholder.png"}
            loading="lazy"
            alt={title_art}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
          />
          {!urlImage && (
            <p className="absolute text-gray-500 text-sm font-medium">
              Image not available
            </p>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-lg"></div>
        </div>

        {/* Title */}
        <p className="mt-4 text-center font-semibold text-lg text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {title_art}
        </p>

        {/* Accent Line on Hover */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
      </div>
    </Link>
  );
}

export default Card;
