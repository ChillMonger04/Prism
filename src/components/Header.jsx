/* eslint-disable react/prop-types */
import { IoPrism } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";

const Header = ({ handleChange }) => {
  return (
    <div className="headerDiv py-4">
      <div className="flex justify-around mx-auto md:px-14">
        {/* Logo Section */}
        <div className="flex items-center gap-1 cursor-pointer">
          <IoPrism size={18} />
          <span className="text-md md:text-lg">prism</span>
        </div>

        {/* File Upload Section */}
        <div className="flex items-center justify-center gap-4">
          <div>
            <label
              htmlFor="file" // Associates with the hidden file input below
              className="flex items-center gap-1 text-zinc-600 text-xs font-light bg-gray-100 border border-dashed border-gray-400 rounded p-2 cursor-pointer"
            >
              <LuImagePlus size={12} /> {/* Upload icon */}
              Upload Image {/* Label text */}
            </label>
            <input
              type="file"
              id="file" // ID used to link with the label
              hidden // Hide the default file input
              onChange={handleChange} // Calls handleChange when a file is selected
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
