import React, { Component } from "react";
import './item-status-filter.css';

class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    render(){
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const buttonClass = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button"
                        className={`btn ${buttonClass}`}
                        key={name}
                        onClick={() => {onFilterChange(name)}}
                >
                    {label}
                </button>
            );
        });

        return(
            <div className="btn-group item-status-filter">
                {buttons}
            </div>
        );
    }
}

export default ItemStatusFilter;