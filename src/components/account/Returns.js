import React , {useState, useEffect} from 'react';
import { getDataItem } from '../../api/getData';
import Loading from '../loading/Loading';
import styled from 'styled-components';

const SelectReturn = styled.div`
    height: 60vh;
    overflow: scroll;
`

const SelectedReturn = styled.div`
`

const ReturnPage = styled.div`
    margin: 5%;
    background-color: whitesmoke;
    text-align: center;
    font-weight: 200;
`

const SorryMessage = styled.h3`
    font-weight: 200;
`

const ReturnableOrders = styled.div`
    background-color: lightgray;
`

const ReturnsMoreInfo = styled.div`
    margin-top: 1%;
    margin-bottom: 1%; 
`

const RefundTotal = styled.div`
    margin-top: 1%;
`

const PrintReturnLabel = styled.button`
    background-color: #e46737;
    color: black;
    border: 0;
    font-weight: 100;
    padding: 7px;
`

const PickReturn = styled.div`
`

const CURRENT_USER_EMAIL = 'riosrosales@zenthall.com';

const Returns = (props) => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [orderToReturn, setOrderToReturn] = useState({});
    const [reasonForReturn, setReasonForReturn] = useState('');
    const [returnMethod, setReturnMethod] = useState('');

    useEffect(() => {
        getDataItem(/*attribute*/'email', 
                                /*value*/ CURRENT_USER_EMAIL, 
                                /*data type*/'orders')
        .then(orders => {
            setOrders(orders)
            setLoading(false);
        })
    })

    const renderReturns = () => {
        let renderedReturns = orders.map(order => {
            let dateOfOrder = new Date(order.ordered.substring(0,19)).toGMTString()
            return (
                <ReturnableOrders key={order._id}>
                    {order.name}
                    
                    <div>
                        Order total: £{order.total}
                    </div>
                    <div>
                        Order ID: <i>{order._id}</i>
                    </div>
                    <div>
                        Purchased on: {dateOfOrder}
                    </div>
                    <div>
                        <img src={order.image} alt={'Image of ' + order.name}/>
                    </div>
                    <PickReturn>
                        <label htmlFor="selectReturn">Return</label>
                        <input type="radio" 
                                name="selectReturn" 
                                value={JSON.stringify(order)}
                                onChange={(e) => setOrderToReturn(JSON.parse(e.target.value))}/>
                    </PickReturn>
                    <hr/>
                </ReturnableOrders>
            )
        })
        return (
            <div>
                <SelectReturn>
                    <form>
                        {renderedReturns}
                    </form>
                </SelectReturn>
            </div>
        );
    }

    const renderItemToReturn = () => {
        if (Object.keys(orderToReturn).length === 0) {
            return (
                <SelectedReturn>
                    Please select the item you want to return from the list below.
                </SelectedReturn>
            )
        } else {
            let dateOfOrder = new Date(orderToReturn.ordered.substring(0,19)).toGMTString()
            return (
                <SelectedReturn>
                    You want to return the {orderToReturn.name}'s which you ordered on {dateOfOrder}.
                    <hr/>

                    {renderReasonForReturn()}
                    {
                        reasonForReturn ? 

                        <div>
                            <RefundTotal>
                                This will give you a refund of £{orderToReturn.total}<small>*</small>    
                                <br/>
                                <small>
                                    * Refunds will be issued after we recieve the item and have carried out a full inspection. 
                                    T&amp;C's apply. Your statutory rights are not affected.
                                </small>
                            </RefundTotal>
                            <hr/>

                            {renderReturnMethods()}

                            {returnMethod ? 
                                <PrintReturnLabel onClick={(e) => alert('Would open modal/dialog to print returns label here.')}>
                                Print {returnMethod} return label
                                </PrintReturnLabel>
                            : 
                            <div>
                                Please select a returns method.
                            </div>}
                        </div>

                        : <div>
                            Please select a reason.
                        </div>
                    }

                    
                </SelectedReturn>
            )
        }
    }

    const renderReturnMethods = () => {
        let returnPointFinderUrls = {
            'Collect+': 'https://www.collectplus.co.uk/store-locator?v=2',
            'Royal Mail': 'https://www.royalmail.com/services-near-you#/'
        };

        let moreInfo = <div/>;
        if (returnMethod) {
            moreInfo = <ReturnsMoreInfo>
                Find your nearest {returnMethod} drop off point <a target='_new' href={returnPointFinderUrls[returnMethod]}>here</a>.
            </ReturnsMoreInfo>
        }

        return (
            <div>
                <select name="returnMethod" id="returnMethod" onChange={(e) => setReturnMethod(e.target.value)}>
                    <option value="">Select method</option>
                    <option value="Collect+">Collect+</option>
                    <option value="Royal Mail">Royal Mail</option>
                </select>
                {moreInfo}
            </div>
        )
    }

    const renderReasonForReturn = () => {
        return (
            <div>
                <select onChange={(e) => setReasonForReturn(e.target.value)} name="reasonForReturn">
                <option value="">Select Reason</option>
                    <option value="Wrong fit">Wrong fit</option>
                    <option value="Found better price elsewhere">Found better price elsewhere</option>
                    <option value="Didn't like it">Didn't like it</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        )
    }

    return (
        <ReturnPage>
            <SorryMessage>
                We're sorry that things did go as expected.
            </SorryMessage>

            <div>
                {renderItemToReturn()}
            </div>

            <hr/>

            <small>
                Showing eligible returns for {CURRENT_USER_EMAIL}
            </small>

            <div>
                {loading ? <Loading/> : renderReturns()}
            </div>

        </ReturnPage>
    )
}

export default Returns;
