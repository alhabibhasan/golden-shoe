import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const IN_STOCK_TEXT = 'Add to basket';
const OUT_OF_STOCK_TEXT = 'Out of stock'
const ADDED_TO_BASKET_TEXT = 'Added to basket';

const AddToBasketButton = styled.button`
    background-color: #8ae437;
    color: black;
    border: 0;
    font-weight: 100;
    padding: 7px;
`

const OutOfStockButton = styled.button`
    background-color: #e46737;
    color: black;
    border: 0;
    font-weight: 100;
    padding: 7px;
`

const AddToBasket = (props) => {
    const [buttonText, setButtonText] = useState(IN_STOCK_TEXT);
    const [inStock, setInStock] = useState(false);

    useEffect(() => {
        if (props.shoe.stock.length > 0) {
            setButtonText(IN_STOCK_TEXT);
            setInStock(true);
        } else {
            setButtonText(OUT_OF_STOCK_TEXT);
            setInStock(false);
        }
    },[props.shoe.stock.length])

    const addToBasket = (product, size) => {
        if (product.stock.length > 0 && Object.entries(size).length) {
            alert('Adding ' + JSON.stringify(product.name) + ' of size ' + JSON.stringify(size) + ' to basket.')
            flashCheckoutButtonText(ADDED_TO_BASKET_TEXT);
        } else if (Object.entries(size).length === 0) {
            flashCheckoutButtonText('Select size');
        }
    }

    const flashCheckoutButtonText = (textToFlash) => {
        setButtonText(textToFlash);
            setTimeout(() => {
                setButtonText(IN_STOCK_TEXT)
            }, 1000);
    }

    return (
        <div>
            {inStock ? 
            
                <AddToBasketButton onClick={(e) => {addToBasket(props.shoe, props.size)}}>
                    {buttonText}
                </AddToBasketButton>
                :
                <OutOfStockButton disabled={true}>
                    {buttonText}
                </OutOfStockButton>
            }
        </div>
    );
}

export default AddToBasket;