import * as React from 'react';
import { PopupContainer, PopupContent, HeaderBar, CloseButton, Title, Form, Label, Input, TextArea, Html, Select, Divider, ButtonsContainer, Button } from './popup.styled';

// POPUP EXAMPLE
// const [popupValues, setPopupValues] = React.useState({});
// const [popupVisible, setPopupVisible] = React.useState(false);
// <button onClick={() => (popupVisible ? setPopupVisible(false) : setPopupVisible(true))}>Open Popup</button>
// { popupVisible && <Popup active={popupVisible} id={'test_popup'} size={600} title={'Test Popup'} topClose={() => setPopupVisible(false)} labelAligment={'center'} theme={{ primary: '#fff', primaryDarken: '#000', secondary: '#000', secondaryDarken: '#000', text: '#000' }} inputs={[{ type: 'text', label: 'Test Input', name: 'test_input' }]} bottomButtons={[{ name: 'confirm', text: 'Test Button', onClick: () => {} }]} RetrieveValues={(values) => { setPopupValues(values); setPopupVisible(false); }} /> }

// POPUP SETTINGS
type DefaultPopupSettings = {
	active?: boolean;
	theme?: {
		primary: string;
		primaryDarken: string;
		secondary: string;
		secondaryDarken: string;
		text: string;
	};
	size: 400 | 500 | 600 | 700 | 800 | 900 | 1000;
	title: string;
	labelAligment: "left" | "center" | "right";
	topClose?: () => any;
	inputs?: Array<{
		type: string;
		label: string;
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
		onClick?: () => any;
		onChange?: () => any;
	}>;
	bottomButtons?: Array<{
		name: string;
		text: string;
		color?: string;
		backgroundColor?: string;
		onClick?: () => any;
	}>;
	RetrieveValues: (object: any) => any;
};

// POPUP OUTPUT VALUES
type PopupOutput = {
    textValue: string,
    numberValue: number,
    passwordValue: string,
    textareaValue: string,
    dropdownValue: string,
    dropdownSearchValue: string,
    checkboxValue: boolean,
    colorValue: string,
    urlValue: string,
    fileValue: string,
    dateValue: string,
    rangeValue: string,
}

const uuid = (version: number): string => {
    return `xxxxxxxx-xxxx-${version}xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (char) => {
        const randomNumber = Math.random() * 16 | 0
        // eslint-disable-next-line no-mixed-operators
        const uuid = (char === 'x') ? (randomNumber) : (randomNumber & 3 | 8)
        return uuid.toString(16)
    })
}

// POPUP
const Popup: React.FC<DefaultPopupSettings> = (props: DefaultPopupSettings) => {
    const id = uuid(4);
	const { theme, size, title, labelAligment, inputs, bottomButtons, RetrieveValues } = props
	const { primary, primaryDarken, text } = theme

	// STATES FOR VALUES
	const [confirmed, setConfirmed] = React.useState('');
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
	const handleTextValueChange = (text: string) =>  setTextValue(text);
	const handleNumberValueChange = (number: number) =>  setNumberValue(number);
	const handlePasswordValueChange = (password: string) =>  setPasswordValue(password);
	const handleTextareaValueChange = (textarea: string) =>  setTextareaValue(textarea);
	const handleDropdownValueChange = (dropdown: string) =>  setDropdownValue(dropdown);
	const handleDropdownSearchValueChange = (dropdown_search: string) =>  setDropdownSearchValue(dropdown_search);
	const handleCheckboxValueChange = (checked: boolean) =>  setCheckboxValue(checked);
	const handleColorValueChange = (color: string) =>  setColorValue(color);
	const handleUrlValueChange = (url: string) =>  setUrlValue(url);
	const handleFileValueChange = (file: string) =>  setFileValue(file);
	const handleDateValueChange = (date: string) =>  setDateValue(date);
	const handleTimeValueChange = (time: string) =>  setTimeValue(time);
	const handleDateTimeValueChange = (datetime: string) =>  setDateTimeValue(datetime);
	const handleRangeValueChange = (range: string) =>  setRangeValue(range);

    //EVENTS
	const handleConfirmed = (confirmed: string) =>  setConfirmed(confirmed);
	React.useEffect(() => { handleConfirmed(props.active ? 'shown' : 'hidden') }, [ props.active ]);
	
	// ON CONFIRM BUTTON CLICK
	const PopupConfirm = () => {
		const output: PopupOutput = {
			textValue: textValue ? textValue : null,
			numberValue: numberValue ? numberValue : null,
			passwordValue: passwordValue ? passwordValue : null,
			textareaValue: textareaValue ? textareaValue : null,
			dropdownValue: dropdownValue ? dropdownValue : null,
			dropdownSearchValue: dropdownSearchValue ? dropdownSearchValue : null,
			checkboxValue: checkboxValue ? checkboxValue : null,
			colorValue: colorValue ? colorValue : null,
			urlValue: urlValue ? urlValue : null,
			fileValue: fileValue ? fileValue : null,
			dateValue: dateValue ? dateValue : null,
			rangeValue: rangeValue ? rangeValue : null,
		}

        // @ts-ignore
        Object.keys(output).forEach(key => output[key] === null && delete output[key]);
		handleConfirmed('hidden');
		return output
	}

	return (
		<>
			<PopupContainer key={id} id={id} className={confirmed === 'hidden' ? 'hidden' : 'shown'}>
				<PopupContent size={size} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}>
					{ props.topClose && 
						<HeaderBar style={{ backgroundColor: primaryDarken }}>
							<CloseButton onClick={() => props.topClose()}>&times;</CloseButton>
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
									    	<Label key={label + name} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={textValue ? textValue : value} placeholder={placeholder} onChange={(e) => handleTextValueChange(e.target.value)} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}/>
									    </>
                                    );
								
								case 'number': 
									return ( 
                                        <>
									    	<Label key={label + name} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={numberValue ? numberValue : value} placeholder={placeholder} onChange={(e) => handleNumberValueChange(Number(e.target.value))} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}/>
									    </>
                                    );

								case 'password': 
									return ( 
                                        <>
									    	<Label key={label + name} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={passwordValue ? passwordValue : value} placeholder={placeholder} onChange={(e) => handlePasswordValueChange(e.target.value)} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}/>
									    </> 
                                    );

								case 'color': 
									return ( 
                                        <>
									    	<Label key={label + name} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input id={name} type={type} name={name} value={colorValue ? colorValue : value} placeholder={placeholder} onChange={(e) => handleColorValueChange(e.target.value)} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}/>
									    </>
                                    );

								case 'button': 
									return (
                                        <>
									    	<Label key={label + name} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={value ? value : ''} placeholder={placeholder}  onClick={() => input.onClick()} style={{ backgroundColor: backgroundColor, color: color ? color : text }}/>
									    </>
                                    );

								case 'textarea': 
									return (
                                        <>
									    	<Label key={label + name} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<TextArea key={name} id={name} name={name} value={textareaValue ? textareaValue : value} placeholder={placeholder} onChange={(e) => handleTextareaValueChange(e.target.value)} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}/>
									    </>
                                    );

								case 'dropdown': 
									return (
                                        <>
									    	<Label key={label + name} className={labelAligment} style={{color: text}}>Test Dropdown:</Label>
									    	<Select key={name} onChange={(e) => handleDropdownValueChange(e.target.value)} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}>
									    		{ options.map((option) => { return <option key={option} value={option}>{option}</option> }) }
									    	</Select>
									    </>
                                    );

								case 'dropdown-search':
									return (
                                        <>
									    	<Label key={label + name} className={labelAligment} style={{color: text}}>Test Searchable Select:</Label>
									    	<Input list={id + 'dropdownItemsList'} onChange={(e) => handleDropdownSearchValueChange(e.target.value)} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}/>
									    	<datalist key={name} id={id + 'dropdownItemsList'}>
									    		{ options.map((option) => { return <option key={option} value={option}>{option}</option> }) }
									    	</datalist>
									    </>
                                    );

								case 'checkbox': 
									return (
                                        <>
									    	<Label key={label + name} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} placeholder={placeholder} checked={checkboxValue} onChange={(e) => handleCheckboxValueChange(e.target.checked)}/>
									    </>
                                    );

								case 'html': 
									return (
                                        <>
									    	<Label></Label>
									    	<Html key={name} dangerouslySetInnerHTML={{ __html: html }} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}></Html>
									    </>
                                    );

								case 'url': 
									return (
                                        <>
									    	<Label key={label + name} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={urlValue ? urlValue : value} placeholder={placeholder} onChange={(e) => handleUrlValueChange(e.target.value)} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}/>
									    </>
                                    );

								case 'file':
								return (
                                    <>
								    	<Label key={label + name} className={labelAligment} style={{color: text}}>{label}</Label>
								    	<Input key={name} id={name} type={type} name={name} value={fileValue ? fileValue : value} placeholder={placeholder} onChange={(e) => handleFileValueChange(e.target.value)} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}/>
								    </>
                                );

								case 'date': 
									return (
                                        <>
									    	<Label key={label + name} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dateValue ? dateValue : value} placeholder={placeholder} onChange={(e) => handleDateValueChange(e.target.value)} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}/>
									    </>
                                    );

								case 'time': 
									return (
                                        <>
									    	<Label key={label + name} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={timeValue ? timeValue : value} placeholder={placeholder} onChange={(e) => handleTimeValueChange(e.target.value)} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}/>
									    </>
                                    );

								case 'datetime-local': 
									return (
                                        <>
									    	<Label key={label + name} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={datetimeValue ? datetimeValue : value} placeholder={placeholder} onChange={(e) => handleDateTimeValueChange(e.target.value)} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}/>
									    </>
                                    );

								case 'range': 
									return (
                                        <>
									    	<Label key={label + name} className={labelAligment} style={{color: text}}>{label} ({rangeValue ? rangeValue : 0})</Label> 
									    	<Input key={name} id={name} type={type} name={name} value={rangeValue ? rangeValue : value} step={1} min={min} max={max} placeholder={placeholder} onChange={(e) => handleRangeValueChange(e.target.value)} style={{ backgroundColor: primary, color: text, borderColor: primaryDarken }}/>
									    </>
                                    );

								case 'spacer': 
									return (
                                        <>
									    	<Label key={label + name} className={labelAligment} style={{color: text}}></Label>
									    	<Divider />
									    </>
                                    );
								
								default: 
									return null;
							}
						})}
					</Form>

					<ButtonsContainer>
						{ bottomButtons.map((button) => {
							const { name, text, backgroundColor, color, onClick } = button;
							return( <>
								<Button key={name} onClick={() => { if(name === 'confirm'){ onClick(); RetrieveValues(PopupConfirm()); } else onClick() }} style={{ backgroundColor: backgroundColor, color: color }}>
									{text}
								</Button>
							</>) 
						})}
					</ButtonsContainer>
				</PopupContent>
			</PopupContainer>
		</>
	);
};

export default Popup;
