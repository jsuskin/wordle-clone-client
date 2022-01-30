import { useState, useEffect } from "react";

const Details = ({ word }) => {
  const [secretCode, setSecretCode] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", ({ key }) =>
      setSecretCode(key === "6" ? `${secretCode}${key}` : "")
    );

    if (secretCode.match(/6{3}/)) {
      setShowDetails(true);
    }
  }, [secretCode]);
  
  return (
    <details
      style={{
        display: showDetails ? "block" : "none",
        position: "absolute",
        left: 0,
        paddingLeft: "20px",
        paddingTop: "10px",
        cursor: "default",
      }}
    >
      <summary>Word</summary>
      {word}
    </details>
  );
};

export default Details;
