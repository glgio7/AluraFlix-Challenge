export interface IVideo {
	key: string;
	title: string;
	category: string;
	description: string;
}

export interface ICurrentVideo extends IVideo {
	color: string;
}

export interface ICategory {
	title: string;
	color: string;
	subtitle: string;
}
