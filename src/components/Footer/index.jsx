import { FooterContainer } from "./style";
import logo from "../../assets/svg-login/footer.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <img className="img-footer" src={logo} alt="" />
    </FooterContainer>
  );
};

export default Footer;
