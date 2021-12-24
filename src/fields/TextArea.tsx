import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FieldContext } from "./FieldContext";
import { StyledTextArea } from "./styles";

export interface TextAreaProps extends React.ComponentPropsWithRef<'textarea'> {
    isResizable?: boolean;
}

export const TextArea = React.forwardRef<
    HTMLTextAreaElement,TextAreaProps
>((props, ref) => {
    const id = useContext(FieldContext);
    
    return <StyledTextArea ref={ref} id= {id} {...props} />
})

TextArea.displayName = "Field.TextArea"; 

TextArea.defaultProps = {
    isResizable: true,
}

TextArea.propTypes = {
    isResizable: PropTypes.bool,
}