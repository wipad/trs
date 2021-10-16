import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCardNews(props) {
    return (
        <Card >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image={props.src}
                    alt={props.alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.alt}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {props.detail}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
