import './App.css';
import { Profile } from './components/Profile';
import { News } from './components/News';
import { TrackClick } from './components/TrackClick';
import { HighOrderProfile } from './high-order-components/HighOrderProfile';
import { HighOrderNews } from './high-order-components/HighOrderNews';

const App = () => {
	return (
		<>
    <h1>Render Props</h1>
    <TrackClick renderProps={(click) => <Profile click={click} />} />
    <TrackClick renderProps={(click) => <News click={click} />} />
    <div className='line'></div>
    <h1>High Order Components</h1>
    <HighOrderProfile title='High Order Profile Component' />
    <HighOrderNews />
    </>
	);
};

export default App;
