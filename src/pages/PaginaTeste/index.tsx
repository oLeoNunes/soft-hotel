import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {} from ".";
import Button from "../../components/Button";
import ButtonMenu from "../../components/ButtonMenu";
import Header from "../../components/Header";
import { ToastContext } from "../../providers/ToastyProvider/ToasyProvider";
import { requestLogin, requestRegister } from "../../services/api";
import { Contaienr } from "./styte";

const PaginaTeste = () => {
  const { toastSucesso, toastErro } = useContext(ToastContext);
  const [token, setToken] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  async function login() {
    const data = {
      email: "joao10@mail.com",
      password: "123456789",
    };
    try {
      const resp = await requestLogin(data);
      localStorage.setItem("softHotel:token", resp.accessToken);
      setToken(resp.accessToken);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // login();
    // register();
  }, []);

  return (
    <Contaienr>
      <Header />
      <div className="box__Menu">
        <ButtonMenu />
      </div>
      <h1>Teste</h1>

      <form>
        <input
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <Button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Register
        </Button>
      </form>
      <Button
        type="button"
        onClick={() => {
          // logout();
        }}
      >
        Logout
      </Button>
    </Contaienr>
  );
};

export default PaginaTeste;
