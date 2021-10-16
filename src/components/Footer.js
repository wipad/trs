import * as React from 'react';

export default function Footer() {
    return (
        <footer style={{
            background: "#1976d2",
            border: 0,
            // borderRadius: 3,
            // boxShadow: '    background: rgb(25, 118, 210);',
            color: 'white',
            // height: 48,
            padding: '30px',
        }}>
            <div style={{ textAlign: "center", color: "white" }}>
                <p>{"ที่อยู่ 200 1 ถนน รังสิต-นครนายก 32 รังสิต ธัญบุรี ปทุมธานี 12110"}</p>
            </div>
        </footer>
    )
}