import * as React from 'react';
import { Container, CarImageInfo, Image, CarSpecsInfo, CarPriceInfo, Header, Button, GridFullRow, CarSpecs, CarPrice, CarReturn, Icon, SingleRow } from '../cars.styled';
import { Images } from './icons/icons';
import Toast from '../../Toast/toast';

type carInfo = {
	key: string;
	avalible: boolean;
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
	const [toast, setToast] = React.useState(false);

	const { avalible, duration, image, name, seats, shifter, horsepower, torque, speed, location, price } = props;
	let { fuel } = props;
	let isFree = (price <= 1000) ? true : false;

	const allowedFuels = ["Dizel", "Bencin", "Plin", "Hibrid", "Elektrika"]
	if(!allowedFuels.includes(fuel)) fuel = 'Na'

	const Duration = (days: number) => {
		if (days < 1) return
		else if(days === 1) return "Cena za 1 dan:";
		else return `Cena za ${days} dni:`;
	}

	const Seats = (seats: number) => {
		if (seats < 1) return
		else if(seats === 1) return "1 Sedež";
		else if (seats === 2) return "2 Sedeža";
		else if (seats === 3 || seats === 4) return `${seats} Sedeži`;
		else return `${seats} Sedežev`;
	}

	return (
		<>
			{ toast && !avalible && <Toast type={'error'} message={'Izbran avtomobil trenutno ni na voljo!'} /> }

			<Container>
				<CarImageInfo>
					<Image src={image} alt='' />
				</CarImageInfo>

				<CarSpecsInfo className='CarSpecsInfo'>
					<GridFullRow><Header>{name}</Header></GridFullRow>
					<SingleRow title="Število sedežev"><Icon src={Images.seats} alt="Seats"/><CarSpecs>{Seats(seats)}</CarSpecs></SingleRow>
					<SingleRow title="Vrsta menjalnika"><Icon src={Images.shifter} alt="Shifter"/><CarSpecs>{shifter}</CarSpecs></SingleRow>
					<SingleRow title="Število konjskih moči"><Icon src={Images.engine} alt="Engine"/><CarSpecs>{horsepower} Hp</CarSpecs></SingleRow>
					<SingleRow title="Navor"><Icon src={Images.torque} alt="Torque"/><CarSpecs>{torque} Nm</CarSpecs></SingleRow>
					<SingleRow title="Čas od 0 - 100 km/h"><Icon src={Images.speed} alt="Speed"/><CarSpecs>0-100km/h v {speed} sec</CarSpecs></SingleRow>
					<SingleRow title="Vrsta goriva"><Icon src={Images.fuel} alt="Fuel"/><CarSpecs>{fuel}</CarSpecs></SingleRow>
					<SingleRow title="Lokacija prevzema"><Icon src={Images.location} alt="Location" /><CarSpecs>{location}</CarSpecs></SingleRow>
				</CarSpecsInfo>

				<CarPriceInfo className='CarPriceInfo'>
					<div>{Duration(duration)}</div>
					<CarPrice>{price} €</CarPrice>
					<CarReturn className={isFree ? 'free' : 'paid'}>{isFree ? `Brezplačna odpoved` : `Odpoved plačljiva`}</CarReturn>
					<Button onClick={() => {setToast(true); setTimeout(()=> {setToast(false)}, 5100)}}>Rent</Button>	
				</CarPriceInfo>
			</Container>
		</>
	);
};

export default Car;
