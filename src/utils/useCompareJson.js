import { useState } from 'react';
import CompareJson from './CompareJson';

const useCompareJson = () => {
    const [json1, setJson1] = useState('');
    const [json2, setJson2] = useState('');
    const [differences, setDifferences] = useState(null);

    const handleCompare = () => {
        try {
            const parsedJson1 = JSON.parse(json1);
            const parsedJson2 = JSON.parse(json2);
            const diff = CompareJson(parsedJson1, parsedJson2);
            setDifferences(diff);
        } catch (error) {
            alert('Invalid JSON input. Please check your JSONs.');
            setDifferences(null);
        }
    };

    return {
        json1,
        setJson1,
        json2,
        setJson2,
        differences,
        handleCompare,
    };
};

export default useCompareJson;
