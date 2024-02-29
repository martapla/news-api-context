/* eslint-disable no-unused-vars */
import { Grid, Typography } from '@mui/material';
import useNews from '../hooks/useNews';
import News from './News';



const List = () => {

    const { newsapi } = useNews()
    
    console.log(newsapi)

    return (
        <>
            <Typography
                textAlign={'center'}
                margin={5}
                variant = 'h3'>
                Latest News
            </Typography>

            <Grid>

                {newsapi.map(noticia => (
                    <News
                        noticia={noticia}
                        key={noticia.url}
                    />
                ))} 

            </Grid>
        </>
    )
}

export default List