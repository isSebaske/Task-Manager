import React from 'react';

const ListGroup = (props) => {
    const { categorys, onItemSelect, selectedItem } = props;

    return (
        <ul className="list-group mt-5 ms-3 shadow ">
            {categorys.map(item =>
                <li onClick={() =>
                    onItemSelect(item)}
                    key={item}
                    className={item === selectedItem? "list-group-item active" : "list-group-item"}
                >
                    {item}
                </li>)}
        </ul>);
};

 
export default ListGroup    ;