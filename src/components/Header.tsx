import React from 'react';

const Header: React.FC = () => {
	return (
		<header
			className="header"
			itemScope
			itemType="https://schema.org/WPHeader"
			aria-label="Основная шапка сайта Quant VPN">
			<a href="." itemProp="url" aria-label="На главную Quant VPN">
				<img className="header__logo" src="." alt="Логотип Quant VPN" itemProp="logo" />
			</a>

			<a
				className="header__button"
				href="."
				role="button"
				aria-label="Задать вопрос службе поддержки Quant VPN"
				itemProp="contactPoint"
				itemScope
				itemType="https://schema.org/ContactPoint">
				<meta itemProp="contactType" content="Customer Support" />
				<span className="header__button-caption" itemProp="name">
					Задать вопрос
				</span>
				<svg
					width="38"
					height="38"
					viewBox="0 0 38 38"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false">
					<circle cx="19" cy="19" r="19" fill="white" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M24.3419 12.0979C25.2079 11.7244 26.1363 12.4744 25.9834 13.4239L24.1773 24.6393C24.0031 25.7207 22.8435 26.3412 21.8749 25.8023C21.0643 25.3514 19.8617 24.6573 18.7779 23.932C18.2367 23.5698 16.5795 22.4083 16.7832 21.5816C16.9574 20.8747 19.7433 18.2186 21.3353 16.639C21.9606 16.0185 21.6758 15.6601 20.9373 16.2314C19.1052 17.6486 16.1639 19.8032 15.1912 20.4096C14.333 20.9446 13.8849 21.0359 13.3504 20.9446C12.3744 20.7781 11.4696 20.5201 10.7308 20.2065C9.73234 19.7825 9.78097 18.3772 10.7301 17.9679L24.3419 12.0979Z"
						fill="#183B8B"
					/>
				</svg>
			</a>
		</header>
	);
};

export default Header;
