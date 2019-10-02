import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import styled from 'styled-components';

const Welcome = styled.div`
    text-align: center;
    margin-top: 30vh;
`

const LinkItem = styled.div`
    margin: 5vh;
`

const Index = (props) => {
    return (
        <Welcome>
            Welcome to the store!

            <div>
                <LinkItem>
                    <Link to='/'>Home</Link>
                </LinkItem>
                
                <LinkItem>
                    <Link to='/shoes'>See shoes</Link>
                </LinkItem>
                
                <LinkItem>
                    <Link to='/returns'>Returns</Link>
                </LinkItem>
                
          </div>
        </Welcome>
    );
}

export default Index;