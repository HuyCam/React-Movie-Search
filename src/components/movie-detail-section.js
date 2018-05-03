import React from 'react';


const DetailSection = (props) => {
    const [key, value] = props.detail;

    return (
        <li className="list-group-item">
          {value ? `${key}:` : null} {value}
        </li>
    );
}
export default DetailSection;