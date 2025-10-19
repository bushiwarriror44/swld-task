import { create } from 'zustand';

// Интерфейс для ссылок
export interface LinkConfig {
	home: string;
	download: string;
	support: string;
	features: string;
	about: string;
}

// Интерфейс для store
export interface LinksStore {
	links: LinkConfig;
	updateLink: (key: keyof LinkConfig, url: string) => void;
	updateMultipleLinks: (updates: Partial<LinkConfig>) => void;
	resetLinks: () => void;
}

// Начальные значения ссылок
const defaultLinks: LinkConfig = {
	home: '/',
	download: '/download',
	support: '/support',
	features: '/features',
	about: '/about',
};

// Создание Zustand store
export const useLinksStore = create<LinksStore>((set) => ({
	links: defaultLinks,

	// Обновление одной ссылки
	updateLink: (key, url) =>
		set((state) => ({
			links: {
				...state.links,
				[key]: url,
			},
		})),

	// Обновление нескольких ссылок одновременно
	updateMultipleLinks: (updates) =>
		set((state) => ({
			links: {
				...state.links,
				...updates,
			},
		})),

	// Сброс всех ссылок к значениям по умолчанию
	resetLinks: () =>
		set(() => ({
			links: defaultLinks,
		})),
}));

// Селекторы для удобного использования
export const selectLink = (key: keyof LinkConfig) => (state: LinksStore) => state.links[key];
export const selectAllLinks = (state: LinksStore) => state.links;
