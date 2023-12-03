import { CartButton } from '../../atom/CartButton';
import { SearchBar } from '../../atom/SearchBar';
import style from "./styles.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className="container">
       <SearchBar />
       <CartButton />
      </div>
    </div>
  )
}
