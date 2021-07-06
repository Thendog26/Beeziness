import React from 'react';

const FormSection = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    return <div className="form-section">{children}</div>
}

export default FormSection;