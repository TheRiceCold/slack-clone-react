import styles from "@/styles/components/Components.module.sass";
import React from "react";

interface IProps {
  variant?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
};

const Button: React.FC<IProps> = ({ 
  variant, onClick, style, children 
}) => {
  const buttonClass = (variant !== "outline") 
    ? styles.button_solid : styles.button_outline;

  return (
    <button className={buttonClass} style={style}>
      {children}
    </button>
  );
}

export default Button;
