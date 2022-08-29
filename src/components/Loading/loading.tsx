import * as React from 'react';
import { Container, LoadingCircle } from './loading.styled';

type LoadingProps = {
	  isLoading: boolean
}

const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
	const { isLoading } = props;
    if(isLoading) {
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
