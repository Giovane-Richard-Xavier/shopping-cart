import { CartButton } from '../../atom/CartButton';
import { Logo } from '../../atom/Logo';
import { SearchBar } from '../../atom/SearchBar';
import style from "./styles.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className="container">
        <Logo />
       <SearchBar />
       <CartButton />
      </div>
    </div>
  )
}
