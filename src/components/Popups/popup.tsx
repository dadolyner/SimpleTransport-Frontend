import * as React from 'react';
import { PopupContainer, PopupContent, HeaderBar, CloseButton, Title, Form, Label, Input, TextArea, Html, Select, Divider, ButtonsContainer, Button } from './popup.styled';

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
        type: 'text' | 'number' | 'password' | 'color' | 'button' | 'textarea' | 'dropdown' | 'dropdown-search' | 'checkbox' | 'html' | 'url' | 'file' | 'date' | 'time' | 'datetime-local' | 'range' | 'spacer';
        name: string;
        value?: string | number;
        placeholder?: string;
        options?: Array<{
            optionValue: string | number;
            optionText: string;
        }>;
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
	
    onLoad?: () => any;
    RetrieveValues?: (object: any) => any;
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
    const { active, title, size, theme, labelAligment, inputs, bottomButtons, RetrieveValues, topClose, onLoad } = props
	const { background, border, text } = theme
    
    const [dataOutput, setDataOutput] = React.useState({} as any);
    const handleChange = (event: any) => setDataOutput((prevState: any) => ({ ...prevState, [event.target.name]: event.target.value }));
	
	const PopupConfirm = () => { return dataOutput; }

    React.useEffect(() => { if(onLoad) onLoad() } , []);

	return (
		<>
			<PopupContainer id={id} className={active ? 'shown' : 'hidden'}>
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
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );
								
								case 'number': 
									return ( 
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );

								case 'password': 
									return ( 
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </> 
                                    );

								case 'color': 
									return ( 
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
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
									    	<TextArea key={name} id={name} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );

								case 'dropdown': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Select key={name} id={name} name={name} value={dataOutput[name] ? dataOutput[name] : value} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}>
                                                <option key={"noneSelectedItemDropdown"} value={""}>Select an item ...</option>
                                                { options.map((option) => { return ( <><option key={option.optionValue} value={option.optionValue}>{option.optionText}</option></> ) }) }
									    	</Select>
									    </>
                                    );

								case 'dropdown-search':
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={id + name} id={name} name={name} type={'text'} list={id + name + 'dropdownItemsList'} value={dataOutput[name] ? dataOutput[name] : value} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    	<datalist key={name} id={id + name + 'dropdownItemsList'}>
                                                <option key={"noneSelectedItemDropdownSearch"} value={""}>Select an item ...</option>
                                                { options.map((option) => { return ( <><option key={option.optionValue} value={option.optionValue}>{option.optionText}</option></> ) }) }
									    	</datalist>
									    </>
                                    );

								case 'checkbox': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} placeholder={placeholder} checked={dataOutput[name] ? dataOutput[name] : value} onChange={(e) => handleChange(e)}/>
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
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );

								case 'file':
								return (
                                    <>
								    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
								    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
								    </>
                                );

								case 'date': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );

								case 'time': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );

								case 'datetime-local': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );

								case 'range': 
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label} ({dataOutput[name] ? dataOutput[name] : 0})</Label> 
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} step={1} min={min} max={max} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
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
