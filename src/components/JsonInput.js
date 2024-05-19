import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)({
    width: '100%',
    height: '100%',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#AEC3AE',
            borderWidth: '2px',
            borderStyle: 'dotted',
            borderRadius: '15px'
        },
        '&:hover fieldset': {
            borderColor: '#AEC3AE',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#AEC3AE',
        },
    },
    '& .MuiInputLabel-root': {
        '&.Mui-focused': {
            color: '#AEC3AE',
        },
    },
});

const JsonInput = ({ label, json, setJson, style }) => (
    <CustomTextField
        label={label}
        multiline
        rows={20}
        variant="outlined"
        fullWidth
        margin="normal"
        value={json}
        onChange={(e) => setJson(e.target.value)}
        style={style}
    />
);

export default JsonInput;
