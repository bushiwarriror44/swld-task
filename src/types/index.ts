

export interface QuantVPNProps {
	className?: string;
	children?: React.ReactNode;
}




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


export interface ImageProps {
	src: string;
	alt: string;
	className?: string;
	itemProp?: string;
}


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
