import React, { CSSProperties } from "react";

type Props = { style?: CSSProperties };
const Center: React.FC<Props> = ({ children, style }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default Center;
