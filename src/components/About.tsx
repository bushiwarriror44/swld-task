import React, { useEffect, useRef } from 'react';

import bg from '../assets/img/about/content-img.png';

import { initAboutAnimations, cleanupAboutAnimations } from '../animations/aboutAnimations';
import type { AboutAnimationElements } from '../animations/aboutAnimations';
import { useLinksStore } from '../store/linksStore';
const About: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);
	const bgImageRef = useRef<HTMLImageElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const downloadBtnRef = useRef<HTMLAnchorElement>(null);

	const { links } = useLinksStore();

	useEffect(() => {
		const elements: AboutAnimationElements = {
			section: sectionRef.current,
			inner: innerRef.current,
			bgImage: bgImageRef.current,
			content: contentRef.current,
			heading: headingRef.current,
			description: descriptionRef.current,
			downloadBtn: downloadBtnRef.current,
		};

		const timeline = initAboutAnimations(elements);

		return () => {
			if (timeline) {
				cleanupAboutAnimations(timeline, elements.downloadBtn || undefined);
			}
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="about"
			itemScope
			itemType="https://schema.org/AboutPage"
			aria-labelledby="about-heading">
			<div
				ref={innerRef}
				className="about__inner"
				role="region"
				aria-label="Информация о Quant VPN">
				<img
					ref={bgImageRef}
					className="about__bg"
					src={bg}
					alt="Quant VPN Content Image of World"
					itemProp="image"
					loading="lazy"
				/>
				<div
					ref={contentRef}
					className="about__content"
					itemProp="mainEntity"
					itemScope
					itemType="https://schema.org/SoftwareApplication">
					<h2
						ref={headingRef}
						className="about__content-heading"
						id="about-heading"
						itemProp="name">
						Почему Quant VPN?
					</h2>
					<p ref={descriptionRef} className="about__content-desc" itemProp="description">
						Для тех, кто не приемлет компромиссов. Защитите себя и своих близких уже сегодня.
						Скачайте Quant VPN и узнайте, что значит жить в цифровом мире без страха
					</p>
					<a
						ref={downloadBtnRef}
						className="about__content-download"
						href={links.download}
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
