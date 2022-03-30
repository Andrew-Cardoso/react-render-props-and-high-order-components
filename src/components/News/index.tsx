import { NewsProps } from '../Profile/interface';

export const News: React.FC<NewsProps> = ({click}) => {
	console.log('render News');
	return (
		<>
			<h1>News Component</h1>
			<strong>Clicks Count:</strong> <span>{click}</span>
		</>
	);
};
