import React from "react";
import Image from "next/image";

type CertificationModalProps = {
  image: string;
  onClose: () => void;
};

const CertificationModal: React.FC<CertificationModalProps> = ({
  image,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-4">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✖️
        </button>
        <Image
          src={image}
          alt="Certification"
          width={500} // Adjust width as needed
          height={300} // Adjust height as needed
          className="max-w-full h-auto rounded"
        />
      </div>
    </div>
  );
};

export default CertificationModal;
