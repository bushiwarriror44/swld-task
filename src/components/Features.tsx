import React, { useEffect, useRef } from 'react';

import img1 from '../assets/img/features/features-item-1.png';
import img2 from '../assets/img/features/features-item-2.png';
import img3 from '../assets/img/features/features-item-3.png';
import img4 from '../assets/img/features/features-item-4.png';

import {
	initFeaturesAnimations,
	cleanupFeaturesAnimations,
} from '../animations/featuresAnimations';
import type { FeaturesAnimationElements } from '../animations/featuresAnimations';
import { WebPImage } from '../utils/WebPImage';

const Features: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const listRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const elements: FeaturesAnimationElements = {
			section: sectionRef.current,
			heading: headingRef.current,
			list: listRef.current,
			listItems: listRef.current?.querySelectorAll('.features__list-item') || null,
		};

		const timeline = initFeaturesAnimations(elements);

		return () => {
			if (timeline) {
				cleanupFeaturesAnimations(timeline, elements.listItems || undefined);
			}
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="features"
			itemScope
			itemType="https://schema.org/ItemList"
			aria-labelledby="features-heading">
			<h2 ref={headingRef} className="features__heading" id="features-heading" itemProp="name">
				Наши преимущества
			</h2>
			<ul
				ref={listRef}
				className="features__list"
				role="list"
				aria-label="Список преимуществ Quant VPN"
				itemProp="itemListElement">
				<li className="features__list-item" itemScope itemType="https://schema.org/ListItem">
					<meta itemProp="position" content="1" />
					<div className="features__list-item-header">
						<p className="features__list-item-header-para" itemProp="name">
							Только собственные серверы
						</p>
					</div>
					<div className="features__list-item-body">
						<p className="features__list-item-body-para" itemProp="description">
							Мы не доверяем сторонним платформам. Наши 100% частные сервера расположены в
							безопасных центрах обработки данных по всему миру. Полный контроль – это наша гарантия
						</p>
					</div>
					<div className="features__list-item-content">
						<WebPImage
							src={img1}
							alt="Quant VPN features content image"
							className="features__list-item-content-img"
							itemProp="image"
							loading="lazy"
						/>
					</div>
				</li>

				<li className="features__list-item" itemScope itemType="https://schema.org/ListItem">
					<meta itemProp="position" content="2" />
					<div className="features__list-item-header">
						<p className="features__list-item-header-para" itemProp="name">
							Zero-Trace Technology
						</p>
					</div>
					<div className="features__list-item-body">
						<p className="features__list-item-body-para" itemProp="description">
							Мы создали технологию, которая стирает любые следы вашего присутствия в сети. Ваш IP,
							история соединений и данные не оставляют ни малейшего цифрового отпечатка.
							Преимущества, которые вы почувствуете сразу
						</p>
					</div>
					<div className="features__list-item-content">
						<WebPImage
							src={img2}
							alt="Quant VPN features content image"
							className="features__list-item-content-img"
							itemProp="image"
							loading="lazy"
						/>
					</div>
				</li>

				<li className="features__list-item" itemScope itemType="https://schema.org/ListItem">
					<meta itemProp="position" content="3" />
					<div className="features__list-item-header">
						<p className="features__list-item-header-para" itemProp="name">
							Double VPN 2.0
						</p>
					</div>
					<div className="features__list-item-body">
						<p className="features__list-item-body-para" itemProp="description">
							Двойная маршрутизация с адаптивным квантовым шифрованием, автоматически изменяющая
							маршруты и ключи в реальном времени. Каждый байт информации проходит через две
							независимые сети с полной защитой на каждом этапе
						</p>
					</div>
					<div className="features__list-item-content">
						<WebPImage
							src={img3}
							alt="Quant VPN features content image"
							className="features__list-item-content-img"
							itemProp="image"
							loading="lazy"
						/>
					</div>
				</li>

				<li className="features__list-item" itemScope itemType="https://schema.org/ListItem">
					<meta itemProp="position" content="4" />
					<div className="features__list-item-header">
						<p className="features__list-item-header-para" itemProp="name">
							Q-Secure Audit™
						</p>
					</div>
					<div className="features__list-item-body">
						<p className="features__list-item-body-para" itemProp="description">
							Автоматическая система мониторинга и предотвращения угроз, основанная на искусственном
							интеллекте. Любая попытка вмешательства распознаётся за миллисекунды, блокируя
							злоумышленников раньше, чем они осознают, что были обнаружены
						</p>
					</div>
					<div className="features__list-item-content">
						<WebPImage
							src={img4}
							alt="Quant VPN features content image"
							className="features__list-item-content-img"
							itemProp="image"
							loading="lazy"
						/>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default Features;
