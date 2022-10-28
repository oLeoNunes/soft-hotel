import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputContainer } from "./style";

export interface IValues {}

export interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  nameInput: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errosMessage?: string;
}

const Input = ({
  nameInput,
  placeholder,
  type,
  label,
  register,
  errosMessage,
  defaultValue,
}: IPropsInput) => {
  return (
    <InputContainer>
      <div>
        <label htmlFor={nameInput}>{label}</label>

        <input
          id={nameInput.toLowerCase()}
          type={type}
          placeholder={placeholder}
          {...register(nameInput)}
          defaultValue={defaultValue}
        />
      </div>
      <p className="error__message">{errosMessage}</p>
    </InputContainer>
  );
};

export default Input;
