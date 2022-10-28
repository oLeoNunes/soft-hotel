import { HeaderCotainer } from "./style";
import logoGoodHotel from "../../assets/svg-login/logoGoodHotel.svg";
import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../../providers/ToastyProvider/ToasyProvider";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Header = () => {
  const navigate = useNavigate();

  const { toastSucesso } = useContext(ToastContext);
  const [logado, setLogado] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { logOut } = useContext(AuthContext);

  function logout() {
    logOut();
    navigate("/login");
    toastSucesso("Sentiremos a sua falta");
  }

  function goDashboard() {
    navigate("/dashboard");
  }

  function checkLogged() {
    const tokenStored = localStorage.getItem("softHotel:token");
    if (tokenStored) {
      setLogado(true);
    } else {
      setLogado(false);
    }
  }

  useEffect(() => {
    checkLogged();
  }, []);

  return (
    <HeaderCotainer>
      <header>
        <section className="container-header">
          <img src={logoGoodHotel} alt="logo" />
          <div className="container_navBar">
            <motion.button
              className="navbar__title"
              whileHover={{ scale: 1.3, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/home">Home</Link>
            </motion.button>

            <motion.button
              className="navbar__title"
              whileHover={{ scale: 1.3, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/contatos">Contatos</Link>
            </motion.button>
            <motion.button
              className="navbar__title"
              whileHover={{ scale: 1.3, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/about">Sobre</Link>
            </motion.button>
            {logado ? (
              <div className="user__box">
                <motion.button
                  className="navbar__title"
                  whileHover={{ scale: 1.3, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                >
                  Usuario
                </motion.button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      goDashboard();
                      return handleClose;
                    }}
                  >
                    Dashboard
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Configurações</MenuItem>
                  <MenuItem
                    onClick={() => {
                      logout();
                      handleClose();
                    }}
                  >
                    Sair
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <motion.button
                className="navbar__title"
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/login">Entrar</Link>
              </motion.button>
            )}
          </div>
        </section>
      </header>
    </HeaderCotainer>
  );
};

export default Header;
