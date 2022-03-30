export interface TrackClickProps {
	renderProps: (click: number) => React.ReactElement
}

export interface TrackClickState {
	click: number;
}
