const CompareJson = (json1, json2) => {
    const differences = [];

    const json1Entries = Object.entries(json1);
    const json2Entries = Object.entries(json2);

    json1Entries.forEach(([key, value]) => {
        if (!(key in json2)) {
            differences.push({
                kind: 'D',
                path: [key],
                lhs: value,
                rhs: undefined
            });
        }
    });

    json2Entries.forEach(([key, value]) => {
        if (!(key in json1)) {
            differences.push({
                kind: 'N',
                path: [key],
                lhs: undefined,
                rhs: value
            });
        }
    });

    differences.forEach((deletedField) => {
        if (deletedField.kind === 'D') {
            json2Entries.forEach(([newKey, newValue]) => {
                if (deletedField.lhs === newValue && !(newKey in json1)) {
                    differences.push({
                        kind: 'R',
                        path: [deletedField.path[0], newKey],
                        lhs: deletedField.lhs,
                        rhs: newValue
                    });
                }
            });
        }
    });

    return differences.filter(diff => {
        if (diff.kind === 'D') {
            return !differences.some(d => d.kind === 'R' && d.path[0] === diff.path[0]);
        }
        if (diff.kind === 'N') {
            return !differences.some(d => d.kind === 'R' && d.path[1] === diff.path[0]);
        }
        return true;
    });
};

export default CompareJson;
