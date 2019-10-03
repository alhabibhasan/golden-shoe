import React , {useState, useEffect} from 'react';
import { getDataItem } from '../../api/getData';
import styled from 'styled-components';
import Loading from '../loading/Loading';
import {Image} from 'react-bootstrap';
import './tracking.css';

import ProgressBar from 'react-bootstrap/ProgressBar'

const TrackingPage = styled.div`
    margin: 5%;
    padding-bottom: 5%;
    background-color: whitesmoke;
    text-align: center;
    font-weight: 200;
`

const TrackingMessage = styled.h3`
    font-weight: 200;
`

const ProductName =styled.h2`
    text-align: right;
    font-weight: 200;
`

const ProductOrdered = styled.div`
    font-weight: 200;
`;

const TrackingDetails = styled.div`
    text-align: right;    
    margin-right: 4%;
    margin-top: 5%;
`

const TrackingStatus = styled.h4`
    font-weight: 200;
    text-align: left;
    margin-top: 35px;
`

const TrackingBar = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5%;
    margin-left: 5%;
`

const TrackingContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;

    @media only screen and (max-width: 650px){
        display: block;
    }
`

const EstimatedArrival = styled.div`
    text-align: left;
    margin-top: 5%;
    font-weight: 200;
`
const TrackingLog = styled.div`
`
const LogTimeUpdate = styled.td`
    text-align: left;
    color: gray;
`
const LogStatusUpdate = styled.td`
    text-align: left;
`
const LogTimeHeader = styled.th`
    color: gray;
`
const LogTable = styled.table`
    background-color: white;
    margin-top: 3%;
`

const Track = props => {
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDataItem(/*attribute*/'index', 
                    /*value*/ props.match.params.id, 
                    /*data type*/'tracking')
        .then(shoe => {
            if (shoe.length) {
                setOrder(shoe[0]);
                setLoading(false);
            }
        })
    }, [props.match.params.id]);

    const renderBar = () => {
        return <ProgressBar now={JSON.parse(order['tracking']['journey-completed'])} />
    }

    const humanizeTimeString = (timeString) => {
        return new Date(timeString.substring(0,19))
    }

    const renderTrackingLog = () => {
        let renderedLog = order.tracking.locationLog.map(log => {
            return (
                <tr>
                    <LogTimeUpdate>{humanizeTimeString(log.time).toUTCString()}</LogTimeUpdate>
                    <LogStatusUpdate>{log.message}</LogStatusUpdate>
                </tr>
            )
        });

        return ( <LogTable>
            <LogTimeHeader>Time</LogTimeHeader>
            <th>Status</th>
            {renderedLog}
        </LogTable> )

    }

    const getStatus = () => {
        return order.tracking.locationLog[order.tracking.locationLog.length - 1].status;
    }

    return (
        <TrackingPage>
            {loading ? <Loading/> : <div>
                <TrackingMessage>
                    Track your order
                </TrackingMessage>

                <TrackingContainer>
                    <TrackingBar>
                        <TrackingStatus>Status: {getStatus()}</TrackingStatus>
                        {renderBar()}
                        <EstimatedArrival>Estimated arrival: {order.tracking['estimated-arrival']}</EstimatedArrival>
                        <TrackingLog>{renderTrackingLog()}</TrackingLog>
                    </TrackingBar>
                    <TrackingDetails>
                        <ProductName>{order.name}</ProductName>
                        <ProductOrdered>{humanizeTimeString(order.ordered).toGMTString()}</ProductOrdered>
                        <Image className='tracking-image' src={order.image} alt={order.name} fluid/>
                    </TrackingDetails>
                </TrackingContainer>
            </div>}
        </TrackingPage>
    )
}

export default Track;