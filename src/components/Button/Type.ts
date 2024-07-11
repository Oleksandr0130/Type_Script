type ButtonTypes = "button" | "submit" | "reset"

export interface ButtonProps {
    name: String;
    type?: ButtonTypes
    onButtonClick?: () => void;
  }
