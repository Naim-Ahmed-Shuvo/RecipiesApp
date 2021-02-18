import React, { Component } from 'react';
import '../App.css'
class Search extends Component {
    render() {
        const {search, handleSubmit, handleSearch} = this.props;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                            <h1 className="text-slantade tex-capitalize heading">
                                search recipies with <strong style={{ 
                                    color: "#fc5e03"
                                }}>Food2Fork</strong>
                            </h1>
                            <form>
                                <label>Search reipes seperated by comma</label>
                                <input type="text" class="form-control from-control-lg" placeholder="Search your desire........." onChange={handleSearch}></input>
                                <button type="submit" style={{
                                    position: "relative",
                                    top: -33,
                                    left: 343,
                                }}
                                onClick={handleSubmit}
                                >
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;