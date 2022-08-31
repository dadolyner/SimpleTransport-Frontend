import * as React from 'react';
import axios from '../../../api/axios';
import { DeleteButton } from '../cars.styled';
import { Container, Title, Arrow, Section, SectionTitle, Spacer, ApplyFilters, Radio, RadioText, SectionsContainer } from './carfilters.styled';

type FilterProps = {
    FilteredData: (filters: any) => void;
}

const CarsFilters: React.FC<FilterProps> = (props: FilterProps) => {
    const { FilteredData } = props;
    
    const [fuels, setFuels] = React.useState([] as any);
    const [brands, setBrands] = React.useState([] as any);
    const [isShown, setIsShown] = React.useState(false);
    
    const [dataOutput, setDataOutput] = React.useState({} as any);
    const handleChange = (event: any) => setDataOutput((prevState: any) => ({ ...prevState, [event.target.name]: event.target.value }));

    const backToTop = () => { 
        const screenWidth = window.innerWidth;
        if(screenWidth < 740) { setIsShown(false); window.scrollTo({ top: 0, left:0, behavior: 'smooth' }) }
        else { window.scrollTo({ top: 0, left:0, behavior: 'smooth' }) }
    }
    const loadFilterData = async() => {
        try {
            const fuelData = await axios.get('/fuel');
            const brandData = await axios.get('/brand');
            
            setFuels(fuelData.data);
            setBrands(brandData.data);
        } catch (error) { console.log(error); }
    }

    React.useEffect(() => { loadFilterData() } , [])

    return (
        <>
        <Container className={isShown ? 'shown' : ''}>
            <Title onClick={() => isShown ? setIsShown(false) : setIsShown(true)}>Filterji <Arrow className={isShown ? 'shown' : ''}></Arrow></Title>

            <Spacer />

            <SectionsContainer className="custom_scroll">
                <Section>
                    <div></div><SectionTitle>Vrsta goriva</SectionTitle>
                    { fuels.map((fuel: any) => { 
                        return <>
                            <Radio key={fuel.fuel} type="radio" name="fuel.fuel" value={fuel.fuel} onClick={(event: any) => handleChange(event)}/><RadioText>{fuel.fuel}</RadioText>
                        </> 
                    })}
                </Section>

                <Spacer />

                <Section>
                    <div></div><SectionTitle>Vrsta menjalnika</SectionTitle>
                    <Radio key={'Manual'} type="radio" name="vehicle.shifter" value="Manual" onClick={(event: any) => handleChange(event)}/><RadioText>Manual</RadioText>
                    <Radio key={'Automatic'} type="radio" name="vehicle.shifter" value="Automatic" onClick={(event: any) => handleChange(event)}/><RadioText>Automatic</RadioText>
                </Section>

                <Spacer />

                <Section>
                    <div></div><SectionTitle>Znamka</SectionTitle>
                    {brands.map((brand: any) => { 
                        return <>
                            <Radio key={brand.brand} type="radio" name="brand.brand" value={brand.brand} onClick={(event: any) => handleChange(event)}/><RadioText>{brand.brand}</RadioText>
                        </> 
                    })}
                </Section>
            </SectionsContainer>

            <Spacer />

            <ApplyFilters onClick={() => { backToTop(); FilteredData(dataOutput) }}>Use filters</ApplyFilters>
            <DeleteButton onClick={() => { backToTop(); FilteredData(""); window.location.reload(); }}>Reset filters</DeleteButton>

        </Container>
        </>
    )
}

export default CarsFilters;