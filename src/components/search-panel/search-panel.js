import React, {Component} from "react";
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term)
    };

    render() {
        const searchText = 'Type here...';
        return(
            <div className="search-panel">
                <input
                    placeholder={searchText}
                    className="search-input form-control"
                    value={this.state.term}
                    onChange={this.onSearchChange}
                />

            </div>
        );
    }
};

