import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { Background, Button, DeleteButton } from '../components/Cars/cars.styled';
import Popup from '../components/Popups/popup';
import Toast from '../components/Toast/toast';
import { Container, Pannel, Title, Content, Buttons } from '../styles/admin.styled';

const Admin: React.FC = () => {
    const navigate = useNavigate();

    const [toastSuccess, setToastSuccess] = React.useState(false);
	const [toastSuccessMessage, setToastSuccessMessage] = React.useState('');
	const [toastError, setToastError] = React.useState(false);
	const [toastErrorMessage, setToastErrorMessage] = React.useState('');

    const [brandPopup, setBrandPopup] = React.useState({ add: false, edit: false, delete: false });
    const [colorPopup, setColorPopup] = React.useState({ add: false, edit: false, delete: false });
    const [countryPopup, setCountryPopup] = React.useState({ add: false, edit: false, delete: false });
    const [fuelPopup, setFuelPopup] = React.useState({ add: false, edit: false, delete: false });
    const [modelPopup, setModelPopup] = React.useState({ add: false, edit: false, delete: false });
    const [placePopup, setPlacePopup] = React.useState({ add: false, edit: false, delete: false });
    const [postalPopup, setPostalPopup] = React.useState({ add: false, edit: false, delete: false });

    // Data for popups
    const [brandData, setBrandData] = React.useState([] as any);
    const [colorData, setColorData] = React.useState([] as any);
    const [countryData, setCountryData] = React.useState([] as any);
    const [fuelData, setFuelData] = React.useState([] as any);
    const [modelData, setModelData] = React.useState([] as any);
    const [placeData, setPlaceData] = React.useState([] as any);
    const [postalData, setPostalData] = React.useState([] as any);

    // CHECK ADMIN USER
    const CheckUser = async() => {
        try {
            const userInfo = JSON.parse(localStorage.getItem('simpletransport_userInfo'))
            if (userInfo.user.email !== 'skulj.david@gmail.com') navigate('/')
        } catch(error) { navigate('/') }
    }
    React.useEffect(() => { CheckUser() } , []);

    const AdminPannel = [
        {
            name: 'brands',
            title: 'Brands',
            content: 'Add, edit and delete brands.',
            buttons: [
                { text: 'Add', onClick: () => { setBrandPopup({ add: true, edit: false, delete: false }) } },
                { text: 'Edit', onClick: () => { setBrandPopup({ add: false, edit: true, delete: false }) } },
                { text: 'Delete', onClick: () => { setBrandPopup({ add: false, edit: false, delete: true }) } }
            ]
        },
        {
            name: 'colors',
            title: 'Colors',
            content: 'Add, edit and delete colors.',
            buttons: [
                { text: 'Add', onClick: () => { setColorPopup({ add: true, edit: false, delete: false }) } },
                { text: 'Edit', onClick: () => { setColorPopup({ add: false, edit: true, delete: false }) } },
                { text: 'Delete', onClick: () => { setColorPopup({ add: false, edit: false, delete: true }) } }
            ]
        },
        {
            name: 'countries',
            title: 'Countries',
            content: 'Add, edit and delete countries.',
            buttons: [
                { text: 'Add', onClick: () => { setCountryPopup({ add: true, edit: false, delete: false }) } },
                { text: 'Edit', onClick: () => { setCountryPopup({ add: false, edit: true, delete: false }) } },
                { text: 'Delete', onClick: () => { setCountryPopup({ add: false, edit: false, delete: true }) } }
            ]
        },
        {
            name: 'fuels',
            title: 'Fuels',
            content: 'Add, edit and delete fuels.',
            buttons: [
                { text: 'Add', onClick: () => { setFuelPopup({ add: true, edit: false, delete: false }) } },
                { text: 'Edit', onClick: () => { setFuelPopup({ add: false, edit: true, delete: false }) } },
                { text: 'Delete', onClick: () => { setFuelPopup({ add: false, edit: false, delete: true }) } }
            ]
        },
        {
            name: 'models',
            title: 'Models',
            content: 'Add, edit and delete models.',
            buttons: [
                { text: 'Add', onClick: () => { setModelPopup({ add: true, edit: false, delete: false }) } },
                { text: 'Edit', onClick: () => { setModelPopup({ add: false, edit: true, delete: false }) } },
                { text: 'Delete', onClick: () => { setModelPopup({ add: false, edit: false, delete: true }) } }
            ]
        },
        {
            name: 'places',
            title: 'Places',
            content: 'Add, edit and delete places.',
            buttons: [
                { text: 'Add', onClick: () => { setPlacePopup({ add: true, edit: false, delete: false }) } },
                { text: 'Edit', onClick: () => { setPlacePopup({ add: false, edit: true, delete: false }) } },
                { text: 'Delete', onClick: () => { setPlacePopup({ add: false, edit: false, delete: true }) } }
            ]
        },
        {
            name: 'postals',
            title: 'Postals',
            content: 'Add, edit and delete postals.',
            buttons: [
                { text: 'Add', onClick: () => { setPostalPopup({ add: true, edit: false, delete: false }) } },
                { text: 'Edit', onClick: () => { setPostalPopup({ add: false, edit: true, delete: false }) } },
                { text: 'Delete', onClick: () => { setPostalPopup({ add: false, edit: false, delete: true }) } }
            ]
        },
    ] as any

    return (
        <>

            { toastSuccess && <Toast type={'success'} message={toastSuccessMessage} /> }
			{ toastError && <Toast type={'error'} message={toastErrorMessage} /> }

            <Background>
                <Container>

                    { AdminPannel.map((pannel: any) => {
                        const { name, title, content, buttons } = pannel;
                        return (
                            <>
                                <Pannel key={name}>
                                    <Title>{title}</Title>
                                    <Content>{content}</Content>
                                    <Buttons>
                                        <Button onClick={() => { buttons[0].onClick() }}>Add</Button>
                                        <Button onClick={() => { buttons[1].onClick() }}>Edit</Button>
                                        <DeleteButton onClick={() => { buttons[2].onClick() }}>Delete</DeleteButton>
                                    </Buttons>
                                </Pannel>
                            </>
                        )
                    }) }

                </Container>
            </Background>




        {/* BRAND */}
        { brandPopup.add && <Popup key={'AddBrandPopup'} active={ brandPopup.add } title={'Add Brand'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setBrandPopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const countryResponse = await axios.get('/country');
                const countries = countryResponse.data.map((country: any) => { return { optionValue: country.id, optionText: country.country } })
                setCountryData(countries);
            }}
            inputs={[ 
                { type: 'text', label: 'Brand', name: 'brand' },
                { type: 'dropdown', name: 'countryId', label: 'Country', options: countryData },
            ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Create',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                const data = { brand: values.brand, countryId: values.countryId };
                try { await axios.post('/brand', data); setToastSuccess(true); setToastSuccessMessage('Brand added successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}
        { brandPopup.edit && <Popup key={'EditBrandPopup'} active={ brandPopup.edit } title={'Edit Brand'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setBrandPopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const brandResponse = await axios.get('/brand');
                const brands = brandResponse.data.map((brand: any) => { return { optionValue: brand.id, optionText: brand.brand } })
                setBrandData(brands);

                const countryResponse = await axios.get('/country');
                const countries = countryResponse.data.map((country: any) => { return { optionValue: country.id, optionText: country.country } })
                setCountryData(countries);
            }}
            inputs={[ 
                { type: 'dropdown', label: 'Change', name: 'id', options: brandData },
                { type: 'text', label: 'Brand', name: 'brand' },
                { type: 'dropdown', label: 'Country', name: 'countryId', options: countryData },
            ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Edit',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                const data = { brand: values.brand, countryId: values.countryId };
                try { await axios.patch(`/brand?id=${values.id}`, data); setToastSuccess(true);setToastSuccessMessage('Brand edited successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}
        { brandPopup.delete && <Popup key={'DeleteBrandPopup'} active={ brandPopup.delete } title={'Delete Brand'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setBrandPopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const brandResponse = await axios.get('/brand');
                const brands = brandResponse.data.map((brand: any) => { return { optionValue: brand.id, optionText: brand.brand } })
                setBrandData(brands);
            }}
            inputs={[ { type: 'dropdown', label: 'Brand', name: 'id', options: brandData } ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Delete',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                try { await axios.delete(`/brand?id=${values.id}`); setToastSuccess(true);setToastSuccessMessage('Brand deleted successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}




        {/* COLOR */}
        { colorPopup.add && <Popup key={'AddColorPopup'} active={ colorPopup.add } title={'Add Color'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setColorPopup({ add: false, edit: false, delete: false })}
            inputs={[ { type: 'text', label: 'Color', name: 'color' } ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Create',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                const data = { color: values.color };
                try { await axios.post('/color', data); setToastSuccess(true); setToastSuccessMessage('Color added successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}
        { colorPopup.edit && <Popup key={'EditColorPopup'} active={ colorPopup.edit } title={'Edit Color'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setColorPopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const colorResponse = await axios.get('/color');
                const colors = colorResponse.data.map((color: any) => { return { optionValue: color.id, optionText: color.color } })
                setColorData(colors);
            }}
            inputs={[ 
                { type: 'dropdown', label: 'Change', name: 'id', options: colorData },
                { type: 'text', label: 'Color', name: 'color' },
            ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Edit',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                const data = { color: values.color };
                try { await axios.patch(`/color?id=${values.id}`, data); setToastSuccess(true);setToastSuccessMessage('Color edited successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}
        { colorPopup.delete && <Popup key={'DeleteColorPopup'} active={ colorPopup.delete } title={'Delete Color'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setColorPopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const colorResponse = await axios.get('/color');
                const colors = colorResponse.data.map((color: any) => { return { optionValue: color.id, optionText: color.color } })
                setColorData(colors);
            }}
            inputs={[ { type: 'dropdown', label: 'Color', name: 'id', options: colorData } ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Delete',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                try { await axios.delete(`/color?id=${values.id}`); setToastSuccess(true);setToastSuccessMessage('Color deleted successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}




        {/* COUNTRY */}
        { countryPopup.add && <Popup key={'AddCountryPopup'} active={ countryPopup.add } title={'Add Country'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setCountryPopup({ add: false, edit: false, delete: false })}
            inputs={[ 
                { type: 'text', label: 'Country', name: 'country' },
                { type: 'text', label: 'Abbreviation', name: 'abbreviation' }
            ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Create',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                const data = { country: values.country, abbreviation: values.abbreviation };
                try { await axios.post('/country', data); setToastSuccess(true); setToastSuccessMessage('Country added successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}
        { countryPopup.edit && <Popup key={'EditCountryPopup'} active={ countryPopup.edit } title={'Edit Country'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setCountryPopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const countryResponse = await axios.get('/country');
                const countries = countryResponse.data.map((country: any) => { return { optionValue: country.id, optionText: country.country } })
                setCountryData(countries);
            }}
            inputs={[ 
                { type: 'dropdown', label: 'Change', name: 'id', options: countryData },
                { type: 'text', label: 'Country', name: 'country' },
                { type: 'text', label: 'Abbreviation', name: 'abbreviation' }
            ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Edit',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                const data = { country: values.country, abbreviation: values.abbreviation };
                try { await axios.patch(`/country?id=${values.id}`, data); setToastSuccess(true);setToastSuccessMessage('Country edited successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}
        { countryPopup.delete && <Popup key={'DeleteCountryPopup'} active={ countryPopup.delete } title={'Delete Country'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setCountryPopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const countryResponse = await axios.get('/country');
                const countries = countryResponse.data.map((country: any) => { return { optionValue: country.id, optionText: country.country } })
                setCountryData(countries);
            }}
            inputs={[ { type: 'dropdown', label: 'Country', name: 'id', options: countryData } ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Delete',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                try { await axios.delete(`/country?id=${values.id}`); setToastSuccess(true);setToastSuccessMessage('Country deleted successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}




        {/* FUEL */}
        { fuelPopup.add && <Popup key={'AddFuelPopup'} active={ fuelPopup.add } title={'Add Fuel'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setFuelPopup({ add: false, edit: false, delete: false })}
            inputs={[ { type: 'text', label: 'Fuel', name: 'fuel' } ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Create',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                const data = { fuel: values.fuel };
                try { await axios.post('/fuel', data); setToastSuccess(true); setToastSuccessMessage('Fuel added successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}
        { fuelPopup.edit && <Popup key={'EditFuelPopup'} active={ fuelPopup.edit } title={'Edit Fuel'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setFuelPopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const fuelResponse = await axios.get('/fuel');
                const fuels = fuelResponse.data.map((fuel: any) => { return { optionValue: fuel.id, optionText: fuel.fuel } })
                setFuelData(fuels);
            }}
            inputs={[ 
                { type: 'dropdown', label: 'Change', name: 'id', options: fuelData },
                { type: 'text', label: 'Fuel', name: 'fuel' },
            ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Edit',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                const data = { fuel: values.fuel };
                try { await axios.patch(`/fuel?id=${values.id}`, data); setToastSuccess(true);setToastSuccessMessage('Fuel edited successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}
        { fuelPopup.delete && <Popup key={'DeleteFuelPopup'} active={ fuelPopup.delete } title={'Delete Fuel'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setFuelPopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const fuelResponse = await axios.get('/fuel');
                const fuels = fuelResponse.data.map((fuel: any) => { return { optionValue: fuel.id, optionText: fuel.fuel } })
                setFuelData(fuels);
            }}
            inputs={[ { type: 'dropdown', label: 'Fuel', name: 'id', options: fuelData } ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Delete',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                try { await axios.delete(`/fuel?id=${values.id}`); setToastSuccess(true);setToastSuccessMessage('Fuel deleted successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}




        {/* MODEL */}
        { modelPopup.add && <Popup key={'AddModelPopup'} active={ modelPopup.add } title={'Add Model'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setModelPopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const brandResponse = await axios.get('/brand');
                const brands = brandResponse.data.map((brand: any) => { return { optionValue: brand.id, optionText: brand.brand } })
                setBrandData(brands);
            }}
            inputs={[ 
                { type: 'text', label: 'Model', name: 'model' },
                { type: 'dropdown', label: 'Brand', name: 'brandId', options: brandData },
            ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Create',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                const data = { model: values.model, brandId: values.brandId };
                try { await axios.post('/model', data); setToastSuccess(true); setToastSuccessMessage('Model added successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}
        { modelPopup.edit && <Popup key={'EditModelPopup'} active={ modelPopup.edit } title={'Edit Model'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setModelPopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const modelResponse = await axios.get('/model');
                const models = modelResponse.data.map((model: any) => { return { optionValue: model.id, optionText: model.model } })
                setModelData(models);

                const brandResponse = await axios.get('/brand');
                const brands = brandResponse.data.map((brand: any) => { return { optionValue: brand.id, optionText: brand.brand } })
                setBrandData(brands);
            }}
            inputs={[ 
                { type: 'dropdown', label: 'Change', name: 'id', options: modelData },
                { type: 'text', label: 'Model', name: 'model' },
                { type: 'dropdown', label: 'Brand', name: 'brandId', options: brandData },
            ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Edit',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                const data = { model: values.model, brandId: values.brandId };
                try { await axios.patch(`/model?id=${values.id}`, data); setToastSuccess(true);setToastSuccessMessage('Model edited successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}
        { modelPopup.delete && <Popup key={'DeleteModelPopup'} active={ modelPopup.delete } title={'Delete Model'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setModelPopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const modelResponse = await axios.get('/model');
                const models = modelResponse.data.map((model: any) => { return { optionValue: model.id, optionText: model.model } })
                setModelData(models);
            }}
            inputs={[ { type: 'dropdown', label: 'Model', name: 'id', options: modelData } ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Delete',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                try { await axios.delete(`/model?id=${values.id}`); setToastSuccess(true);setToastSuccessMessage('Model deleted successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}




        {/* PLACE */}
        { placePopup.add && <Popup key={'AddPlacePopup'} active={ placePopup.add } title={'Add Place'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setPlacePopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const postalResponse = await axios.get('/postal');
                const postals = postalResponse.data.map((postal: any) => { return { optionValue: postal.id, optionText: postal.post_office + ' (' + postal.post_code + ')' } })
                setPostalData(postals);

                const countryResponse = await axios.get('/country');
                const countries = countryResponse.data.map((country: any) => { return { optionValue: country.id, optionText: country.country } })
                setCountryData(countries);
            }}
            inputs={[ 
                { type: 'text', label: 'Place', name: 'place' },
                { type: 'dropdown', label: 'Postal', name: 'postalId', options: postalData },
                { type: 'dropdown', label: 'Country', name: 'countryId', options: countryData },
            ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Create',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                const data = { place: values.place, postalId: values.postalId, countryId: values.countryId };
                try { await axios.post('/place', data); setToastSuccess(true); setToastSuccessMessage('Place added successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}
        { placePopup.edit && <Popup key={'EditPlacePopup'} active={ placePopup.edit } title={'Edit Place'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setPlacePopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const placeResponse = await axios.get('/place');
                const places = placeResponse.data.map((place: any) => { return { optionValue: place.id, optionText: place.place } })
                setPlaceData(places);

                const postalResponse = await axios.get('/postal');
                const postals = postalResponse.data.map((postal: any) => { return { optionValue: postal.id, optionText: postal.post_office + ' (' + postal.post_code + ')' } })
                setPostalData(postals);

                const countryResponse = await axios.get('/country');
                const countries = countryResponse.data.map((country: any) => { return { optionValue: country.id, optionText: country.country } })
                setCountryData(countries);
            }}
            inputs={[ 
                { type: 'dropdown', label: 'Change', name: 'id', options: placeData },
                { type: 'text', label: 'Place', name: 'place' },
                { type: 'dropdown', label: 'Postal', name: 'postalId', options: postalData },
                { type: 'dropdown', label: 'Country', name: 'countryId', options: countryData },
            ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Edit',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                const data = { place: values.place, postalId: values.postalId, countryId: values.countryId };
                try { await axios.patch(`/postal?id=${values.id}`, data); setToastSuccess(true);setToastSuccessMessage('Place edited successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}
        { placePopup.delete && <Popup key={'DeletePlacePopup'} active={ placePopup.delete } title={'Delete Place'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setPlacePopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const placeResponse = await axios.get('/place');
                const places = placeResponse.data.map((place: any) => { return { optionValue: place.id, optionText: place.place } })
                setPlaceData(places);
            }}
            inputs={[ { type: 'dropdown', label: 'Place', name: 'id', options: placeData } ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Delete',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                try { await axios.delete(`/place?id=${values.id}`); setToastSuccess(true);setToastSuccessMessage('Place deleted successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}




        {/* POSTAL */}
        { postalPopup.add && <Popup key={'AddPostalPopup'} active={ postalPopup.add } title={'Add Postal'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setPostalPopup({ add: false, edit: false, delete: false })}
            inputs={[ 
                { type: 'text', label: 'Post Office', name: 'post_office' },
                { type: 'text', label: 'Post Code', name: 'post_code' }
            ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Create',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                const data = { post_office: values.post_office, post_code: values.post_code };
                try { await axios.post('/postal', data); setToastSuccess(true); setToastSuccessMessage('Postal added successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}
        { postalPopup.edit && <Popup key={'EditPostalPopup'} active={ postalPopup.edit } title={'Edit Postal'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setPostalPopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const postalResponse = await axios.get('/postal');
                const postals = postalResponse.data.map((postal: any) => { return { optionValue: postal.id, optionText: postal.post_office + ' (' + postal.post_code + ')' } })
                setPostalData(postals);
            }}
            inputs={[ 
                { type: 'dropdown', label: 'Change', name: 'id', options: postalData },
                { type: 'text', label: 'Post Office', name: 'post_office' },
                { type: 'text', label: 'Post Code', name: 'post_code' }
            ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Edit',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                const data = { post_office: values.post_office, post_code: values.post_code };
                try { await axios.patch(`/postal?id=${values.id}`, data); setToastSuccess(true);setToastSuccessMessage('Postal edited successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}
        { postalPopup.delete && <Popup key={'DeletePostalPopup'} active={ postalPopup.delete } title={'Delete Postal'} size={600} theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }} labelAligment={'center'}
            topClose={() => setPostalPopup({ add: false, edit: false, delete: false })}
            onLoad={async() => {
                const postalResponse = await axios.get('/postal');
                const postals = postalResponse.data.map((postal: any) => { return { optionValue: postal.id, optionText: postal.post_office + ' (' + postal.post_code + ')' } })
                setPostalData(postals);
            }}
            inputs={[ { type: 'dropdown', label: 'Postal', name: 'id', options: postalData } ]}
            bottomButtons={[ {  name: 'confirm',  text: 'Delete',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff', onClick: () => {} } ]}
            RetrieveValues={async(values) => {
                try { await axios.delete(`/postal?id=${values.id}`); setToastSuccess(true);setToastSuccessMessage('Postal deleted successfully.'); setTimeout(() => { setToastSuccess(false) }, 5100);}
                catch(error) {  setToastError(true); setToastErrorMessage(error.response.data.message); setTimeout(() => { setToastError(false) }, 5100);}
            }}
        />}

        </>
    );
}

export default Admin;