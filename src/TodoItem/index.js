import React from "react";
import './TodoItem.css'
import {IoIosCheckmarkCircle} from "react-icons/io"
import {BsDashCircleFill} from "react-icons/bs"

function TodoItem(props){
    return(
        <li className="TodoItem">
            <IoIosCheckmarkCircle className={`Icon Icon-check ${props.completed && 'Icon Icon-check--active'}`}
            onClick={props.onComplete} size={25}/>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
                </p>
            <BsDashCircleFill className="closeButton" onClick={props.onDelete} size={25}/>
        </li>
    );
}

export {TodoItem};