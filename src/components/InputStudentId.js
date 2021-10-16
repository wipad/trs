import * as React from 'react';
import ReactPinField, { PinField } from 'react-pin-field';
import './InputStudentId.scss'
import { useSelector, useDispatch } from 'react-redux';

export default function InputStudentId(props) {
    const [code, setCode] = React.useState("");
    //Get the whole state from characterReducer
    const inputData = useSelector(state => state.inputData);

    //Use for all the dispatch actions
    const dispatch = useDispatch();

    const Update = (val) => {
        dispatch({type: 'CHANGE_STUDENTID',payload: val});
    }
    return (
        <ReactPinField
            // value={inputData.studentId}
            onChange={Update}
            className="pin-field"
            validate="0123456789"
            inputMode="numeric"
            length={8} />

    )
}