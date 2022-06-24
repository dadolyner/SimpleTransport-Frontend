import * as React from 'react';
import { PopupContainer, PopupContent, HeaderBar, CloseButton, Title, Form, Label, Input, TextArea, Html, Select, Divider, ButtonsContainer, Button } from './popup.styled';

type DefaultPopupSettings = {
	active?: boolean;
	id: string;
	theme?: {
		primary: string;
		primaryDarken: string;
		secondary: string;
		secondaryDarken: string;
		text: string;
	};
	size: number;
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
	confirmButtonText: string;
	RetrieveValues: (object: any) => any;
};

const Popup: React.FC<DefaultPopupSettings> = (props: DefaultPopupSettings) => {
	const { id, theme, size, title, labelAligment, inputs } = props
	const { primary, primaryDarken, text } = theme

	// INPUTS VALUES
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

	//EVENTS
	const handleConfirmed = (confirmed: string) =>  setConfirmed(confirmed);
	React.useEffect(() => { handleConfirmed(props.active ? 'shown' : 'hidden') }, [ props.active ]);

	// INPUT CHANGING VALUES
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
	
	// ON CONFIRM BUTTON CLICK
	const PopupConfirm = () => {
		const output:Object = {
			textValue: textValue,
			numberValue: numberValue,	
			passwordValue: passwordValue,
			textareaValue: textareaValue,
			dropdownValue: dropdownValue,
			dropdownSearchValue: dropdownSearchValue,
			checkboxValue: checkboxValue,
			colorValue: colorValue,
			urlValue: urlValue,
			fileValue: fileValue,
			dateValue: dateValue,
			rangeValue: rangeValue,
		}
		handleConfirmed('hidden');
		return output
	}

	return (
		<>
			<PopupContainer id={id} className={confirmed === 'hidden' ? 'hidden' : 'shown'}>
				<PopupContent size={size} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}>
					{props.topClose && 
						<HeaderBar style={{ backgroundColor: primaryDarken }}>
							<CloseButton onClick={() => props.topClose()}>&times;</CloseButton>
						</HeaderBar>
					}	
					<Title>{title}</Title>

					<Form>
						{inputs.map((input) => {
							const { name, label, type, options, value, placeholder, color, backgroundColor, html, min, max } = input
							switch (type) {
								case 'text': 
									return ( <>
										<Label className={labelAligment} style={{color: text}}>{label}</Label>
										<Input id={name} type={type} name={name} value={textValue ? textValue : value} placeholder={placeholder} onChange={(e) => handleTextValueChange(e.target.value)} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}/>
									</> );
								
								case 'number': 
									return ( <>
										<Label className={labelAligment} style={{color: text}}>{label}</Label>
										<Input id={name} type={type} name={name} value={numberValue ? numberValue : value} placeholder={placeholder} onChange={(e) => handleNumberValueChange(Number(e.target.value))} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}/>
									</> );

								case 'password': 
									return ( <>
										<Label className={labelAligment} style={{color: text}}>{label}</Label>
										<Input id={name} type={type} name={name} value={passwordValue ? passwordValue : value} placeholder={placeholder} onChange={(e) => handlePasswordValueChange(e.target.value)} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}/>
									</> );

								case 'color': 
									return ( <>
										<Label className={labelAligment} style={{color: text}}>{label}</Label>
										<Input id={name} type={type} name={name} value={colorValue ? colorValue : value} placeholder={placeholder} onChange={(e) => handleColorValueChange(e.target.value)} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}/>
									</> );

								case 'button': 
									return ( <>
										<Label className={labelAligment} style={{color: text}}>{label}</Label>
										<Input id={name} type={type} name={name} value={value ? value : ''} placeholder={placeholder}  onClick={() => input.onClick()} style={{backgroundColor: backgroundColor, color: color ? color : text}}/>
									</> );

								case 'textarea': 
									return ( <>
										<Label className={labelAligment} style={{color: text}}>{label}</Label>
										<TextArea id={name} name={name} value={textareaValue ? textareaValue : value} placeholder={placeholder} onChange={(e) => handleTextareaValueChange(e.target.value)} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}/>
									</> );

								case 'dropdown': 
									return ( <>
										<Label className={labelAligment} style={{color: text}}>Test Dropdown:</Label>
										<Select onChange={(e) => handleDropdownValueChange(e.target.value)} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}>
											{options.map((option) => {return <option value={option}>{option}</option>;})}
										</Select>
									</> );

								case 'dropdown-search':
									return ( <>
										<Label className={labelAligment} style={{color: text}}>Test Searchable Select:</Label>
										<Input list={id + 'dropdownItemsList'} onChange={(e) => handleDropdownSearchValueChange(e.target.value)} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}/>
										<datalist id={id + 'dropdownItemsList'}>
											{options.map((option) => {return <option value={option}>{option}</option>;})}
										</datalist>
									</> );

								case 'checkbox': 
									return ( <>
										<Label className={labelAligment} style={{color: text}}>{label}</Label>
										<Input id={name} type={type} name={name} placeholder={placeholder} checked={checkboxValue} onChange={(e) => handleCheckboxValueChange(e.target.checked)}/>
									</> );

								case 'html': 
									return ( <>
										<Label></Label>
										<Html dangerouslySetInnerHTML={{ __html: html }} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}></Html>
									</>);

								case 'url': 
									return ( <>
										<Label className={labelAligment} style={{color: text}}>{label}</Label>
										<Input id={name} type={type} name={name} value={urlValue ? urlValue : value} placeholder={placeholder} onChange={(e) => handleUrlValueChange(e.target.value)} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}/>
									</> );

								case 'file':
								return ( <>
									<Label className={labelAligment} style={{color: text}}>{label}</Label>
									<Input id={name} type={type} name={name} value={fileValue ? fileValue : value} placeholder={placeholder} onChange={(e) => handleFileValueChange(e.target.value)} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}/>
									</> );

								case 'date': 
									return ( <>
										<Label className={labelAligment} style={{color: text}}>{label}</Label>
										<Input id={name} type={type} name={name} value={dateValue ? dateValue : value} placeholder={placeholder} onChange={(e) => handleDateValueChange(e.target.value)} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}/>
									</> );

								case 'time': 
									return ( <>
										<Label className={labelAligment} style={{color: text}}>{label}</Label>
										<Input id={name} type={type} name={name} value={timeValue ? timeValue : value} placeholder={placeholder} onChange={(e) => handleTimeValueChange(e.target.value)} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}/>
									</> );

								case 'datetime-local': 
									return ( <>
										<Label className={labelAligment} style={{color: text}}>{label}</Label>
										<Input id={name} type={type} name={name} value={datetimeValue ? datetimeValue : value} placeholder={placeholder} onChange={(e) => handleDateTimeValueChange(e.target.value)} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}/>
									</> );

								case 'range': 
									return ( <>
										<Label className={labelAligment} style={{color: text}}>{label} ({rangeValue ? rangeValue : 0})</Label> 
										<Input id={name} type={type} name={name} value={rangeValue ? rangeValue : value} step={1} min={min} max={max} placeholder={placeholder} onChange={(e) => handleRangeValueChange(e.target.value)} style={{backgroundColor: primary, color: text, borderColor: primaryDarken}}/>
									</> );

								case 'spacer': 
									return ( <>
										<Label className={labelAligment} style={{color: text}}></Label>
										<Divider />
									</>);
								
								default: 
									return null;
							}
						})}
					</Form>

					<ButtonsContainer>
						{props.bottomButtons.map((button) => {
							const { name, text, backgroundColor, color, onClick } = button;
							return( <>
								<Button onClick={() => { if(name === 'confirm'){ onClick(); props.RetrieveValues(PopupConfirm()); } else onClick() }} style={{backgroundColor: backgroundColor, color: color}}>
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
