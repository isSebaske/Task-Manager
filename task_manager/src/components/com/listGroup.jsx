import React from "react";

const ListGroup = (props) => {
  const { categorys, onItemSelect, selectedItem } = props;

  return (
    <div className=" mt-2 ms-3 ">
      <h3>Filter By</h3>
      <ul className="list-group btn-group-vertical shadow">
        {categorys.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item}
            className={
              item === selectedItem
                ? "list-group-item btn active "
                : "list-group-item btn btn-light "
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
