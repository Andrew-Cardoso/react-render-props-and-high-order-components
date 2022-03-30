import {HighOrderTrackClick} from '../HighOrderTrackClick';
import { NewsProps } from './interface';

const News: React.FC<NewsProps> = ({click}) => {
	console.log('render High Order News');
	return (
		<>
			<h1>High Order News Component</h1>
			<strong>Clicks Count:</strong> <span>{click}</span>
		</>
	);
};

export const HighOrderNews = HighOrderTrackClick(News);
