import React from 'react';

const ListGroup = (props) => {
    const { tasks, textProperty, valueProperty, onItemSelect, selectedItem } = props;

    return (
        <ul className="list-group mt-5 ms-3 ">
            {tasks.map(item =>
                <li onClick={() =>
                    onItemSelect(item)}
                    key={item[valueProperty]}
                    className={item === selectedItem? "list-group-item active" : "list-group-item"}
                >
                    {item[textProperty]}
                </li>)}
        </ul>);
};

ListGroup.defaultProps = {
    textProperty: "category",
    valueProperty: "_id"
}
 
export default ListGroup    ;