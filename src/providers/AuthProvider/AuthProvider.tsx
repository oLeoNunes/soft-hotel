import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { requestUser } from "../../services/api";
import { IUser } from "../../services/interfaces";

interface IAuthProviderData {
  addToken: () => void;
  token: string;
  user: IUser;
  logOut: () => void;
}

export const AuthContext = createContext({} as IAuthProviderData);

const AuthProvider = () => {
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<IUser>({} as IUser);
  const navigate = useNavigate();

  function logOut() {
    setUser({} as IUser);
    setToken("");
    localStorage.clear();
  }

  function addToken() {
    if (!user.name) {
      const storedToken = localStorage.getItem("softHotel:token");
      if (storedToken) {
        getUser(storedToken);
        navigate("/dashboard");
      } else {
        navigate("/home");
      }
    } else {
      navigate("/dashboard");
    }
  }

  async function getUser(token: string) {
    setToken(token);
    const user = await requestUser(token);
    if (user) {
      setUser(user);
    } else {
      localStorage.clear();
      navigate("/home");
    }
  }

  useEffect(() => {
    addToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, addToken, token, logOut } as IAuthProviderData}
    >
      <Outlet />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
