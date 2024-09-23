"use client";

import { useEffect, useState, Suspense, lazy } from "react";
import { db } from "@/app/Firebase/db";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";

const CertificationModal = lazy(() => import("./CertificationModal"));

type Certification = {
  id: string;
  title: string;
  imageUrl: string;
};

function Certifications() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const getCertifications = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Certifications"));
        const certData: Certification[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Certification[];
        setCertifications(certData);
      } catch (error) {
        console.error("Error fetching certifications:", error);
      }
    };
    getCertifications();
  }, []);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 bg-gray-100 px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">My Certifications</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Click on a certification to view it in detail.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden bg-white"
            onClick={() => handleImageClick(cert.imageUrl)}
          >
            <Image
              width={300}
              height={200}
              src={cert.imageUrl}
              alt={cert.title}
              className="w-full h-auto object-cover"
            />
            <p className="text-gray-800 text-center p-2">{cert.title}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Suspense fallback={<div>Loading...</div>}>
          <CertificationModal
            image={selectedImage}
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </div>
  );
}

export default Certifications;
