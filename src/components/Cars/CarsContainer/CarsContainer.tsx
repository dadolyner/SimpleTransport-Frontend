import * as React from 'react';
import Car from '../Car/Car';
import { Background, BigParentContainer, CarsFiltersContainer, CarsListContainer } from '../cars.styled';
import { CarsData } from '../CarsTestData/carsTest';
import CarsFilters from '../CarFilters/carfilters';
import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/footer';

const CarsContainer: React.FC = () => {
	return (
		<>
			<Background>
				<Navigation />

				<BigParentContainer>
					<CarsFiltersContainer>
						<CarsFilters />
					</CarsFiltersContainer>

					<CarsListContainer>
						{CarsData.map((car) => {
							return <Car 
								key={car.name}
								avalible={car.avalible} 
								image={car.image} 
								name={car.name} 
								seats={car.seats} 
								shifter={car.shifter} 
								horsepower={car.horsepower} 
								torque={car.torque} 
								speed={car.speed} 
								fuel={car.fuel} 
								location={car.location} 
								price={car.price} 
								duration={car.duration} 
							/>;
						})}
					</CarsListContainer>
				</BigParentContainer>

				<Footer />
			</Background>
		</>
	);
};

export default CarsContainer;
