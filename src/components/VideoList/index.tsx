import { IVideo } from "../../pages/types";
import * as S from "./styles";

export type VideoListProps = {
	list: IVideo[];
};

const VideoList = ({ list }: VideoListProps) => {
	const imageURL = "https://i3.ytimg.com/vi/";

	return (
		<S.VideoList>
			{list.map((video, index) => (
				<S.VideoItem
					key={index}
					background={`url(${imageURL}${video.key}/maxresdefault.jpg)`}
				></S.VideoItem>
			))}
		</S.VideoList>
	);
};

export default VideoList;
