import React from 'react';
import { Alert } from '@mui/material';
import { styled } from '@mui/system';

const SuccessAlert = styled(Alert)({
    backgroundColor: '#E4E4D0',
    color: '#94A684',
    marginTop: '20px',
});

const ErrorAlert = styled(Alert)({
    backgroundColor: '#E4E4D0',
    color: '#FF0000',
    marginTop: '20px',
});

const CompareResults = ({ differences }) => {
    if (differences === null) {
        return null;
    }

    if (differences.length === 0) {
        return (
            <SuccessAlert severity="success">
                JSONs are identical
            </SuccessAlert>
        );
    }

    return (
        <ErrorAlert severity="error">
            <div>JSONs are not identical</div>
            <ul>
                {differences.map((diff, index) => (
                    <li key={index}>
                        {diff.kind === 'E' && `Changed ${diff.path.join('.')} from ${diff.lhs} to ${diff.rhs}`}
                        {diff.kind === 'N' && `Added ${diff.path.join('.')} with value ${diff.rhs}`}
                        {diff.kind === 'D' && `Deleted ${diff.path.join('.')}`}
                        {diff.kind === 'R' && `Field name changed from ${diff.path[0]} to ${diff.path[1]} with value ${diff.lhs}`}
                    </li>
                ))}
            </ul>
        </ErrorAlert>
    );
};

export default CompareResults;
