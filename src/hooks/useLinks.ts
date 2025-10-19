// Примеры использования Zustand store для управления ссылками

import { useLinksStore, type LinksStore } from '../store/linksStore';

// Пример 1: Получение всех ссылок
export const useAllLinks = () => {
	return useLinksStore((state: LinksStore) => state.links);
};

// Пример 2: Получение конкретной ссылки
export const useHomeLink = () => {
	return useLinksStore((state: LinksStore) => state.links.home);
};

// Пример 3: Получение ссылки на скачивание
export const useDownloadLink = () => {
	return useLinksStore((state: LinksStore) => state.links.download);
};

// Пример 4: Хук для обновления ссылок
export const useLinkUpdater = () => {
	const { updateLink, updateMultipleLinks, resetLinks } = useLinksStore();

	return {
		updateLink,
		updateMultipleLinks,
		resetLinks,
	};
};

// Пример 5: Хук для работы с конкретными ссылками
export const useNavigationLinks = () => {
	const { links, updateLink } = useLinksStore();

	const setHomeLink = (url: string) => updateLink('home', url);
	const setDownloadLink = (url: string) => updateLink('download', url);
	const setSupportLink = (url: string) => updateLink('support', url);

	return {
		home: links.home,
		download: links.download,
		support: links.support,
		setHomeLink,
		setDownloadLink,
		setSupportLink,
	};
};

// Пример 6: Хук для программного управления ссылками
export const useLinkManager = () => {
	const { links, updateMultipleLinks, resetLinks } = useLinksStore();

	const setProductionLinks = () => {
		updateMultipleLinks({
			home: 'https://quantvpn.com',
			download: 'https://quantvpn.com/download',
			support: 'https://quantvpn.com/support',
			features: 'https://quantvpn.com/features',
			about: 'https://quantvpn.com/about',
		});
	};

	const setDevelopmentLinks = () => {
		updateMultipleLinks({
			home: '/',
			download: '/download',
			support: '/support',
			features: '/features',
			about: '/about',
		});
	};

	const setStagingLinks = () => {
		updateMultipleLinks({
			home: 'https://staging.quantvpn.com',
			download: 'https://staging.quantvpn.com/download',
			support: 'https://staging.quantvpn.com/support',
			features: 'https://staging.quantvpn.com/features',
			about: 'https://staging.quantvpn.com/about',
		});
	};

	return {
		links,
		setProductionLinks,
		setDevelopmentLinks,
		setStagingLinks,
		resetLinks,
	};
};
