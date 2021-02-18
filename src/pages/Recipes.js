import React, { Component } from 'react';
import RecipeList from '../components/RecipeList'
import Search from '../components/Search';
import axios from 'axios';
import {recipes} from '../store/recipes';

class Recipes extends Component {
    // constructor(props){
    //     super(props);
    // }
   
    state = {
        recipes: recipes,
        search: "",
        // found: false,
    }

//     componentDidMount(){
//         axios.get("https://pastebin.com/raw/4Jru1gqs")
//        .then((response) => {
//            console.log(response);
//        })
//    ;
//     }

    handleSearch = (event) => {
        this.setState({
            search: event.target.value,
           
        })
    }
   
    handleSubmit = (event) => {
        event.preventDefault();
       this.setState({
           recipes: this.state.recipes.filter((item)=>{
               if(item.name.toLocaleLowerCase() === this.state.search.toLocaleLowerCase()){
                   
                   return item;
                //    this.state.found = true;
               } else {
                   return false
               }
           })
       })
    }
    render() {
        
        return (
            <div>
                 <Search search={this.state.search} handleSearch={this.handleSearch} handleSubmit={this.handleSubmit}/>
                 <RecipeList recipes={this.state.recipes}/>
                
            </div>
        );
    }
}

export default Recipes;