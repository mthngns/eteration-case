import React from "react";

type IconPosition = "left" | "right";

interface IconButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  title: string;
  iconPosition?: IconPosition;
}

const IconButton: React.FC<IconButtonProps> = ({
  iconPosition = "left",
  icon,
  title: username,
  ...props
}) => {
  return (
    <button {...props}>
      {iconPosition === "left" && icon}
      <h2 className="truncate">{username}</h2>
      {iconPosition === "right" && icon}
    </button>
  );
};

export default IconButton;
