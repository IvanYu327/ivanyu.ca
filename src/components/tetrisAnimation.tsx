import React, { useState, useEffect } from "react";
import "./tetrisAnimation.css";
import TPiece from "./TPiece";

const TetrisAnimation: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const fadeOutTimer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Adjust the fade-out duration as needed

      return () => {
        clearTimeout(fadeOutTimer);
      };
    }
  }, [isLoading]);

  return (
    <>
      {/* {isLoading && (
        <div className="tetris-animation fade-out">
          <div className="tetris-square"></div>
        </div>
      )} */}
      <TPiece />
    </>
  );
};

export default TetrisAnimation;
