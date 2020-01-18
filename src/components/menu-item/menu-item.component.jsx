import React from 'react';
import "./menu-item.styles.scss";

import { withRouter } from 'react-router-dom';

const MenuItem = (props) => (
    <div style={{ "backgroundImage": `url(${props.imageUrl})` }}
        className={`${props.size} menu-item`}
        onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
        <div className="content">
            <h1 className="title">{props.title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);