import * as React from 'react';
import { Container, Title, Arrow, Section, SectionTitle, RangeContainer, Range, RangeLabel, Spacer, ApplyFilters } from './carfilters.styled';
import Checkbox from './checkbox'

const CarsFilters: React.FC = () => {
    const [rangeFromValue, setRangeFrom] = React.useState('0');
    const handleRangeFromValueChange = (rangeFrom: string) =>  setRangeFrom(rangeFrom);
    const [rangeToValue, setRangeTo] = React.useState('0');
    const handleRangeToValueChange = (rangeTo: string) =>  setRangeTo(rangeTo);

    const [isShown, setIsShown] = React.useState(false);

    const allZnamke = ['Audi', 'Bugatti', 'Kia', 'Citroen', 'Dacia', 'Ford', 'Opel', 'Renault', 'Tesla']
    const sortedZnamke = allZnamke.sort((a, b) => a.localeCompare(b))

    const backToTop = () => { 
        const screenWidth = window.innerWidth;
        if(screenWidth < 740) { setIsShown(false); window.scrollTo({ top: 0, left:0, behavior: 'smooth' }) }
        else { window.scrollTo({ top: 0, left:0, behavior: 'smooth' }) }
    }

    return (
        <>
        <Container className={isShown ? 'shown' : ''}>
            <Title onClick={() => isShown ? setIsShown(false) : setIsShown(true)}>Filterji <Arrow className={isShown ? 'shown' : ''}></Arrow></Title>

            <Spacer />

            <Section>
                <SectionTitle>Cena</SectionTitle>

                <RangeContainer>
                    <RangeLabel>{rangeFromValue} €</RangeLabel> - <RangeLabel>{rangeToValue} €</RangeLabel><br />

                    <Range type="range" min="0" max="1000" step="10" value={rangeFromValue} onChange={(e) => handleRangeFromValueChange(e.target.value)} />
                    <Range type="range" min="0" max="1000" step="10" value={rangeToValue} onChange={(e) => handleRangeToValueChange(e.target.value)} />
                </RangeContainer>
            </Section>

            <Spacer />

            <Section>
                <SectionTitle>Vrsta goriva</SectionTitle>

                <Checkbox id={'dizel'} name={'dizel'} label={'Dizel'} />
                <Checkbox id={'bencin'} name={'bencin'} label={'Bencin'} />
                <Checkbox id={'plun'} name={'plin'} label={'Plin'} />
                <Checkbox id={'elektrika'} name={'elektrika'} label={'Elektrika'} />
            </Section>

            <Spacer />

            <Section>
                <SectionTitle>Vrsta menjalnika</SectionTitle>

                <Checkbox id={'rocni'} name={'rocni'} label={'Ročni'} />
                <Checkbox id={'avtomatski'} name={'avtomatski'} label={'Avtomatski'} />
            </Section>

            <Spacer />

            <Section>
                <SectionTitle>Znamka</SectionTitle>
                {sortedZnamke.map((znamka) => { return <Checkbox key={znamka} id={znamka} name={znamka} label={znamka} /> })}
            </Section>

            <Spacer />

            <ApplyFilters onClick={() => backToTop()}>Uporabi filtre</ApplyFilters>

        </Container>
        </>
    )
}

export default CarsFilters;