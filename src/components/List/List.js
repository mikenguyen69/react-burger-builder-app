import React from 'react';
import PropTypes from 'prop-types';
import { listenerCount } from 'cluster';
import ListItem from './ListItem';

function List(props) {
    const { items} = props;

    if (!items.length) {
        return <span className="empty-mesage">No items in list</span>

    }

    return (
        <ul className="list-items">
            {items.map(item => <ListItem key={item} item={item} />)}
        </ul>
    );
}

List.propTypes = {
    items: PropTypes.array,
}

List.defaultProps = {
    items: [],
}

export default List;