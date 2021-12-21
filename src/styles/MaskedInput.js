import React from 'react';
import InputMask from 'react-input-mask';
import TextField from '@mui/material/TextField';

const MaskedInput = ({value, onChange, name, mask, label}) => (
        <InputMask name={name} mask={mask} value={value} onChange={onChange}>
            {() =>
                (
                    <TextField
                        id="outlined-basic"
                        label={label}
                        variant="outlined"
                        value={value}
                    />
                )
            }
        </InputMask>
    )
;

export default MaskedInput;
