import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Paper, Typography } from '@mui/material';
import InputStudentId from '../components/InputStudentId';
import Grid from '@mui/material/Grid';

function FixedContainer(props) {
    return (
        <React.Fragment>
            <Container fixed>
                <Box >
                    {props.children}
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default function StudentPage(props) {
    let location = useLocation();
    const auth = useSelector(state => state.authenticated)
    const inputData = useSelector(state => state.inputData)
    //Use for all the dispatch actions
    const dispatch = useDispatch();

    const loginStudentId = (studentId) => () => {
        dispatch({ type:"UPDATE_STUDENTID",payload: studentId})
        console.log(studentId);
    }

    return (<React.Fragment>
        {auth.status ? (<React.Fragment>
            <FixedContainer>
                {/* login แล้ว */}
            </FixedContainer>
        </React.Fragment>) : (<div style={{
            background: "#1976d2"
        }}>
            <FixedContainer>
                {/* ยังไม่ได้ login */}
                <Paper elevation={0} style={{ padding: "100px", backgroundColor: "#fff0" }}>
                    <Grid
                        spacing={6}
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item >
                            <Typography variant="h4" style={{ color: "white" }}>{"กรุณากรอกรหัสนักศึกษา"}</Typography>
                        </Grid>
                        <Grid item >
                            <InputStudentId></InputStudentId>
                        </Grid>
                        <Grid item >
                            <Button variant="outlined" onClick={loginStudentId(inputData.studentId)} style={{ color: "white", border: "1px solid rgb(167 202 237)" }}>{"เข้าสู่ระบบ"}</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </FixedContainer>
        </div>)}

    </React.Fragment>)
}