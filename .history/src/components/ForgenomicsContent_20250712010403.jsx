// src/components/ForgenomicsContent.jsx

// Import any images or assets you need
import someImage from "../assets/some-image.png";

const ForgenomicsContent = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md">
      {/* Your HTML content goes here, converted to JSX */}
      <h2 className="text-3xl font-bold mb-4">Whitepaper Title</h2>
      <p className="text-gray-300">
        This is the content of your forgenomics.html file,
        now converted to a React component.
      </p>
      <img src={someImage} alt="Image Description" className="mt-4" />
      {/* Continue with all your HTML here */}
    </div>
  );
};

export default ForgenomicsContent;