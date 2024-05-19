const CompareJson = (json1, json2) => {
    const differences = [];
    const potentialRenames = [];

    const compare = (obj1, obj2, path = []) => {
        for (const key in obj1) {
            if (!(key in obj2)) {
                // if key is in obj1 but not in obj2, mark as deleted
                potentialRenames.push({
                    kind: 'D',
                    path: [...path, key],
                    lhs: obj1[key],
                    rhs: undefined
                });
            } else if (obj1[key] !== obj2[key]) {
                // if key is in both but values differ, mark as edited
                differences.push({
                    kind: 'E',
                    path: [...path, key],
                    lhs: obj1[key],
                    rhs: obj2[key]
                });
            }
        }

        for (const key in obj2) {
            if (!(key in obj1)) {
                // if key is in obj2 but not in obj1, mark as new
                potentialRenames.push({
                    kind: 'N',
                    path: [...path, key],
                    lhs: undefined,
                    rhs: obj2[key]
                });
            }
        }
    };

    compare(json1, json2);

    potentialRenames.forEach((deletedField) => {
        if (deletedField.kind === 'D') {
            const match = potentialRenames.find(
                (newField) => newField.kind === 'N' && newField.rhs === deletedField.lhs
            );
            if (match) {
                // if match found, mark as renamed
                differences.push({
                    kind: 'R',
                    path: [deletedField.path[0], match.path[0]],
                    lhs: deletedField.lhs,
                    rhs: match.rhs
                });
                // remove the matched new field to avoid duplication
                potentialRenames.splice(potentialRenames.indexOf(match), 1);
            } else {
                // if no match, keep as deleted
                differences.push(deletedField);
            }
        } else {
            // if it's a new field without a corresponding deleted field
            differences.push(deletedField);
        }
    });
    return differences;
};

export default CompareJson;