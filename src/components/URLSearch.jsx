/* eslint-disable react/prop-types */
import { useState } from "react";

const URLSearch = ({ handleUrlChange }) => {
  // State to store the input URL
  const [url, setUrl] = useState("");

  // Handle changes to the URL input field
  const onUrlChange = (e) => {
    setUrl(e.target.value); // Update the state with the new URL
  };

  // Handle the form submission
  const onUrlSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit behavior
    handleUrlChange(url); // Pass the URL to the parent component
  };

  return (
    <div className="urlSearchDiv py-4 mt-4">
      <form
        onSubmit={onUrlSubmit} // Trigger onUrlSubmit when the form is submitted
        className="w-full flex items-center justify-center gap-4"
      >
        <input
          type="text"
          value={url} // Bind input value to the state
          onChange={onUrlChange} // Call onUrlChange when the input changes
          placeholder="Enter image URL" // Placeholder text for the input field
          className="p-2 border border-gray-400 rounded w-1/2 focus:outline-[#333333] text-black"
        />

        <button
          type="submit" // Button submits the form
          className="p-2 bg-[#333333] text-white rounded border border-dashed border-gray-400"
        >
          Load Image
        </button>
      </form>
    </div>
  );
};

export default URLSearch;
