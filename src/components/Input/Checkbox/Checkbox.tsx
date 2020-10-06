import React from 'react';
import { Checkbox as CheckboxField }  from '@material-ui/core';

interface CheckboxProps {
    checked: boolean;
    onChange?: (e:  React.ChangeEvent<HTMLInputElement>) => void;
}


export const Checkbox = ( props: CheckboxProps ) => {
    return (
        <>
            <CheckboxField
                checked={props.checked}
                onChange={props.onChange}
                icon={<svg className="MuiSvgIcon-root" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" fill="white" stroke="#E0E2EA"/>
                </svg>}
                checkedIcon={<svg className="MuiSvgIcon-root" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#4460F7"/>
                    <path d="M10.0001 14.7799L7.2201 11.9999L6.27344 12.9399L10.0001 16.6666L18.0001 8.66656L17.0601 7.72656L10.0001 14.7799Z" fill="white"/>
                </svg>
                }
                classes={{
                    root: 'filters__input',
                }}
            />
        </>
    );
};
