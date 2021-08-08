interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelName: string
}

export const RadioButton: React.FC<RadioButtonProps> = ({labelName,...rest}) => {
    return (
        <div>
            <input className="form-check-input" type="radio" {...rest} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                {labelName}
            </label>
        </div>

    );
}