import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Slider from './Slider'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Product } from '../models'

type ProductProps = {
    productInfoString: string;
}

const ProductDetail: React.FC<ProductProps> = (props: ProductProps, state: any) => {
    const [product, setProduct] = useState(JSON.parse(props.productInfoString))
    useEffect(() => {
        const productInfo: Product = JSON.parse(props.productInfoString)
        setProduct(productInfo)
    }, [props])
    return (
        <div className='productCard'>
            <Paper elevation={0}>
                <Slider></Slider>
                <Grid container spacing={2}>
                    <Grid item xs={10} sm container direction="column">
                        <Grid item xs>
                            <Typography gutterBottom variant="h4">
                                {product.name}
                            </Typography>
                            <Typography variant="body2">
                                ${product.price}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="textSecondary">
                                {product.description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} sm></Grid>
                    <Grid item xs={12} sm container spacing={3} justify="space-around">
                        <Grid item xs={6} sm>
                            <Button variant="outlined">PURCHASE NOW</Button>
                        </Grid>
                        <Grid item xs={6} sm>
                            <Button variant="outlined">ADD TO CART</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider />
                <Divider />
                <Divider />
                <Divider />
            </Paper> />
        </div >
    )
}

export default ProductDetail