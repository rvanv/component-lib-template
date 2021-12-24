import React from "react";
import { useUniqueId } from "../utils/useUniqueId";
import { FieldContext } from "./FieldContext";
import { Label } from './Label';
import { Input } from './Input';
import { TextArea } from "./TextArea";

interface FieldCompostion {
    Label: typeof Label;
    Input: typeof Input;
    TextArea: typeof TextArea
}

export const Field: React.FC & FieldCompostion = ({ children }) => {
    const id = useUniqueId();
    return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>
}

Field.Label = Label;
Field.Input = Input;
Field.TextArea = TextArea;