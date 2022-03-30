import {HighOrderTrackClick} from '../HighOrderTrackClick';
import {ProfileOwnProps, ProfileProps} from './interface';

const Profile: React.FC<ProfileProps> = ({click, title}) => {
	console.log('render High Order Profile');
	return (
		<>
			<h1>{title}</h1>
			<strong>Clicks Count:</strong> <span>{click}</span>
		</>
	);
};

export const HighOrderProfile = HighOrderTrackClick<ProfileOwnProps>(Profile);
