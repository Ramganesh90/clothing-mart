import React from 'react';
import "./directory.styles.scss";
import MenuItem from '../menu-item/menu-item.component';

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selector";


const Directory = ({ directory }) => (
    <div className="directory-menu">
        {
            directory.sections.map(({ id, ...sectionKeys }) => (
                <MenuItem key={id} {...sectionKeys} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    directory: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
