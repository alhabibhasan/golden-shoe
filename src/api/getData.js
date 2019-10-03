import shoes from '../data/shoes';
import orders from '../data/orders';
import orderTracking from '../data/order-tracking';

const dataMap = {
    'shoes' : shoes,
    'orders': orders,
    'tracking': orderTracking,
}

const getData = (dataType) => {
    return new Promise(function(resolve) {
        setTimeout(resolve, 100, dataMap[dataType]);
    });
}

const getDataItem = (attribute, value, dataType) => {
    return new Promise(function(resolve) {
        let jsValue;
        try {
            jsValue = JSON.parse(value);
        } catch (e) {
            jsValue = value;
        }
        let dataItem = dataMap[dataType].filter(element => element[attribute] === jsValue);
        setTimeout(resolve, 100, dataItem);
    });
}

export {
    getData,
    getDataItem
}