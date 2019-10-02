import React from 'react';

const Loading = (props) => {
    return (
        <div>
            {props.message ? <div>{props.message}</div> : <div>Loading...</div>}
        </div>
    )
}

export default Loading;
