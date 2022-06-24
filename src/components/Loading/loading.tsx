import * as React from 'react';
import { Container, LoadingCircle } from './loading.styled';

type LoadingProps = {
	  isLoading: boolean
}

const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
	if(props.isLoading) {
		return (
			<>
				<Container className='loadingCircle'>
					<LoadingCircle />
				</Container>
			</>
		);
	} else {
		return null;
	}
};

export default Loading;
