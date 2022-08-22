import * as React from 'react'
import Car from '../Car/Car'
import { Background, BigParentContainer, CarsFiltersContainer, CarsListContainer } from '../cars.styled'
import CarsFilters from '../CarFilters/carfilters'
import Navigation from '../../Navigation/navigation'
import Footer from '../../Footer/footer'
import axios from '../../../api/axios'
import { CarAvatar } from '../../../images/ImageExporter'

const CarsContainer: React.FC = () => {
    const [cars, setCars] = React.useState([])

    const RetrieveCars = async () => {
        try {
            const carsResponse = await axios.get('/vehicle')
            setCars(carsResponse.data)
        } catch (error) { console.log(error.response.data.message) }
    }

    React.useEffect(() => { RetrieveCars() }, [])

	return (
		<>
			<Background>
				<Navigation />

				<BigParentContainer>
					<CarsFiltersContainer>
						<CarsFilters />
					</CarsFiltersContainer>

					<CarsListContainer>
						{cars.map((car) => {
							return <Car 
								key={car.vehicle.id}
								avalible={true} 
								image={car.vehicle.image ? car.vehicle.image : CarAvatar} 
								name={car.vehicle.brand + ' ' + car.vehicle.model}
								seats={car.vehicle.seats} 
								shifter={car.vehicle.shifter} 
								horsepower={car.vehicle.horsepower} 
								torque={car.vehicle.torque} 
								speed={car.vehicle.acceleration} 
								fuel={car.vehicle.fuel} 
								location={car.vehicle.country} 
								price={car.vehicle.price} 
								duration={car.vehicle.rent_duration} 
							/>;
						})}
					</CarsListContainer>
				</BigParentContainer>

				<Footer />
			</Background>
		</>
	)
}

export default CarsContainer
