import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

type Props = {
  children?: any;
};

const Header = ({ children }: Props) => {
  return (
    <div>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="logo clarovideo" width={213} height={43} />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Header;
