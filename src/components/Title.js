import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledTypography = styled(Typography)({
    color: '#AEC3AE',
    marginBottom: '20px',
    textAlign: 'center',
    padding: '20px'
});

const Title = () => (
    <StyledTypography variant="h4" component="h4">
        JSON Compare Tool
    </StyledTypography>
);

export default Title;
