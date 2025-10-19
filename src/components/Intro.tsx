import React, { useEffect, useRef } from 'react';

import img1 from '../assets/img/intro/item-img-1.png';
import img2 from '../assets/img/intro/item-img-2.png';
import img1Mobile from '../assets/img/intro/item-img-1-mobile.png';

import bg from '../assets/img/intro/main-bg.png';
import bgMobile from '../assets/img/intro/main-bg-mobile.png';

import { initIntroAnimations, cleanupIntroAnimations } from '../animations/introAnimations';
import type { IntroAnimationElements } from '../animations/introAnimations';

const Intro: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const itemsRef = useRef<HTMLDivElement>(null);
	const bgRef = useRef<HTMLDivElement>(null);
	const prefItemsRef = useRef<HTMLDivElement>(null);
	const downloadBtnRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		const elements: IntroAnimationElements = {
			section: sectionRef.current,
			items: itemsRef.current,
			bg: bgRef.current,
			prefItems: prefItemsRef.current,
			downloadBtn: downloadBtnRef.current,
		};

		const timeline = initIntroAnimations(elements);

		return () => {
			if (timeline) {
				cleanupIntroAnimations(timeline);
			}
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="intro"
			aria-label="Введение о Quant VPN и преимущества"
			itemScope
			itemType="https://schema.org/Product">
			<meta itemProp="name" content="Quant VPN" />
			<meta itemProp="category" content="VPN Service" />
			<meta itemProp="brand" content="Quant" />

			<div
				ref={itemsRef}
				className="intro__items"
				role="group"
				aria-label="Описание преимуществ приватности и скорости">
				<div className="intro__items-item" itemProp="description">
					<figure>
						<picture>
							<source srcSet={img1} media="(min-width: 450px)" />
							<source srcSet={img1Mobile} media="(max-width: 450px)" />
							<img
								className="intro__items-item-img"
								src={img1}
								alt="Изображение, символизирующее приватность"
								itemProp="image"
							/>
						</picture>

						<figcaption className="intro__items-item-para">
							В мире, где приватность становится роскошью, Quant VPN меняет правила игры
						</figcaption>
					</figure>
				</div>

				<div ref={bgRef} className="intro__items-item--bg" aria-hidden="true">
					<picture>
						<source srcSet={bg} media="(min-width: 450px)" />
						<source srcSet={bgMobile} media="(max-width: 450px)" />
						<img loading="lazy" src={bg} alt="Фоновое изображение в виде щита" />
					</picture>
				</div>

				<div className="intro__items-item" itemProp="description">
					<figure>
						<img
							className="intro__items-item-img"
							src={img2}
							alt="Изображение стены, символизирующее защиту"
							itemProp="image"
						/>
						<figcaption className="intro__items-item-para">
							Ощути свободу, не расплачиваясь скоростью
						</figcaption>
					</figure>
				</div>
			</div>

			<div
				ref={prefItemsRef}
				className="intro__pref"
				role="list"
				aria-label="Основные преимущества Quant VPN">
				<div
					className="intro__pref-item"
					role="listitem"
					itemScope
					itemType="https://schema.org/Offer"
					aria-label="Преимущество: скорость будущего">
					<div className="intro__pref-item-header">
						<svg
							width="70"
							height="70"
							viewBox="0 0 70 70"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true">
							<rect width="70" height="70" rx="35" fill="#AECCE9" />
							<path
								d="M31.4976 38.8642C29.3849 38.5629 27.2929 38.1308 25.2337 37.5703C23.6807 37.141 23.1407 35.3566 24.1092 34.0677C26.4454 30.9584 30.7186 25.4844 35.3859 20.5421C36.6773 19.1769 38.8575 20.1647 38.7149 22.0389C38.4198 25.876 38.0458 28.8126 37.7867 31.3978C40.1235 31.7348 42.4255 32.2801 44.6652 33.0271C46.1318 33.521 46.5905 35.2409 45.6631 36.4785C43.3529 39.5577 39.0143 45.134 34.2673 50.1593C32.9776 51.5262 30.7731 50.5367 30.8611 48.6592C31.0498 44.6543 31.2368 41.4679 31.4976 38.8642Z"
								stroke="white"
								strokeWidth="4"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p className="intro__pref-item-header-para" itemProp="name">
							Скорость будущего
						</p>
					</div>
					<div className="intro__pref-item-body">
						<p className="intro__pref-item-body-para" itemProp="description">
							Квантовые алгоритмы оптимизируют передачу данных так, что вы получаете максимальную
							производительность даже при высоких нагрузках
						</p>
					</div>
				</div>

				<div
					className="intro__pref-item--transparent"
					role="complementary"
					aria-label="Блок с кнопкой загрузки Quant VPN"
					itemScope
					itemType="https://schema.org/SoftwareApplication">
					<meta itemProp="operatingSystem" content="Windows, macOS, iOS, Android" />
					<meta itemProp="applicationCategory" content="SecurityApplication" />
					<a
						ref={downloadBtnRef}
						className="intro__pref-item-download"
						href="."
						itemProp="downloadUrl"
						aria-label="Скачать Quant VPN">
						Скачать Quant VPN
					</a>
					<h1 className="intro__pref-item-caption" itemProp="headline">
						Надежно и быстро
					</h1>
				</div>

				<div
					className="intro__pref-item"
					role="listitem"
					itemScope
					itemType="https://schema.org/Offer"
					aria-label="Преимущество: кибер иммунитет">
					<div className="intro__pref-item-header">
						<svg
							width="70"
							height="70"
							viewBox="0 0 70 70"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true">
							<rect width="70" height="70" rx="35" fill="#AECCE9" />
							<path
								d="M31.4976 38.8642C29.3849 38.5629 27.2929 38.1308 25.2337 37.5703C23.6807 37.141 23.1407 35.3566 24.1092 34.0677C26.4454 30.9584 30.7186 25.4844 35.3859 20.5421C36.6773 19.1769 38.8575 20.1647 38.7149 22.0389C38.4198 25.876 38.0458 28.8126 37.7867 31.3978C40.1235 31.7348 42.4255 32.2801 44.6652 33.0271C46.1318 33.521 46.5905 35.2409 45.6631 36.4785C43.3529 39.5577 39.0143 45.134 34.2673 50.1593C32.9776 51.5262 30.7731 50.5367 30.8611 48.6592C31.0498 44.6543 31.2368 41.4679 31.4976 38.8642Z"
								stroke="white"
								strokeWidth="4"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p className="intro__pref-item-header-para" itemProp="name">
							Кибер иммунитет
						</p>
					</div>
					<div className="intro__pref-item-body">
						<p className="intro__pref-item-body-para" itemProp="description">
							Даже суперкомпьютеры не смогут декодировать вашу информацию
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
