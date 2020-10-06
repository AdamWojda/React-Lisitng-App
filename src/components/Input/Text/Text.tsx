import React from 'react';

import {FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput} from '@material-ui/core';
import Search from '@material-ui/icons/Search';

interface TextProps {
    value: string;
    onButtonClick: (e : React.ChangeEvent<any>) => void;
    onChange?: (e:  React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e:  React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Text = (props: TextProps) => {
    return <>
        <FormControl>
            <OutlinedInput
                id='standard-adornment-password'
                type='text'
                placeholder='Search by title'
                onChange={props.onChange}
                value={props.value}
                inputProps={{style: {fontSize: 14} }}
                onKeyDown={props.onKeyDown}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={props.onButtonClick}
                            onMouseDown={() => props.onButtonClick}
                        >
                            <Search fontSize="large"/>
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    </>;
};
