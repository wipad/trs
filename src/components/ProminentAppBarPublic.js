import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import {
  Link,
  useLocation,
  useHistory
} from "react-router-dom";
import Stack from '@mui/material/Stack';
import EAUIcon from '../icons/EAUIcon';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

const MyButton = styled(Button)({
  color: 'white',
  fontSize: 20
});

const MyAppBar = styled(AppBar)({
  background: 'linear-gradient(0deg, #1976d2 10%, #000099 90%)',
  // border: 0,
  // borderRadius: 3,
  // boxShadow: '0 3px 5px 2px #1976d259',
  color: 'white',
  // height: 48,
  padding: '0 30px',
});

const MyButtonLink = styled(Button)({
  color: 'white',
  // fontSize: 20
  // textDecoration: "auto"
});

function GroupButtons() {
  let location = useLocation();
  const history = useHistory();

  return (
    <Stack spacing={2} direction="row">
      {location.pathname !== "/" ? <MyButtonLink onClick={() => history.push("/")}>{"หน้าแรก"}</MyButtonLink> : <React.Fragment></React.Fragment>}
      <MyButtonLink onClick={() => history.push("/student")}>{"นักศึกษา"}</MyButtonLink>
      <MyButtonLink onClick={() => history.push("/lecturer")}>{"อาจารย์"}</MyButtonLink>
      <MyButtonLink onClick={() => history.push("/manager")}>{"หัวหน้างาน"}</MyButtonLink>
    </Stack>
  );
}

export default function ProminentAppBarPublic() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppBar position="static" elevation={0}>
        <StyledToolbar>
          <MyButton startIcon={<EAUIcon />}>
            {"ระบบการฝึกงานของมหาวิทยาลัยอีสเทิร์นเอเชีย"}
          </MyButton>
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
            <GroupButtons></GroupButtons>
          </Typography>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
        </StyledToolbar>
      </MyAppBar>
    </Box>
  );
}
