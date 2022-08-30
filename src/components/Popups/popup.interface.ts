export interface DadoPopupDefaultInput {
    id: string;
    label: string;
}

interface DadoPopupTextInput extends DadoPopupDefaultInput {
    type: 'text';
    value: string;
    placeholder?: string;
    required?: boolean;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
}

interface DadoPopupNumberInput extends DadoPopupDefaultInput {
    type: 'number';
    value: number;
    placeholder?: string;
    required?: boolean;
    min?: number;
    max?: number;
}

interface DadoPopupEmailInput extends DadoPopupDefaultInput {
    type: 'email';
    value: string;
    placeholder?: string;
    required?: boolean;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
}

interface DadoPopupPasswordInput extends DadoPopupDefaultInput {
    type: 'password';
    value: string;
    placeholder?: string;
    required?: boolean;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
}

interface DadoPopupPhoneInput extends DadoPopupDefaultInput {
    type: 'tel';
    value: string;
    placeholder?: string;
    required?: boolean;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
}

interface DadoPopupColorInput extends DadoPopupDefaultInput {
    type: 'color';
    value: string;
}

interface DadoPopupButtonInput extends DadoPopupDefaultInput {
    type: 'button';
    value: string;
    theme?: {
        color?: string;
        colorHover?: string;
        background?: string;
        backgroundHover?: string;
    }
    onClick: () => any;
}

interface DadoPopupTextareaInput extends DadoPopupDefaultInput {
    type: 'textarea';
    value: string;
    placeholder?: string;
    required?: boolean;
    cols?: number;
    rows?: number;

}

interface DadoPopupDropdownInput extends DadoPopupDefaultInput {
    type: 'dropdown';
    value: string;
    placeholder?: string;
    required?: boolean;
    options: Array<{
        optionValue: string;
        optionText: string;
    }>;
    onChange?: (value: string) => any;
}

interface DadoPopupDropdownSearchInput extends DadoPopupDefaultInput {
    type: 'dropdown-search';
    value: string;
    placeholder?: string;
    required?: boolean;
    options: Array<{
        optionValue: string;
        optionText: string;
    }>;
    onChange?: (value: string) => any;
}

interface DadoPopupCheckboxInput extends DadoPopupDefaultInput {
    type: 'checkbox';
    value: boolean;
    required?: boolean;
    onChange?: (value: boolean) => any;
}

interface DadoPopupHtmlInput extends DadoPopupDefaultInput {
    type: 'html';
    value: string;
    html: string;
}

interface DadoPopupUrlInput extends DadoPopupDefaultInput {
    type: 'url';
    value: string;
    placeholder?: string;
    required?: boolean;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
}

interface DadoPopupImageInput extends DadoPopupDefaultInput {
    type: 'image';
    value: string;
    placeholder?: string;
    required?: boolean;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
}

interface DadoPopupFileInput extends DadoPopupDefaultInput {

}

interface DadoPopupDateInput extends DadoPopupDefaultInput {

}

interface DadoPopupTimeInput extends DadoPopupDefaultInput {

}

interface DadoPopupDatetimeLocalInput extends DadoPopupDefaultInput {

}

interface DadoPopupRangeInput extends DadoPopupDefaultInput {

}

interface DadoPopupSpacerInput extends DadoPopupDefaultInput {

}