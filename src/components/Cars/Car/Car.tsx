import * as React from 'react';
import { Container, CarImageInfo, Image, CarSpecsInfo, CarPriceInfo, Header, Button, GridFullRow, CarSpecs, CarPrice, Icon, SingleRow, DeleteButton } from '../cars.styled';
import { Images } from './icons/icons';
import Toast from '../../Toast/toast';
import Popup from '../../Popups/popup';
import axios from '../../../api/axios';
import Seats from '../../../helpers/Seats'
import Duration from '../../../helpers/Duration'
import RefreshUsersData from '../../../helpers/RefreshUserData';

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
    const [popupRentVisible, setRentPopupVisible] = React.useState(false);
    const [popupDeleteVisible, setDeletePopupVisible] = React.useState(false);
    const [popupEditVisible, setEditPopupVisible] = React.useState(false);

	const { id, type, image, name, seats, shifter, horsepower, torque, speed, fuel, location, price, duration } = props;
    const RentACar = async(values: { rent_start: string, rent_end: string }) => {
        try {       
            const accessToken = localStorage.getItem('simpletransport_accessToken');
            const rentalData = { rent_start: values.rent_start, rent_end: values.rent_end, vehicleId: id }

            await axios.post('/rental', rentalData, { headers: { Authorization: `Bearer ${accessToken}` } }) 

            setToastSuccessMessage(`Car ${name} successfully rented!`);
            setToastSuccess(true);
            setTimeout(() => { setToastSuccess(false); }, 5100);
            
            setRentPopupVisible(false);
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

    const DeleteACar = async() => {
        try {
            const accessToken = localStorage.getItem('simpletransport_accessToken');
            await axios.delete(`/vehicle?id=${id}`, { headers: { Authorization: `Bearer ${accessToken}` } }) 

            setToastSuccessMessage(`Car ${name} successfully rented!`);
            setToastSuccess(true);
            setTimeout(() => { setToastSuccess(false); }, 5100);
            
            setDeletePopupVisible(false);
            RefreshUsersData()

        } catch(error) {
            setToastErrorMessage(error.response.data.message);
            setToastError(true);
            setTimeout(() => { setToastError(false) }, 5100);
        }
    }

    const EditACar = async() => {

    }

	return (
		<>
			{ toastSuccess && <Toast type={'success'} message={toastSuccessMessage} /> }
			{ toastError && <Toast type={'error'} message={toastErrorMessage} /> }
            
            {/* RENT POPUP */}
            { popupRentVisible && <Popup
                key={name + 'RentPopup'}
                active={ popupRentVisible }
                title={'Rent ' + name}
                size={600}
                theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }}
                labelAligment={'center'}
                topClose={() => setRentPopupVisible(false)}
                inputs={[
                    { type: 'datetime-local', label: 'Rent start', name: 'rent_start' },
                    { type: 'datetime-local', label: 'Rent end', name: 'rent_end' }
                ]}
                bottomButtons={[ {  name: 'confirm',  text: 'Confirm',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff',  onClick: () => {} } ]}
                RetrieveValues={(values) => { RentACar(values) }}
            />}

            {/* DELETE POPUP */}
            { popupDeleteVisible && <Popup
                key={name + 'DeletePopup'}
                active={ popupDeleteVisible }
                title={'Delete ' + name}
                size={600}
                theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }}
                labelAligment={'center'}
                topClose={() => setDeletePopupVisible(false)}
                inputs={[ { type: 'html', label: '', name: 'confirmHtml', html: '<p style="font-size: 20px; text-align: center;">Are you sure you want to delete this car?</p>' } ]}
                bottomButtons={[ {  name: 'confirm',  text: 'Delete',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff',  onClick: () => { DeleteACar() } } ]}
            />}

            {/* EDIT POPUP */}
            { popupEditVisible && <Popup
                key={name + 'EditPopup'}
                active={ popupEditVisible }
                title={'Edit ' + name}
                size={600}
                theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }}
                labelAligment={'center'}
                topClose={() => setEditPopupVisible(false)}
                inputs={[ 
                    { type: 'number', name: 'seats', label: 'Seats', value: seats },
                    { type: 'text', name: 'shifter', label: 'Shifter', value: shifter },
                    { type: 'number', name: 'horsepower', label: 'Horsepower', value: horsepower },
                    { type: 'number', name: 'torque', label: 'Torque', value: torque },
                    { type: 'number', name: 'acceleration', label: 'Acceleration', value: speed },
                    { type: 'text', name: 'fuel', label: 'Fuel', value: fuel },
                    { type: 'text', name: 'location', label: 'Location', value: location },
                    { type: 'number', name: 'price', label: 'Price', value: price },
                    { type: 'number', name: 'duration', label: 'Duration', value: duration }
                ]}
                bottomButtons={[ {  name: 'confirm',  text: 'Edit',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff',  onClick: () => { EditACar() } } ]}
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
                        <Button onClick={() => { setRentPopupVisible(true) }}>Rent</Button>	
                    ) : (
                        <>
                            <Button onClick={() => { setRentPopupVisible(true) }}>Edit</Button>
                            <DeleteButton onClick={() => { setDeletePopupVisible(true) }}>Delete</DeleteButton>
                        </>
                    )}
				</CarPriceInfo>
			</Container>
		</>
	);
};

export default Car;
