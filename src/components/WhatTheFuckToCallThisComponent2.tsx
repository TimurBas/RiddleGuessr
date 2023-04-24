import React from "react";
import useStabilityEndpoint from "../hooks/useStabilityEndpoint";

const WhatTheFuckToCallThisComponent2 = ({ title }: { title: string }) => {
  const base64Images = useStabilityEndpoint({ input: title });

  return (
    <div>
      {base64Images.map((data, index) => (
        <img
          key={index}
          src={`data:image/png;base64,${data}`}
          alt={`Image ${index}`}
          className="w-48 h-48"
        />
      ))}
    </div>
  );
};

export default WhatTheFuckToCallThisComponent2;
