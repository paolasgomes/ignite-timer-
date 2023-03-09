import { ButtonContainer } from "./Button.styles";

interface ButtonProps {
  color?: "primary" | "secondary" | "danger" | "neutral";
}

export const Button = ({ color = "primary" }: ButtonProps) => {
  return <ButtonContainer color={color}> Enviar </ButtonContainer>;
};
