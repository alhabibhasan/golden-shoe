import React, {useState, useEffect} from 'react';
import {getData} from '../../api/getData';
import { Container, Row, Col } from 'reactstrap';
import redirectTo from '../../util/redirect';
import Loading from '../loading/Loading';

import styled from 'styled-components';

const Image = styled.img`
    height: 90%;
    width: 80%;
`

const Products = styled.div`
    margin: 5%;
    background-color: whitesmoke;
`

const Product = styled.div`
    margin-bottom: 10vh;
    text-align: right;
    font-weight: 200;
    &:hover {
        background-color: aliceblue;
    }
`

const ProductName = styled.div`
    margin-top: 5vh;
    margin-bottom: 1vh;
    color: gray;
`

const ProductPrice = styled.div`
`

const ProductOutOfStock = styled.div`
    margin-bottom: 1vh;
    color: indianred;
`

const ListShoes = (props) => {
    const [shoes, setShoes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData('shoes').then(shoes => {
            setShoes(shoes)
            setLoading(false);
        })
    });

    const handleClick = (shoe) => {
        redirectTo(props.history, '/shoe/' + shoe.index);
    }

    const renderShoes = () => {
        let renderedShoes = shoes.map((shoe) => {
            return ( 
                <Col md='3' key={shoe._id}>
                    <Product onClick={(e) => handleClick(shoe)}>
                        <Image src={shoe.headerImage} alt={shoe.name}/>
                        <ProductName>{shoe.name}</ProductName>
                        {shoe.stock.length <= 0 ? 
                            <ProductOutOfStock>OUT OF STOCK</ProductOutOfStock> : 
                            <ProductPrice>£{shoe.RRP}</ProductPrice>}
                    </Product>
                </Col>
            )
        })

        return (
            <Container>
                <Row>
                    {renderedShoes}
                </Row>
            </Container>
        );
    }

    return (
        <Products>
            {loading ? <Loading></Loading> : renderShoes()}
        </Products>
    );
}

export default ListShoes;