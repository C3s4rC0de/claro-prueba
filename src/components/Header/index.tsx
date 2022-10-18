import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

type Props = {
  children: any;
};

const Header = ({ children }: Props) => {
  return (
    <div>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo clarovideo" width={213} height={43} />
      </div>
      {children}
    </div>
  );
};

export default Header;
