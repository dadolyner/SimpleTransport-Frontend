import * as React from 'react';
import { CheckboxContainer, CheckboxInput, CheckboxLabel} from './carfilters.styled';

type CheckboxProps = {
    id: string;
    name: string;
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
    const { id, name, label} = props;
    const [checked, setChecked] = React.useState(false);
    const handleCheckboxValueChange = (isChecked: boolean) =>  setChecked(isChecked);
    return (
        <>
            <CheckboxContainer>
                <CheckboxInput type="checkbox" id={id} name={name} checked={checked} onChange={(e) => handleCheckboxValueChange(e.target.checked)}/>
                <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
            </CheckboxContainer>
        </>
    )
}

export default Checkbox;