// Типы для компонентов Quant VPN

export interface QuantVPNProps {
	className?: string;
	children?: React.ReactNode;
}

export interface HeaderProps extends QuantVPNProps {
	// Дополнительные пропсы для Header, если потребуются
}

export interface IntroProps extends QuantVPNProps {
	// Дополнительные пропсы для Intro, если потребуются
}

export interface FeaturesProps extends QuantVPNProps {
	// Дополнительные пропсы для Features, если потребуются
}

export interface AboutProps extends QuantVPNProps {
	// Дополнительные пропсы для About, если потребуются
}

// Типы для мета-данных Schema.org
export interface SchemaMetadata {
	name?: string;
	description?: string;
	image?: string;
	url?: string;
	category?: string;
	brand?: string;
	operatingSystem?: string;
	applicationCategory?: string;
	downloadUrl?: string;
	contactType?: string;
	position?: number;
}

// Типы для изображений
export interface ImageProps {
	src: string;
	alt: string;
	className?: string;
	itemProp?: string;
}

// Типы для ссылок
export interface LinkProps {
	href: string;
	className?: string;
	ariaLabel?: string;
	itemProp?: string;
	itemScope?: boolean;
	itemType?: string;
	role?: string;
	children: React.ReactNode;
}
