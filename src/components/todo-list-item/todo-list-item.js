import React, { Component } from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const {
            label, onDeleted, onToggleImportant, onToggleDone, important, done
        } = this.props;

        let classNames = 'todo-list-item';
        classNames += done === true ? ' done' : '';
        classNames += important === true ? ' important' : '';

        const style = {
            color: important ? 'tomato' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return(
            <span className={classNames}>
            <span
                className="todo-list-item-label"
                style={style}
                onClick={onToggleDone}
            >
                {label}
            </span>
            <span>
              <button
                  type="button"
                  className="btn btn-outline-success btn-sm"
                  onClick={onToggleImportant}
              >
                <i className="fa fa-exclamation"></i>
              </button>

              <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={onDeleted}
              >
                <i className="fa fa-trash-o"></i>
              </button>
            </span>
        </span>
        );
    }
}
