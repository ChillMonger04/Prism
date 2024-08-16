/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRegClipboard } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Color = ({ rgb, hex }) => {
  // State to track if the color code has been copied
  const [copied, setCopied] = useState(false);

  // Function to handle copying the color code to clipboard
  const handleCopy = () => {
    navigator.clipboard
      .writeText(hex) // Copy the hex value to clipboard
      .then(() => {
        toast.success("Color Copied Successfully"); // Show success toast
        setCopied(true); // Set copied state to true
        setTimeout(() => {
          setCopied(false); // Reset copied state after 3 seconds
        }, 3000);
      })
      .catch(() => {
        toast.error("Failed to Copy Color"); // Show error toast if copy fails
      });
  };

  return (
    <li className="bg-[#27272A] border border-gray-900 p-1.5 md:p-2 rounded-lg relative hover:cursor-pointer hover:-translate-y-1 transition-all">
      <div
        style={{ background: rgb }} // Set background color using rgb value
        className={`bg-${rgb} h-32 w-24 md:h-40 md:w-32 rounded-lg`}
      >
        {/* Copy icon displayed at the bottom-right corner */}
        <span className="absolute px-1 py-1.5 right-2 bottom-2 md:right-4 md:bottom-4 rounded">
          {copied ? (
            <FaRegCheckCircle size={16} className="text-gray-100" />
          ) : (
            <FaRegClipboard
              size={16}
              className=" text-zinc-100"
              onClick={handleCopy}
            />
          )}
        </span>
      </div>
    </li>
  );
};

export default Color;
