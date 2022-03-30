import { WrapperComponentProps } from "../HighOrderTrackClick/interface";

export interface ProfileOwnProps {
  title: string;
}

export type ProfileProps = ProfileOwnProps & WrapperComponentProps;