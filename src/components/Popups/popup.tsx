import * as React from 'react';
import { PopupContainer, PopupContent, HeaderBar, CloseButton, Title, Form, Label, Input, TextArea, Html, Select, Divider, ButtonsContainer, Button } from './popup.styled';

// POPUP EXAMPLE
// const [popupValues, setPopupValues] = React.useState({});
// const [popupVisible, setPopupVisible] = React.useState(false);
// <button onClick={() => (popupVisible ? setPopupVisible(false) : setPopupVisible(true))}>Open Popup</button>
// { popupVisible && <Popup active={popupVisible} id={'test_popup'} size={600} title={'Test Popup'} topClose={() => setPopupVisible(false)} labelAligment={'center'} theme={{ background: '#fff', border: '#000', text: '#000' }} inputs={[{ type: 'text', label: 'Test Input', name: 'test_input' }]} bottomButtons={[{ name: 'confirm', text: 'Test Button', onClick: () => {} }]} RetrieveValues={(values) => { setPopupValues(values); setPopupVisible(false); }} /> }

// POPUP SETTINGS
type DefaultPopupSettings = {
	active?: boolean;
	title: string;
	size: 400 | 500 | 600 | 700 | 800 | 900 | 1000;
	theme?: {
        background: string;
        border: string;
        text: string;
    };
	labelAligment: "left" | "center" | "right";
	topClose?: () => any;
	
    inputs?: Array<{ 
        label: string;
        type: string;
        name: string;
        value?: string | number;
        placeholder?: string;
        options?: string[];
        html?: string;
        min?: number;
        max?: number;
        color?: string;
        backgroundColor?: string;
        margin?: number;
        onClick?: () => any; onChange?: () => any;
	}>;
	
    bottomButtons?: Array<{
		name: string; 
        text: string;
		color?: string; 
        colorHover?: string; 
        background?: string; 
        backgroundHover?: string;
		onClick?: () => any;
	}>;
	
    RetrieveValues: (object: any) => any;
};

const uuid = (version: number): string => {
    return `xxxxxxxx-xxxx-${version}xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (char) => {
        const randomNumber = Math.random() * 16 | 0
        // eslint-disable-next-line no-mixed-operators
        const uuid = (char === 'x') ? (randomNumber) : (randomNumber & 3 | 8)
        return uuid.toString(16)
    })
}
const id = uuid(4);

// POPUP
const Popup: React.FC<DefaultPopupSettings> = (props: DefaultPopupSettings) => {
	// DESTRUCTURE PROPS
    const { active, title, size, theme, labelAligment, inputs, bottomButtons, RetrieveValues, topClose } = props
	const { background, border, text } = theme
    
	// STATES FOR VALUES
	const [confirmed, setConfirmed] = React.useState('');
    const [dataOutput, setDataOutput] = React.useState({});
	
    const [textValue, setTextValue] = React.useState('');
	const [numberValue, setNumberValue] = React.useState(0);
	const [passwordValue, setPasswordValue] = React.useState('');
	const [textareaValue, setTextareaValue] = React.useState('');
	const [dropdownValue, setDropdownValue] = React.useState('');
	const [dropdownSearchValue, setDropdownSearchValue] = React.useState('');
	const [checkboxValue, setCheckboxValue] = React.useState(false);
	const [colorValue, setColorValue] = React.useState('');
	const [urlValue, setUrlValue] = React.useState('');
	const [fileValue, setFileValue] = React.useState('');
	const [dateValue, setDateValue] = React.useState('');
	const [timeValue, setTimeValue] = React.useState('');
	const [datetimeValue, setDateTimeValue] = React.useState('');
	const [rangeValue, setRangeValue] = React.useState('');

	// HANDLING CHANGES FOR VALUES
	const handleConfirmed = (confirmed: string) =>  setConfirmed(confirmed);
	
    const handleTextValueChange = (key: string, text: string) =>  { setTextValue(text); setDataOutput({ ...dataOutput, [key]: text }) };
	const handleNumberValueChange = (key: string, number: number) =>  { setNumberValue(number); setDataOutput({ ...dataOutput, [key]: number }) };
	const handlePasswordValueChange = (key: string, password: string) =>  { setPasswordValue(password); setDataOutput({ ...dataOutput, [key]: password }) };
	const handleTextareaValueChange = (key: string, textarea: string) =>  { setTextareaValue(textarea); setDataOutput({ ...dataOutput, [key]: textarea }) };
	const handleDropdownValueChange = (key: string, dropdown: string) =>  { setDropdownValue(dropdown); setDataOutput({ ...dataOutput, [key]: dropdown }) };
	const handleDropdownSearchValueChange = (key: string, dropdown_search: string) =>  { setDropdownSearchValue(dropdown_search); setDataOutput({ ...dataOutput, [key]: dropdown_search }) };
	const handleCheckboxValueChange = (key: string, checked: boolean) =>  { setCheckboxValue(checked); setDataOutput({ ...dataOutput, [key]: checked }) };
	const handleColorValueChange = (key: string, color: string) =>  { setColorValue(color); setDataOutput({ ...dataOutput, [key]: color }) };
	const handleUrlValueChange = (key: string, url: string) =>  { setUrlValue(url); setDataOutput({ ...dataOutput, [key]: url }) };
	const handleFileValueChange = (key: string, file: string) =>  { setFileValue(file); setDataOutput({ ...dataOutput, [key]: file }) };
	const handleDateValueChange = (key: string, date: string) =>  { setDateValue(date); setDataOutput({ ...dataOutput, [key]: date }) };
	const handleTimeValueChange = (key: string, time: string) =>  { setTimeValue(time); setDataOutput({ ...dataOutput, [key]: time }) };
	const handleDateTimeValueChange = (key: string, datetime: string) =>  { setDateTimeValue(datetime); setDataOutput({ ...dataOutput, [key]: datetime }) };
	const handleRangeValueChange = (key: string, range: string) =>  { setRangeValue(range); setDataOutput({ ...dataOutput, [key]: range }) };

    //EVENTS
	React.useEffect(() => { handleConfirmed(active ? 'shown' : 'hidden') }, [ active ]);
	
	// ON CONFIRM BUTTON CLICK
	const PopupConfirm = () => {
		handleConfirmed('hidden');
		return dataOutput;
	}

    // POPUP TSX
	return (
		<>
			<PopupContainer id={id} className={confirmed === 'hidden' ? 'hidden' : 'shown'}>
				<PopupContent size={size} style={{ backgroundColor: background, color: text, borderColor: border }}>
					{ topClose && 
						<HeaderBar style={{ background: border }}>
							<CloseButton onClick={() => topClose()}>&times;</CloseButton>
						</HeaderBar>
					}	
					<Title>{title}</Title>

					<Form>
						{ inputs.map((input) => {
							const { name, label, type, options, value, placeholder, color, backgroundColor, html, min, max } = input
							switch (type) {
								case 'text': 
									return ( 
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={textValue ? textValue : value} placeholder={placeholder} onChange={(e) => handleTextValueChange(name,  e.target.value)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );
								
								case 'number': 
									return ( 
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={numberValue ? numberValue : value} placeholder={placeholder} onChange={(e) => handleNumberValueChange(name, Number(e.target.value))} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );

								case 'password': 
									return ( 
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={passwordValue ? passwordValue : value} placeholder={placeholder} onChange={(e) => handlePasswordValueChange(name,  e.target.value)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </> 
                                    );

								case 'color': 
									return ( 
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input id={name} type={type} name={name} value={colorValue ? colorValue : value} placeholder={placeholder} onChange={(e) => handleColorValueChange(name,  e.target.value)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );

								case 'button': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={value ? value : ''} placeholder={placeholder}  onClick={() => input.onClick()} style={{ backgroundColor: backgroundColor, color: color ? color : text }}/>
									    </>
                                    );

								case 'textarea': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<TextArea key={name} id={name} name={name} value={textareaValue ? textareaValue : value} placeholder={placeholder} onChange={(e) => handleTextareaValueChange(name,  e.target.value)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );

								case 'dropdown': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>Test Dropdown:</Label>
									    	<Select key={name} value={dropdownValue} onChange={(e) => handleDropdownValueChange(name,  e.target.value)} style={{ backgroundColor: background, color: text, borderColor: border }}>
									    		{ options.map((option) => { return ( <><option key={option} value={option}>{option}</option></> ) }) }
									    	</Select>
									    </>
                                    );

								case 'dropdown-search':
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>Test Searchable Select:</Label>
									    	<Input key={id + name} type={'text'} list={id + 'dropdownItemsList'} value={dropdownSearchValue} onChange={(e) => handleDropdownSearchValueChange(name,  e.target.value)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    	<datalist key={name} id={id + 'dropdownItemsList'}>
									    		{ options.map((option) => { return ( <><option key={option} value={option}>{option}</option></> ) }) }
									    	</datalist>
									    </>
                                    );

								case 'checkbox': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} placeholder={placeholder} checked={checkboxValue} onChange={(e) => handleCheckboxValueChange(name, e.target.checked)}/>
									    </>
                                    );

								case 'html': 
									return (
                                        <>
									    	<Label key={label}></Label>
									    	<Html key={name} dangerouslySetInnerHTML={{ __html: html }} style={{ backgroundColor: background, color: text, borderColor: border }}></Html>
									    </>
                                    );

								case 'url': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={urlValue ? urlValue : value} placeholder={placeholder} onChange={(e) => handleUrlValueChange(name,  e.target.value)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );

								case 'file':
								return (
                                    <>
								    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
								    	<Input key={name} id={name} type={type} name={name} value={fileValue ? fileValue : value} placeholder={placeholder} onChange={(e) => handleFileValueChange(name,  e.target.value)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
								    </>
                                );

								case 'date': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dateValue ? dateValue : value} placeholder={placeholder} onChange={(e) => handleDateValueChange(name,  e.target.value)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );

								case 'time': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={timeValue ? timeValue : value} placeholder={placeholder} onChange={(e) => handleTimeValueChange(name,  e.target.value)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );

								case 'datetime-local': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={datetimeValue ? datetimeValue : value} placeholder={placeholder} onChange={(e) => handleDateTimeValueChange(name,  e.target.value)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );

								case 'range': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label} ({rangeValue ? rangeValue : 0})</Label> 
									    	<Input key={name} id={name} type={type} name={name} value={rangeValue ? rangeValue : value} step={1} min={min} max={max} placeholder={placeholder} onChange={(e) => handleRangeValueChange(name,  e.target.value)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );

								case 'spacer': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}></Label>
									    	<Divider key={name}/>
									    </>
                                    );
								
								default: 
									return (<></>);
							}
						})}
					</Form>

					<ButtonsContainer>
						{ bottomButtons.map((button) => {
							const { name, text, color, colorHover, background, backgroundHover, onClick } = button;
							return (
                                <>
								    <Button key={name} color={color} colorHover={colorHover} background={background} backgroundHover={backgroundHover} onClick={() => { if (name === 'confirm') { onClick(); RetrieveValues(PopupConfirm()) } else onClick() }}>{text}</Button>
							    </>
                            )
						})}
					</ButtonsContainer>
				</PopupContent>
			</PopupContainer>
		</>
	);
};

export default Popup;
