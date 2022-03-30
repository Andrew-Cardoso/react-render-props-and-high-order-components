import React from 'react';
import {TrackClickProps, TrackClickState} from './interface';

export class TrackClick extends React.PureComponent<TrackClickProps, TrackClickState> {
	constructor(props: TrackClickProps) {
		super(props);
		this.state = {
			click: 0,
		};
	}

	handleClick() {
		this.setState({
			click: this.state.click + 1,
		});
	}

	render(): React.ReactNode {
		const {renderProps} = this.props;
		console.log('render Track Click');
		return (
			<div
				onClick={() => this.handleClick()}
				style={{
					background: '#222',
					padding: '12px 20px',
					cursor: 'pointer',
					userSelect: 'none',
				}}
			>
				{renderProps(this.state.click)}
			</div>
		);
	}
}
