import * as React from 'react';
import SwipeableCoverStepper from '../components/SwipeableCoverStepper';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import SwipeableNewsStepper from '../components/SwipeableNewsStepper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    backgroundColor: "#fff0"
}));

function IndexPage(props) {
    return (
        <React.Fragment>
            <Container>
                <Stack spacing={2}>
                    <Item  elevation={0}>
                        <SwipeableCoverStepper></SwipeableCoverStepper>
                    </Item>
                    <Item  elevation={0}>
                        <Typography variant="h4">{"ข่าวสารประชาสัมพันธ์"}</Typography>
                    </Item>
                    <Item  elevation={0}>
                        <SwipeableNewsStepper></SwipeableNewsStepper>
                    </Item>
                </Stack>
            </Container>
        </React.Fragment>
    );
}

export default IndexPage;
