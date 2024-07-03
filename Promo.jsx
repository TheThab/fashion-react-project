import './promo.css'
import promoImg from './../../img/images/header-img.jpg';

const Promo = () => {
    return (
		<section className="promo">
			<div className="container">
				<div className="promo__content">
					<div className="promo__text">
						<div className="promo__title">
							<span class="highlight">
								<span>ВРЕМЯ</span>
							</span>
							ОТКРЫТЬ
							<span class="highlight highlight--yellow">
								<span>УНИКАЛЬНЫЙ</span>
							</span>
							СТИЛЬ.
						</div>
						<div className="promo__desc">
							Влияй и совершай инновации в моде!
						</div>
						<div className="promo__btn-wrapper">
							<a href="#!" className="promo__btn">
								Заказать сейчас
							</a>
						</div>
					</div>
					<div className="promo__img">
						<img src={promoImg} alt="Promo" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Promo;