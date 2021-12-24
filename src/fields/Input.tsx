import React, { useContext } from "react";
import { FieldContext } from "./FieldContext";
import { StyledInput } from "./styles";

export const Input = React.forwardRef<
    HTMLInputElement,
    React.ComponentPropsWithRef<'input'>
>((props, ref) => {
    const id = useContext(FieldContext);

    return <StyledInput ref={ref} {...props} />
})

Input.displayName = "Field.Input";