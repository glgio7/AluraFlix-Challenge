export interface IVideo {
	key: string;
	title: string;
	category: string;
}

export interface IPlaylists {
	[name: string]: IVideo[];
}
