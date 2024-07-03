import logoImg from './../../img/icons/logo.svg'
import './header.css'


function Header () {
    return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<div className="header__logo">
						<img src={logoImg} alt="Logo" />
                        <span>Fashion</span>
					</div>
					<nav className="header__nav">
                        <ul>
                            <li><a href="#!">Каталог</a></li>
                            <li><a href="#!">Мода</a></li>
                            <li><a href="#!">Избранное</a></li>
                            <li><a href="#!">Лайфстайл</a></li>
                            <li><a href="#!" className="header__nav-btn">Регистрация</a></li>
                        </ul>
                    </nav>
				</div>
			</div>
		</header>
	);
}

export default Header;