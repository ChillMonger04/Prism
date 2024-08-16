/* eslint-disable react/prop-types */
import uploadIcon from "../assets/upload.svg";
import Color from "./Color";

const Image = ({ uploadedImage, colorPalette }) => {
  // Converts RGB values to hexadecimal format
  const toHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) hex = "0" + hex;
    return hex;
  };

  return (
    <div className="imageDiv bg-[#141417] my-auto">
      <div className="flex flex-col items-center justify-center my-8 md:my-6">
        <div>
          {/* Display the uploaded image or show the upload prompt */}
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="uploaded"
              height={550}
              width={550}
              className="object-cover w-80 md:w-[600px] rounded-xl transition-all"
            />
          ) : (
            <div className="flex flex-col gap-6 md:gap-10">
              <img
                src={uploadIcon}
                alt=""
                className="h-20 md:h-32 md:mt-32 opacity-70 text-gray-800"
              />
              <p className="text-sm md:text-base text-gray-400 text-center uppercase">
                Please upload an image!
              </p>
            </div>
          )}
        </div>

        {/* Display the color palette if available */}
        {colorPalette && (
          <ul className="flex flex-wrap gap-12 md:gap-14 justify-center mt-20">
            {colorPalette.map((color) => {
              // Convert RGB color array to a string
              const rgb = `rgb(${color.join(",")})`;
              // Convert RGB values to HEX format
              const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(
                color[2]
              )}`;
              return <Color key={color} rgb={rgb} hex={hex} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Image;
