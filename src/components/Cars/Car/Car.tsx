import * as React from 'react';
import { Container, CarImageInfo, Image, CarSpecsInfo, CarPriceInfo, Header, Button, GridFullRow, CarSpecs, CarPrice, Icon, SingleRow, DeleteButton } from '../cars.styled';
import { Images } from './icons/icons';
import Toast from '../../Toast/toast';
import Popup from '../../Popups/popup';
import axios from '../../../api/axios';
import Seats from '../../../helpers/Seats'
import Duration from '../../../helpers/Duration'

type carInfo = {
	key: string;
    id: string;
    type: 'rent' | 'edit';
	image: string;
	name: string;
	seats: number;
	shifter: string;
	horsepower: number;
	torque: number;
	speed: number;
	fuel: string;
	location: string;
	price: number;
	duration: number;
};

const Car: React.FC<carInfo> =  (props: carInfo) => {
	const [toastSuccess, setToastSuccess] = React.useState(false);
	const [toastSuccessMessage, setToastSuccessMessage] = React.useState('');
	const [toastError, setToastError] = React.useState(false);
	const [toastErrorMessage, setToastErrorMessage] = React.useState('');
    const [popupVisible, setPopupVisible] = React.useState(false);

	const { id, type, image, name, seats, shifter, horsepower, torque, speed, fuel, location, price, duration } = props;
    const RentACar = async(values: { rent_start: string, rent_end: string }) => {
        try {       
            const accessToken = localStorage.getItem('simpletransport_accessToken');
            const rentalData = { rent_start: values.rent_start, rent_end: values.rent_end, vehicleId: id }

            await axios.post('/rental', rentalData, { headers: { Authorization: `Bearer ${accessToken}` } }) 

            setToastSuccessMessage(`Car ${name} successfully rented!`);
            setToastSuccess(true);
            setTimeout(() => { setToastSuccess(false); }, 5100);
            
            setPopupVisible(false);
        } 
        catch(error) { 
            if (error.response.status === 400) {
                setToastErrorMessage('Please fill all fields!');
                setToastError(true);
            } else {
                setToastErrorMessage(error.response.data.message);
                setToastError(true);
            }
            setTimeout(() => { setToastError(false) }, 5100);
        }
        
    }

	return (
		<>
			{ toastSuccess && <Toast type={'success'} message={toastSuccessMessage} /> }
			{ toastError && <Toast type={'error'} message={toastErrorMessage} /> }
            
            { popupVisible && <Popup
                key={name + 'RentPopup'}
                active={ popupVisible }
                title={'Rent ' + name}
                size={600}
                theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }}
                labelAligment={'center'}
                topClose={() => setPopupVisible(false)}
                inputs={[
                    { type: 'datetime-local', label: 'Rent start', name: 'rent_start' },
                    { type: 'datetime-local', label: 'Rent end', name: 'rent_end' }
                ]}
                bottomButtons={[
                    { 
                        name: 'confirm', 
                        text: 'Confirm', 
                        color: '#fff', 
                        colorHover:'#de8667', 
                        background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', 
                        backgroundHover: '#fff', 
                        onClick: () => {} 
                    },
                ]}
                RetrieveValues={(values) => { RentACar(values) }}
            />}

			<Container>
				<CarImageInfo>
					<Image src={image} alt='' />
				</CarImageInfo>

				<CarSpecsInfo className='CarSpecsInfo'>
					<GridFullRow><Header>{name}</Header></GridFullRow>
					<SingleRow title="Number of seats"><Icon src={Images.seats} alt="Seats"/><CarSpecs>{Seats(seats)}</CarSpecs></SingleRow>
					<SingleRow title="Shifter type"><Icon src={Images.shifter} alt="Shifter"/><CarSpecs>{shifter}</CarSpecs></SingleRow>
					<SingleRow title="Horsepower"><Icon src={Images.engine} alt="Engine"/><CarSpecs>{horsepower} Hp</CarSpecs></SingleRow>
					<SingleRow title="Torque"><Icon src={Images.torque} alt="Torque"/><CarSpecs>{torque} Nm</CarSpecs></SingleRow>
					<SingleRow title="Time from 0 - 100 km/h"><Icon src={Images.speed} alt="Speed"/><CarSpecs>{speed} sec</CarSpecs></SingleRow>
					<SingleRow title="Fuel type"><Icon src={Images.fuel} alt="Fuel"/><CarSpecs>{fuel}</CarSpecs></SingleRow>
					<SingleRow title="Pickup location"><Icon src={Images.location} alt="Location" /><CarSpecs>{location}</CarSpecs></SingleRow>
				</CarSpecsInfo>

				<CarPriceInfo className='CarPriceInfo'>
					<div>{Duration(duration)}</div>
					<CarPrice>{price} €</CarPrice>
                    { type === 'rent' ? (
                        <Button onClick={() => { setPopupVisible(true) }}>Rent</Button>	
                    ) : (
                        <>
                            <Button onClick={() => { setPopupVisible(true) }}>Edit</Button>
                            <DeleteButton onClick={() => { setPopupVisible(true) }}>Delete</DeleteButton>
                        </>
                    )}
				</CarPriceInfo>
			</Container>
		</>
	);
};

export default Car;
