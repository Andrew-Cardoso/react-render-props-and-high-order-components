import {ProfileProps} from '../News/interface';

export const Profile: React.FC<ProfileProps> = ({click}) => {
	console.log('render Profile');
	return (
		<>
			<h1>Profile Component</h1>
			<strong>Clicks Count:</strong> <span>{click}</span>
		</>
	);
};
