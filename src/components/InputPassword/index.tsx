import { useState } from "react";
import { IPropsInput } from "../Input";
import { InputContainer } from "./style";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const InputPassword = ({
  nameInput,
  placeholder,
  type,
  label,
  register,
  errosMessage,
}: IPropsInput) => {
  const [inputType, setInputType] = useState(type);

  function alteraTipo() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  return (
    <InputContainer>
      <div>
        <label htmlFor={nameInput}>{label}</label>
        <div className="inputPassword__box">
          <input
            id={nameInput.toLowerCase()}
            type={inputType}
            placeholder={placeholder}
            {...register(nameInput)}
          />
          <button
            type="button"
            onClick={() => alteraTipo()}
            className="est__btnChangeType"
          >
            {inputType === "password" ? (
              <BsEye size={16} />
            ) : (
              <BsEyeSlash size={16} />
            )}
          </button>
        </div>
      </div>
      <p className="error__message">{errosMessage}</p>
    </InputContainer>
  );
};

export default InputPassword;
