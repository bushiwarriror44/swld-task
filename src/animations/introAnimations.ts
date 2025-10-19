import { gsap } from 'gsap';

export interface IntroAnimationElements {
	section: HTMLElement | null;
	items: HTMLDivElement | null;
	bg: HTMLDivElement | null;
	prefItems: HTMLDivElement | null;
	downloadBtn: HTMLAnchorElement | null;
}

export const initIntroAnimations = (elements: IntroAnimationElements) => {
	const { section, items, bg, prefItems, downloadBtn } = elements;

	if (!section || !items || !bg || !prefItems || !downloadBtn) {
		console.warn('Не все элементы для анимации Intro найдены');
		return;
	}

	const tl = gsap.timeline({ delay: 0.5 });

	animateBackgroundImage(tl, bg);
	animateItemImages(tl, items);
	animateTextElements(tl, items);
	animateSvgIcons(tl, prefItems);
	animatePreferenceTexts(tl, prefItems);
	animateTitleAndButton(tl, prefItems, downloadBtn);
	setupButtonHoverEffects(downloadBtn);

	return tl;
};

const animateBackgroundImage = (tl: gsap.core.Timeline, bg: HTMLDivElement) => {
	tl.fromTo(
		bg,
		{
			scale: 0.8,
			opacity: 0,
			rotation: -5,
		},
		{
			scale: 1,
			opacity: 1,
			rotation: 0,
			duration: 1.2,
			ease: 'power2.out',
		},
	);
};

const animateItemImages = (tl: gsap.core.Timeline, items: HTMLDivElement) => {
	const itemImages = items.querySelectorAll('.intro__items-item-img');
	tl.fromTo(
		itemImages,
		{
			y: 50,
			opacity: 0,
			scale: 0.9,
		},
		{
			y: 0,
			opacity: 1,
			scale: 1,
			duration: 0.8,
			stagger: 0.3,
			ease: 'back.out(1.7)',
		},
		'-=0.8',
	);
};

const animateTextElements = (tl: gsap.core.Timeline, items: HTMLDivElement) => {
	const textElements = items.querySelectorAll('.intro__items-item-para');
	tl.fromTo(
		textElements,
		{
			y: 30,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 0.6,
			stagger: 0.2,
			ease: 'power2.out',
		},
		'-=0.6',
	);
};

const animateSvgIcons = (tl: gsap.core.Timeline, prefItems: HTMLDivElement) => {
	const svgIcons = prefItems.querySelectorAll('svg');
	tl.fromTo(
		svgIcons,
		{
			rotation: -180,
			scale: 0,
			opacity: 0,
		},
		{
			rotation: 0,
			scale: 1,
			opacity: 1,
			duration: 0.8,
			stagger: 0.2,
			ease: 'back.out(1.7)',
		},
		'-=0.4',
	);
};

const animatePreferenceTexts = (tl: gsap.core.Timeline, prefItems: HTMLDivElement) => {
	const prefTexts = prefItems.querySelectorAll(
		'.intro__pref-item-header-para, .intro__pref-item-body-para',
	);
	tl.fromTo(
		prefTexts,
		{
			x: -30,
			opacity: 0,
		},
		{
			x: 0,
			opacity: 1,
			duration: 0.6,
			stagger: 0.1,
			ease: 'power2.out',
		},
		'-=0.6',
	);
};

const animateTitleAndButton = (
	tl: gsap.core.Timeline,
	prefItems: HTMLDivElement,
	downloadBtn: HTMLAnchorElement,
) => {
	const title = prefItems.querySelector('.intro__pref-item-caption');

	if (title) {
		tl.fromTo(
			title,
			{
				y: 40,
				opacity: 0,
				scale: 0.9,
			},
			{
				y: 0,
				opacity: 1,
				scale: 1,
				duration: 0.8,
				ease: 'back.out(1.7)',
			},
			'-=0.4',
		);
	}

	tl.fromTo(
		downloadBtn,
		{
			y: 20,
			opacity: 0,
			scale: 0.95,
		},
		{
			y: 0,
			opacity: 1,
			scale: 1,
			duration: 0.6,
			ease: 'power2.out',
		},
		'-=0.6',
	);
};

const setupButtonHoverEffects = (downloadBtn: HTMLAnchorElement) => {
	const handleMouseEnter = () => {
		gsap.to(downloadBtn, {
			scale: 1.05,
			duration: 0.3,
			ease: 'power2.out',
		});
	};

	const handleMouseLeave = () => {
		gsap.to(downloadBtn, {
			scale: 1,
			duration: 0.3,
			ease: 'power2.out',
		});
	};

	downloadBtn.addEventListener('mouseenter', handleMouseEnter);
	downloadBtn.addEventListener('mouseleave', handleMouseLeave);

	return () => {
		downloadBtn.removeEventListener('mouseenter', handleMouseEnter);
		downloadBtn.removeEventListener('mouseleave', handleMouseLeave);
	};
};

export const cleanupIntroAnimations = (timeline?: gsap.core.Timeline) => {
	if (timeline) {
		timeline.kill();
	}
};
