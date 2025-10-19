import { gsap } from 'gsap';

export interface FeaturesAnimationElements {
	section: HTMLElement | null;
	heading: HTMLHeadingElement | null;
	list: HTMLUListElement | null;
	listItems: NodeListOf<HTMLLIElement> | null;
}

export const initFeaturesAnimations = (elements: FeaturesAnimationElements) => {
	const { section, heading, list, listItems } = elements;

	if (!section || !heading || !list || !listItems) {
		console.warn('Не все элементы для анимации Features найдены');
		return;
	}

	const tl = gsap.timeline({ delay: 0.3 });

	animateHeading(tl, heading);
	animateListItems(tl, listItems);
	setupListItemsHoverEffects(listItems);

	return tl;
};

const animateHeading = (tl: gsap.core.Timeline, heading: HTMLHeadingElement) => {
	tl.fromTo(
		heading,
		{
			y: -50,
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
	);
};

const animateListItems = (tl: gsap.core.Timeline, listItems: NodeListOf<HTMLLIElement>) => {
	tl.fromTo(
		listItems,
		{
			y: 80,
			opacity: 0,
			scale: 0.95,
		},
		{
			y: 0,
			opacity: 1,
			scale: 1,
			duration: 0.7,
			stagger: 0.2,
			ease: 'power2.out',
		},
		'-=0.4',
	);

	const headers = Array.from(listItems)
		.map((item) => item.querySelector('.features__list-item-header-para'))
		.filter(Boolean) as HTMLElement[];

	tl.fromTo(
		headers,
		{
			x: -30,
			opacity: 0,
		},
		{
			x: 0,
			opacity: 1,
			duration: 0.6,
			stagger: 0.15,
			ease: 'power2.out',
		},
		'-=0.5',
	);

	const descriptions = Array.from(listItems)
		.map((item) => item.querySelector('.features__list-item-body-para'))
		.filter(Boolean) as HTMLElement[];

	tl.fromTo(
		descriptions,
		{
			x: -20,
			opacity: 0,
		},
		{
			x: 0,
			opacity: 1,
			duration: 0.5,
			stagger: 0.1,
			ease: 'power2.out',
		},
		'-=0.4',
	);

	const images = Array.from(listItems)
		.map((item) => item.querySelector('.features__list-item-content-img'))
		.filter(Boolean) as HTMLElement[];

	tl.fromTo(
		images,
		{
			scale: 0.8,
			opacity: 0,
			rotation: -5,
		},
		{
			scale: 1,
			opacity: 1,
			rotation: 0,
			duration: 0.8,
			stagger: 0.2,
			ease: 'back.out(1.7)',
		},
		'-=0.6',
	);
};

const setupListItemsHoverEffects = (listItems: NodeListOf<HTMLLIElement>) => {
	Array.from(listItems).forEach((item) => {
		const image = item.querySelector('.features__list-item-content-img') as HTMLElement;
		const header = item.querySelector('.features__list-item-header-para') as HTMLElement;

		if (!image || !header) return;

		const handleImageMouseEnter = () => {
			gsap.to(image, {
				scale: 1.05,
				rotation: 2,
				duration: 0.3,
				ease: 'power2.out',
			});
		};

		const handleImageMouseLeave = () => {
			gsap.to(image, {
				scale: 1,
				rotation: 0,
				duration: 0.3,
				ease: 'power2.out',
			});
		};

		const handleHeaderMouseEnter = () => {
			gsap.to(header, {
				color: '#AECCE9',
				duration: 0.2,
				ease: 'power2.out',
			});
		};

		const handleHeaderMouseLeave = () => {
			gsap.to(header, {
				color: '#ffffff',
				duration: 0.2,
				ease: 'power2.out',
			});
		};

		image.addEventListener('mouseenter', handleImageMouseEnter);
		image.addEventListener('mouseleave', handleImageMouseLeave);
		header.addEventListener('mouseenter', handleHeaderMouseEnter);
		header.addEventListener('mouseleave', handleHeaderMouseLeave);

		(item as HTMLLIElement & { _cleanupFunctions?: (() => void)[] })._cleanupFunctions = [
			() => image.removeEventListener('mouseenter', handleImageMouseEnter),
			() => image.removeEventListener('mouseleave', handleImageMouseLeave),
			() => header.removeEventListener('mouseenter', handleHeaderMouseEnter),
			() => header.removeEventListener('mouseleave', handleHeaderMouseLeave),
		];
	});
};

export const cleanupFeaturesAnimations = (
	timeline?: gsap.core.Timeline,
	listItems?: NodeListOf<HTMLLIElement>,
) => {
	if (timeline) {
		timeline.kill();
	}

	if (listItems) {
		Array.from(listItems).forEach((item) => {
			const cleanupFunctions = (item as HTMLLIElement & { _cleanupFunctions?: (() => void)[] })
				._cleanupFunctions;
			if (cleanupFunctions) {
				cleanupFunctions.forEach((cleanup: () => void) => cleanup());
				delete (item as HTMLLIElement & { _cleanupFunctions?: (() => void)[] })._cleanupFunctions;
			}
		});
	}
};

export const initFeaturesScrollAnimations = (elements: FeaturesAnimationElements) => {
	const { section, heading, listItems } = elements;

	if (!section || !heading || !listItems) return;
};
