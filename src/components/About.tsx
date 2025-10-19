import React from 'react';

import bg from '../assets/img/about/content-img.png';
const About: React.FC = () => {
	return (
		<section
			className="about"
			itemScope
			itemType="https://schema.org/AboutPage"
			aria-labelledby="about-heading">
			<div className="about__inner" role="region" aria-label="Информация о Quant VPN">
				<img
					className="about__bg"
					src={bg}
					alt="Quant VPN Content Image of World"
					itemProp="image"
					loading='lazy'
				/>
				<div
					className="about__content"
					itemProp="mainEntity"
					itemScope
					itemType="https://schema.org/SoftwareApplication">
					<h2 className="about__content-heading" id="about-heading" itemProp="name">
						Почему Quant VPN?
					</h2>
					<p className="about__content-desc" itemProp="description">
						Для тех, кто не приемлет компромиссов. Защитите себя и своих близких уже сегодня.
						Скачайте Quant VPN и узнайте, что значит жить в цифровом мире без страха
					</p>
					<a
						className="about__content-download"
						href="."
						itemProp="downloadUrl"
						aria-label="Скачать приложение Quant VPN">
						Скачать Quant VPN
					</a>
					<meta itemProp="applicationCategory" content="SecurityApplication" />
					<meta itemProp="operatingSystem" content="Windows, macOS, iOS, Android" />
				</div>
			</div>
		</section>
	);
};

export default About;
