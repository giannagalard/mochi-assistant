import React from 'react';
import JsonInput from '../components/JsonInput';
import CompareButton from '../components/CompareButton';
import CompareResults from '../components/CompareResults';
import useCompareJson from '../utils/useCompareJson';
import Title from '../components/Title';
import '../styles/jsonCompare.css';

function JsonCompare() {
    const { json1, setJson1, json2, setJson2, differences, handleCompare } = useCompareJson();

    return (
        <div className="App">
            <Title>JSON Compare Tool</Title>
            <div className="json-input-container">
                <JsonInput label="JSON 1" json={json1} setJson={setJson1} />
                <JsonInput label="JSON 2" json={json2} setJson={setJson2} />
            </div>
            <div className="button-container">
                <CompareButton onClick={handleCompare} />
            </div>
            <CompareResults differences={differences} />
        </div>
    );
}

export default JsonCompare;
