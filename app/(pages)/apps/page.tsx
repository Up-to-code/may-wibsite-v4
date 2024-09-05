"use client"
import { useState } from 'react';
import Link from 'next/link';

const DownloadPage = () => {
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  const apps = [
    { name: 'App', description: 'this is a test app', downloadLink: 'https://expo.dev/artifacts/eas/t5LTZaJG1PFWyMYBfw5zR4.apk' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Download Apps</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{app.name}</h2>
            <p className="text-gray-600 mb-4">{app.description}</p>
            <button
              onClick={() => setSelectedApp(app.name)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Download
            </button>
          </div>
        ))}
      </div>
      {selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Download {selectedApp}</h3>
            <p className="mb-4">Are you sure you want to download this app?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setSelectedApp(null)}
                className="px-4 py-2 border rounded hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <Link
                href={apps.find(app => app.name === selectedApp)?.downloadLink || '#'}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                onClick={() => setSelectedApp(null)}
              >
                Confirm Download
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadPage;

