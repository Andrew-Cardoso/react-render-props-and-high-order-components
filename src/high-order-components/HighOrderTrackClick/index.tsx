import React from 'react';
import {HighOrderTrackClickProps, HighOrderTrackClickState, WrapperComponentProps} from './interface';

export const HighOrderTrackClick = <T extends unknown>(WrapperComponent: React.FC<WrapperComponentProps & T>) => {
	return class extends React.Component<HighOrderTrackClickProps & T, HighOrderTrackClickState> {
		constructor(props: HighOrderTrackClickProps & T) {
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
			console.log('render High Order Track Click');
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
					<WrapperComponent {...this.props} click={this.state.click} />
				</div>
			);
		}
	};
};
