import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./style";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: (event) => void;
}

const Button = ({ children, onClick }: IProps) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;
