import './statuscard.css'

import React from 'react'

const StatusCard = props => {
    return (
        <div className='status-card'>
            {/* <div className="status-card__icon">
                <i className={props.icon}></i>
            </div> */}
            <div className="status-card__info" style={{
                paddingRight:'5px'
            }}>
                <h4>{props.count}</h4>
                <span>{props.title}</span>
                <span>{}</span>
            </div>
        </div>
    )
}

export default StatusCard
