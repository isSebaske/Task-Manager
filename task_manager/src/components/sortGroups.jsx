import React, { Component } from 'react';

const SortGroups = (props) => {
    const {onSort} = props
        return (
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h1 className="me-auto">Task List</h1>
                <nav className='d-flex list-unstyled align-items-center'>
                    <h3>Sort By</h3>
                    <li onClick={()=> onSort("title")} className="me-1 ms-2 btn">Title</li>
                    <li onClick={()=> onSort("task")} className="me-1 ms-1 btn">Task</li>
                    <li onClick={()=> onSort("category")} className="me-1 ms-1 btn">Category</li>
                    <li onClick={()=> onSort("severity.name")} className="me-1 ms-1 btn">Severity</li>
                    <li onClick={()=> onSort("completed")} className=" ms-1 btn">Completed</li>
                </nav>
            </div>
        );
}
 
export default SortGroups;