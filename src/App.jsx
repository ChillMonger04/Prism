import ColorThief from "colorthief";
import Header from "./components/Header";
import Image from "./components/Image";
import URLSearch from "./components/URLSearch";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [upload, setUpload] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);

  const handleUpload = (e) => {
    // Retrieve the first file from the input element's files list
    const file = e.target.files[0];
    // Create a new FileReader instance to read the contents of the file
    const reader = new FileReader();

    // Define what to do once the FileReader successfully reads the file
    reader.onload = async (event) => {
      // Create a new Image instance to load the file data as an image
      const img = new window.Image(); // Note: window.Image is used to avoid conflicts

      // Define what to do once the Image has successfully loaded
      img.onload = () => {
        // Create a new instance of ColorThief to extract the color palette
        const colorThief = new ColorThief();
        // Use ColorThief to get a palette of 7 colors from the loaded image
        const colorPalette = colorThief.getPalette(img, 7);
        // Log the color palette to the console for debugging purposes
        console.log(colorPalette);
        // Update the state with the loaded image's data URL
        setUpload(event.target.result);
        // Update the state with the extracted color palette
        setColorPalette(colorPalette);
      };
      // Set the source of the Image to the data URL from the FileReader
      img.src = event.target.result;
    };

    // Start reading the file as a data URL, triggering the onload event when done
    reader.readAsDataURL(file);
  };

  // Handle image URL input
  const handleUrlChange = async (url) => {
    const img = new window.Image();
    img.crossOrigin = "Anonymous"; // Handle CORS
    img.onload = () => {
      const colorThief = new ColorThief();
      const colorPalette = colorThief.getPalette(img, 7);
      setUpload(url);
      setColorPalette(colorPalette);
    };
    img.src = url;
  };

  return (
    <div className="w-full min-h-screen bg-[#141417] text-white flex flex-col">
      <Header handleChange={handleUpload} />
      <URLSearch handleUrlChange={handleUrlChange} />
      <Image uploadedImage={upload} colorPalette={colorPalette} />
      <Footer />
    </div>
  );
};

export default App;
