import * as React from 'react';
import { BackgroundContainer, Container, CloseButton, Title, Result, RangeMasterContainer, RangeContainer, RangeCounter, Range, SelectionContainer, ToggleContainer, Label, Toggle, GenerateButton } from './passwordGenerator.styled';

type PasswordGeneratorProps = {
    SendPassword: (passwordValue: string) => any;
}

const PasswordGenerator: React.FC<PasswordGeneratorProps> = (props: PasswordGeneratorProps) => {
    const [hide, setHide] = React.useState(false);

    const [password, setPassword] = React.useState('');
    const [range, setRange] = React.useState('4');

    const [lowerCase, setLowerCase] = React.useState(true);
    const [upperCase, setUpperCase] = React.useState(true);
    const [numbers, setNumbers] = React.useState(true);
    const [symbols, setSymbols] = React.useState(false);

    const handleRangeValueChange = (range: string) =>  setRange(range);

    const handleLowerCaseValueChange = (checked: boolean) =>  setLowerCase(checked);
    const handleUpperCaseChange = (checked: boolean) =>  setUpperCase(checked);
    const handleNumbersValueChange = (checked: boolean) =>  setNumbers(checked);
    const handleSymbolsValueChange = (checked: boolean) =>  setSymbols(checked);

    const GeneratePassword = (lenght: number, isLowerCase: boolean, isUpperCase: boolean, isNumbers: boolean, isSymbols: boolean ) => {
        const lower_case = 'abcdefghijklmnopqrstuvwxyz';
        const upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const special_characters = '!@#$%^&*()_+';
        const all_characters = (isLowerCase ? lower_case : '') + (isUpperCase ? upper_case : '') + (isNumbers ? numbers : '') + (isSymbols ? special_characters : '');
        
        let password: string = '';
        for (let i = 0; i < lenght; i++) password += all_characters.charAt(Math.floor(Math.random() * all_characters.length));
        setPassword(password);
        return password;
    };

    if(!hide) {
        return (
            <>
            <BackgroundContainer>
                <Container>
                    <CloseButton onClick={() => {props.SendPassword(GeneratePassword(0, false, false, false, false)); setHide(true)}}>&times;</CloseButton>
                    <Title>Password Generator</Title>
                    {/* <Result title={'Copy to clipboard'} onClick={() => password ? navigator.clipboard.writeText(password) : ''}>{password ? password : 'CLICK GENERATE'}</Result> */}
                    
                    <RangeMasterContainer>
                            <RangeCounter style={{textAlign: 'center'}}>{range}</RangeCounter>
                        <RangeContainer>
                            <RangeCounter>4</RangeCounter>
                            <Range type="range" min="4" max="32" step="1" value={range ? range : '4'} onChange={(e) => handleRangeValueChange(e.target.value)}/>
                            <RangeCounter>32</RangeCounter>
                        </RangeContainer>
                    </RangeMasterContainer>

                    <SelectionContainer>
                        <Label>Include Lowercase</Label>

                        <ToggleContainer>
                            <Toggle type="checkbox" defaultChecked={lowerCase} onChange={(e) => handleUpperCaseChange(e.target.checked)}/>
                        </ToggleContainer>
                    </SelectionContainer>

                    <SelectionContainer>
                        <Label>Include Uppercase</Label>

                        <ToggleContainer>
                            <Toggle type="checkbox" defaultChecked={upperCase} onChange={(e) => handleLowerCaseValueChange(e.target.checked)}/>
                        </ToggleContainer>
                    </SelectionContainer>

                    <SelectionContainer>
                        <Label>Include Numbers</Label>

                        <ToggleContainer>
                            <Toggle type="checkbox" defaultChecked={numbers} onChange={(e) => handleNumbersValueChange(e.target.checked)}/>
                        </ToggleContainer>
                    </SelectionContainer>

                    <SelectionContainer>
                        <Label>Include Symbols</Label>

                        <ToggleContainer>
                            <Toggle type="checkbox" defaultChecked={symbols} onChange={(e) => handleSymbolsValueChange(e.target.checked)}/>
                        </ToggleContainer>
                        </SelectionContainer>

                        { 
                            !lowerCase && !upperCase && !numbers && !symbols ? 
                            <GenerateButton disabled>Generate</GenerateButton> : 
                        <GenerateButton onClick={() => { props.SendPassword(GeneratePassword(+range, lowerCase, upperCase, numbers, symbols)); setHide(true)}}>Generate</GenerateButton> 
                    }
                </Container>
            </BackgroundContainer>
        </>
    )} else {
        return null
    }
}

export default PasswordGenerator