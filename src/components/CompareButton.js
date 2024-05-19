import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
    backgroundColor: '#AEC3AE',
    color: 'white',
    '&:hover': {
        backgroundColor: '#94A684',
    },
});

const CompareButton = ({ onClick }) => (
    <StyledButton
        variant="contained"
        onClick={onClick}
    >
        Compare JSONs
    </StyledButton>
);

export default CompareButton;
