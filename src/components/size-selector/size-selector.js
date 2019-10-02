import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'


const SizeSelector = (props) => {
    const [selectedSize, setSelectedSize] = useState();

    const setSize = (size) => {
        setSelectedSize(size);
        props.setSize(size);
    }

    const renderSizeSelector = () => {
        let selector;

        if (props.shoe.stock.length > 0) {

            let options = props.shoe.stock.map((stock, index) => {
                return <Dropdown.Item key={index} eventKey={stock.size}>Size: {stock.size}</Dropdown.Item>
            });

            selector = <Dropdown onSelect={(eventKey) => setSize(eventKey)}>
                    <Dropdown.Toggle variant='' 
                        style={{borderRadius: '1px', 
                        fontWeight: '100',
                        backgroundColor: 'white'
                    }}>
                        {selectedSize ? 
                            <span>Size: {selectedSize} </span> : <span>Select size</span>}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {options}
                    </Dropdown.Menu>
            </Dropdown>
        }

        return selector;
    }
    return (
        <div>{renderSizeSelector()}</div>
    )
}

export default SizeSelector;