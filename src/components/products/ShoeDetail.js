import React, {useState, useEffect} from 'react';
import {getDataItem} from '../../api/getData';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './shoe-detail.css';

import Loading from '../loading/Loading';
import AddToBasket from '../add-to-basket/AddToBasket';
import styled from 'styled-components';

import {Image} from 'react-bootstrap';
import SizeSelector from '../size-selector/size-selector';


const CarouselHolder = styled.div`
    background-color: whitesmoke;
`;

const Product = styled.div`
    margin: 10%;
`

const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;

    @media only screen and (max-width: 650px){
        display: block;
    }
`

const ProductDetails = styled.div`
    text-align: right;
    font-weight: 200;
    padding-right: 4%;
    min-width: 50vh;
    background-color: whitesmoke;
`

const ProductName =styled.h2`
    padding-top: 4%;
`

const ProductDesc = styled.div`
    font-size: 14pt;
`

const ProductPrice = styled.div`
    margin-top: 2%;
    font-weight: 500;
    font-size: 16pt;
`

const SliderButtonContainer = styled.div`
    text-align: center;
`

const Selectors = styled.div`
    display: inline-flex;
    margin-top: 5%;
`

const ShoeDetail = (props) => {
    const [shoe, setShoe] = useState([]);
    const [selectedSize, setSelectedSize] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDataItem(/*attribute*/'index', 
                    /*value*/ props.match.params.id, 
                    /*data type*/'shoes')
        .then(shoe => {
            setShoe(shoe[0]);
            setLoading(false);
        })
    }, [props.match.params.id]);

    const renderImages = () => {
        let headerImage = []; 
        headerImage.push(
            <Slide key={0} index={0}>
                <Image src={shoe.headerImage} alt={shoe.name} fluid/>
            </Slide>
        )

        let remainingImages = shoe.images.map((imageUrl, index) => {
            return (
                <Slide key={index+1} index={index+1}>
                    <Image src={imageUrl} alt={shoe.name} fluid/>
                </Slide>
            )
        })

        return headerImage.concat(remainingImages);
    }

    const renderShoe = () => {
        return (
            <ProductContainer>
                    <CarouselHolder>
                        <CarouselProvider
                            naturalSlideWidth={1}
                            naturalSlideHeight={1}
                            totalSlides={shoe.images.length + 1}
                        >
                            <Slider>
                                {renderImages()}
                            </Slider>
                            <SliderButtonContainer>
                                <ButtonBack className='back-button'>&lang;</ButtonBack>
                                <ButtonNext className='next-button'>&rang;</ButtonNext>
                            </SliderButtonContainer>
                        </CarouselProvider>
                    </CarouselHolder>
                    <ProductDetails>
                        <ProductName>{shoe.name}</ProductName>
                        <ProductDesc>{shoe.description}</ProductDesc>
                        <ProductPrice>£{shoe.RRP}</ProductPrice>

                        <Selectors>
                            <AddToBasket shoe={shoe} size={selectedSize}/>
                            <SizeSelector shoe={shoe} setSize={setSelectedSize}></SizeSelector>
                        </Selectors> 
                        
                    </ProductDetails>
            </ProductContainer>

        )
    }

    return (
        <Product>
            {loading ? <Loading></Loading> : renderShoe()}
        </Product>
    );
}

export default ShoeDetail;