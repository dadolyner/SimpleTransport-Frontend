import * as React from 'react'
import Car from '../Car/Car'
import { Background, BigParentContainer, CarsFiltersContainer, CarsListContainer } from '../cars.styled'
import CarsFilters from '../CarFilters/carfilters'
import Navigation from '../../Navigation/navigation'
import Footer from '../../Footer/footer'
import axios from '../../../api/axios'
import { CarAvatar } from '../../../images/ImageExporter'
import BackToTop from '../../BackToTop/backtotop'
import Loading from '../../Loading/loading'

const CarsContainer: React.FC = () => {
    const [cars, setCars] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    const RetrieveCars = async () => {
        try {
            setIsLoading(true)
            const carsResponse = await axios.get('/vehicle')
            setCars(carsResponse.data)
            setIsLoading(false)
        } catch (error) { console.log(error.response.data.message) }
    }

    React.useEffect(() => { RetrieveCars() }, [])

	return (
		<>
            <Loading isLoading={isLoading}/>

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
                                id={car.vehicle.id}
                                type={'rent'}
								image={car.vehicle.image ? car.vehicle.image : CarAvatar} 
								name={car.vehicle.brand + ' ' + car.vehicle.model}
								seats={car.vehicle.seats} 
								shifter={car.vehicle.shifter} 
								horsepower={car.vehicle.horsepower} 
								torque={car.vehicle.torque} 
								speed={car.vehicle.acceleration} 
								fuel={car.vehicle.fuel} 
								location={car.user.place + ', ' + car.user.country} 
								price={car.vehicle.price} 
								duration={car.vehicle.rent_duration}
                                licence_plate={car.vehicle.licence_plate}
                                vin={car.vin}
                                year={car.vehicle.year}
							/>;
						})}
					</CarsListContainer>
				</BigParentContainer>

                <BackToTop />

				<Footer />
			</Background>
		</>
	)
}

export default CarsContainer
