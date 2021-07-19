import { HeaderSection, Logo } from "./HeaderStyle";
import kymaLogo from "img/KymaLogo.png";

const kymaURL = "https://kyma-project.io/";

const Header = () => (
  <>
    <HeaderSection>
      <a href={kymaURL}>
        <Logo src={kymaLogo} alt="Kyma Logo" />
      </a>
    </HeaderSection>
  </>
);

export default Header;
