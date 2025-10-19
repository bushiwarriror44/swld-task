import { gsap } from 'gsap';

export interface AboutAnimationElements {
	section: HTMLElement | null;
	inner: HTMLDivElement | null;
	bgImage: HTMLImageElement | null;
	content: HTMLDivElement | null;
	heading: HTMLHeadingElement | null;
	description: HTMLParagraphElement | null;
	downloadBtn: HTMLAnchorElement | null;
}

export const initAboutAnimations = (elements: AboutAnimationElements) => {
	const { section, inner, bgImage, content, heading, description, downloadBtn } = elements;

	if (!section || !inner || !bgImage || !content || !heading || !description || !downloadBtn) {
		console.warn('Не все элементы для анимации About найдены');
		return;
	}

	const tl = gsap.timeline({ delay: 0.2 });

	animateContentContainer(tl, content);
	animateHeading(tl, heading);
	animateDescription(tl, description);
	animateDownloadButton(tl, downloadBtn);
	setupHoverEffects(downloadBtn);

	return tl;
};

const animateContentContainer = (tl: gsap.core.Timeline, content: HTMLDivElement) => {
	tl.fromTo(
		content,
		{
			y: 60,
			opacity: 0,
			scale: 0.95,
		},
		{
			y: 0,
			opacity: 1,
			scale: 1,
			duration: 0.8,
			ease: 'back.out(1.7)',
		},
		'-=1.0',
	);
};

const animateHeading = (tl: gsap.core.Timeline, heading: HTMLHeadingElement) => {
	tl.fromTo(
		heading,
		{
			x: -40,
			opacity: 0,
			scale: 0.9,
		},
		{
			x: 0,
			opacity: 1,
			scale: 1,
			duration: 0.7,
			ease: 'power2.out',
		},
		'-=0.6',
	);
};

const animateDescription = (tl: gsap.core.Timeline, description: HTMLParagraphElement) => {
	tl.fromTo(
		description,
		{
			x: -30,
			opacity: 0,
		},
		{
			x: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power2.out',
		},
		'-=0.5',
	);
};

const animateDownloadButton = (tl: gsap.core.Timeline, downloadBtn: HTMLAnchorElement) => {
	tl.fromTo(
		downloadBtn,
		{
			y: 30,
			opacity: 0,
			scale: 0.8,
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

	tl.to(
		downloadBtn,
		{
			scale: 1.05,
			duration: 0.3,
			ease: 'power2.inOut',
		},
		'-=0.2',
	).to(
		downloadBtn,
		{
			scale: 1,
			duration: 0.3,
			ease: 'power2.inOut',
		},
		'-=0.1',
	);
};

const setupHoverEffects = (downloadBtn: HTMLAnchorElement) => {
	const handleMouseEnter = () => {
		gsap.to(downloadBtn, {
			scale: 1.1,
			y: -5,
			duration: 0.3,
			ease: 'power2.out',
		});
	};

	const handleMouseLeave = () => {
		gsap.to(downloadBtn, {
			scale: 1,
			y: 0,
			duration: 0.3,
			ease: 'power2.out',
		});
	};

	downloadBtn.addEventListener('mouseenter', handleMouseEnter);
	downloadBtn.addEventListener('mouseleave', handleMouseLeave);

	(downloadBtn as HTMLAnchorElement & { _cleanupFunctions?: (() => void)[] })._cleanupFunctions = [
		() => downloadBtn.removeEventListener('mouseenter', handleMouseEnter),
		() => downloadBtn.removeEventListener('mouseleave', handleMouseLeave),
	];
};

export const cleanupAboutAnimations = (
	timeline?: gsap.core.Timeline,
	downloadBtn?: HTMLAnchorElement,
) => {
	if (timeline) {
		timeline.kill();
	}

	if (downloadBtn) {
		const cleanupFunctions = (
			downloadBtn as HTMLAnchorElement & { _cleanupFunctions?: (() => void)[] }
		)._cleanupFunctions;
		if (cleanupFunctions) {
			cleanupFunctions.forEach((cleanup: () => void) => cleanup());
			delete (downloadBtn as HTMLAnchorElement & { _cleanupFunctions?: (() => void)[] })
				._cleanupFunctions;
		}
	}
};

export const initAboutScrollAnimations = (elements: AboutAnimationElements) => {
	const { section, content, heading, description, downloadBtn } = elements;

	if (!section || !content || !heading || !description || !downloadBtn) return;
};
