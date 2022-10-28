import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { ButtonContainer } from "./style";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ToastContext } from "../../providers/ToastyProvider/ToasyProvider";

import Menu from "@mui/material/Menu";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const ButtonMenu = () => {
  const navigate = useNavigate();
  const { logOut } = React.useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };

  const { toastSucesso } = React.useContext(ToastContext);
  const [logado, setLogado] = React.useState<boolean>(false);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  function logout() {
    logOut();
    navigate("/login");
    toastSucesso("Sentiremos a sua falta");
  }

  function goContatacs() {
    navigate("/contatos");
  }

  function goHome() {
    navigate("/home");
  }

  function goLogin() {
    navigate("/login");
  }
  function goAbout() {
    navigate("/about");
  }
  function goDashBoard() {
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

  function handleToggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  function handleClose(event: Event | React.SyntheticEvent) {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    checkLogged();
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <ButtonContainer>
      {" "}
      <Stack direction="row" spacing={2}>
        <div>
          <Button
            className="buttonMenu"
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <div className="icone__box">
              <AiOutlineMenu size={16} />
            </div>
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        onClick={() => {
                          goHome();
                          return handleClose;
                        }}
                      >
                        Home
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          goContatacs();
                          return handleClose;
                        }}
                      >
                        Contatos
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          goAbout();
                          return handleClose;
                        }}
                      >
                        Sobre
                      </MenuItem>
                      {logado ? (
                        <MenuItem>
                          <div>
                            <Button
                              id="basic-button"
                              className="userBtn"
                              aria-controls={open2 ? "basic-menu" : undefined}
                              aria-haspopup="true"
                              aria-expanded={open2 ? "true" : undefined}
                              onClick={handleClick}
                            >
                              usuario
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={open2}
                              onClose={handleClose2}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem
                                onClick={() => {
                                  goDashBoard();
                                  return handleClose2;
                                }}
                              >
                                Dashboard
                              </MenuItem>
                              <MenuItem onClick={handleClose2}>
                                Configurações
                              </MenuItem>
                              <MenuItem
                                onClick={() => {
                                  logout();
                                  return handleClose2;
                                }}
                              >
                                Sair
                              </MenuItem>
                            </Menu>
                          </div>
                        </MenuItem>
                      ) : (
                        <MenuItem
                          onClick={() => {
                            goLogin();
                            return handleClose;
                          }}
                        >
                          Entrar
                        </MenuItem>
                      )}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </ButtonContainer>
  );
};

export default ButtonMenu;
