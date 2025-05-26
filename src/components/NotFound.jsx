import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center text-white bg-gray-900">
      <h1 className="text-4xl font-extrabold text-red-500">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Sorry, the page you're looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
