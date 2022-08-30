import moment from 'moment';
import * as React from 'react';
import axios from '../../api/axios';
import RefreshUsersData from '../../helpers/RefreshUserData';
import { Button, DeleteButton } from '../Cars/cars.styled';
import Popup from '../Popups/popup';
import Toast from '../Toast/toast';
import { ButtonContainer, Details, Header, RentedCarContainer } from './profile.styled';

type RentProps = {
    vehicle: {
        id: string,
        seats: number,
        shifter: string,
        horsepower: number,
        torque: number,
        acceleration: number,
        year: string,
        price: number,
        rent_duration: number,
        licence_plate: string,
        vin: string,
        color: string,
        fuel: string,
        model: string,
        brand: string,
        country: string
    },
    user: {
        id: string,
        first_name: string,
        last_name: string,
        email: string,
        username: string,
        place: string,
        post_office: string,
        post_code: string,
        country: string
    },
    id: string,
    rent_start: Date,
    rent_end: Date
}

const RentedCar: React.FC<RentProps> = (props: RentProps) => {
    const { id, vehicle, user, rent_start, rent_end } = props;
    const [ popupEditRentVisible, setEditRentPopupVisible] = React.useState(false);
    const [ popupDeleteRentVisible, setDeleteRentPopupVisible] = React.useState(false);
    const [toastSuccess, setToastSuccess] = React.useState(false);
	const [toastSuccessMessage, setToastSuccessMessage] = React.useState('');
	const [toastError, setToastError] = React.useState(false);
	const [toastErrorMessage, setToastErrorMessage] = React.useState('');

    const EditRent = async(values: any) => {
        try {
            const accessToken = localStorage.getItem('simpletransport_accessToken');
            const rentData = {
                rent_start: values.rent_start,
                rent_end: values.rent_end,
                userId: user.id,
                vehicleId: vehicle.id
            }
            await axios.patch(`/rental?id=${id}`, rentData, { headers: { Authorization: `Bearer ${accessToken}` } }) 
            setToastSuccessMessage(`Rent updated successfully!`);
            setToastSuccess(true);
            setTimeout(() => { setToastSuccess(false); RefreshUsersData() }, 5100);
            setEditRentPopupVisible(false);
        } catch(error) {
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
    
    const DeleteRent = async() => {
        try {
            const accessToken = localStorage.getItem('simpletransport_accessToken');
            await axios.delete(`/rental?id=${id}`, { headers: { Authorization: `Bearer ${accessToken}` } });
            
            setToastSuccessMessage(`Rental deleted successfully!`);
            setToastSuccess(true);
            setTimeout(() => { setToastSuccess(false); RefreshUsersData() }, 5100);
            setDeleteRentPopupVisible(false);

        } catch(error) {
            setToastErrorMessage(error.response.data.message);
            setToastError(true);
            setTimeout(() => { setToastError(false) }, 5100);
        }
    }
    
    return (
        <>
            { toastSuccess && <Toast type={'success'} message={toastSuccessMessage} /> }
			{ toastError && <Toast type={'error'} message={toastErrorMessage} /> }

            { popupEditRentVisible && <Popup
                key={'EditRentPopup'}
                active={ popupEditRentVisible }
                title={'Edit Rent for ' + vehicle.brand + ' ' + vehicle.model}
                size={600}
                theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }}
                labelAligment={'center'}
                topClose={() => setEditRentPopupVisible(false)}
                inputs={[
                    { type: 'datetime-local', label: 'Rent start', name: 'rent_start', value: moment(rent_start).format('YYYY-MM-DDTHH:mm') },
                    { type: 'datetime-local', label: 'Rent end', name: 'rent_end', value: moment(rent_end).format('YYYY-MM-DDTHH:mm') }
                ]}
                bottomButtons={[ {  name: 'confirm',  text: 'Confirm',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff',  onClick: () => {} } ]}
                RetrieveValues={(values) => { EditRent(values) }}
            />}

            { popupDeleteRentVisible && <Popup
                key={'DeleteRentPopup'}
                active={ popupDeleteRentVisible }
                title={'Delete Rent for ' + vehicle.brand + ' ' + vehicle.model}
                size={600}
                theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }}
                labelAligment={'center'}
                topClose={() => setDeleteRentPopupVisible(false)}
                inputs={[ { type: 'html', label: '', name: 'confirmHtml', html: '<p style="font-size: 20px; text-align: center;">Are you sure you want to delete rent for this car?</p>' } ]}
                bottomButtons={[ {  name: 'confirm',  text: 'Delete',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff',  onClick: () => { DeleteRent() } } ]}
            />}

            <RentedCarContainer>
                <Header>{ vehicle.brand + ' ' + vehicle.model }</Header>
                <Details>Start: { moment(rent_start).format('DD. MM. YYYY | HH:mm') }</Details>
                <Details>End: { moment(rent_end).format('DD. MM. YYYY | HH:mm') }</Details>
                <Details>Owner : { user.first_name + ' ' + user.last_name }</Details>
                <Details>Contact : { user.email }</Details>
                <Details>Pickup : <span style={{color: '#4169e1', fontWeight: 'bold'}}>{ user.place + ', ' + user.country }</span></Details>
                <ButtonContainer>
                    <Button onClick={() => { setEditRentPopupVisible(true) }}>Edit</Button>
                    <DeleteButton onClick={() => { setDeleteRentPopupVisible(true) }}>Delete</DeleteButton>
                </ButtonContainer>
            </RentedCarContainer>
        </>
    );
}

export default RentedCar;