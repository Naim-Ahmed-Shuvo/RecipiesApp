import React, { useEffect, useState } from "react";
import { recipes } from "../store/recipes";
import { Link } from "react-router-dom";

const SingleRecipe = (props) => {
  const [data, setData]= useState(null)

  useEffect(()=> {
    const nameParams = window.location.toString().split('/')
    const name = nameParams[nameParams.length-1];

    const filteredRecipes = recipes.filter((item, index)=> {
      return item.name === name;
    })
    setData(filteredRecipes[0]);

    console.log(name);
  },[])

  if (!data) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h5 className="heading">Loading Recipe.....</h5>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
          <img src={data.image} alt={data.name} className="card-img-top" style={{
            height: "329px",
            width: "317px",
            position: "relative",
            top: "12px",
            left: "218px",
          }}></img>

            <div
              className="text-center heading"
              style={{
                float: "left",
                margin: "12px 0 0 47px",
              }}
            >
              <h5
                style={{
                  color: "#c71e78",
                }}
              >
                {data.name}
               
              </h5>
              <p>Recpe</p>
              <ul>
                <li>sdvdssdsd</li>
                <li>sdvdssdsd</li>
                <li>sdvdssdsd</li>
                <li>sdvdssdsd</li>
                <li>sdvdssdsd</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// class SingleRecipe extends Component {
//   constructor(props) {
//     super(props);
//     // const id ;
//     // console.log(this.props);
//     this.state = {
//       recipes: recipes,
//       id: 2,
//       loading: false,
//       data: [],
//       loop: [1, 2, 3, 4, 5, 6, 7]
//     };


//   }

//   componentDidMount() {
//     this.setState({
//       data: this.state.recipes.filter((item) => {
//         if (item.id == 2) {
//           return item;
//         } else {
//           return {
//             message: "No id matched"
//           }
//         }
//       })
//     });
//   }

//   componentWillMount() {

//   }

//   render() {
//     // const { name, image, description } = this.state.recipe;
//     console.log(this.state.data);
//     if (this.state.loading) {
//       return (
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <h5 className="heading">Loading Recipe.....</h5>
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8">
//               {/* <img src={data.image}></img> */}

//               <div
//                 className="text-center heading"
//                 style={{
//                   float: "left",
//                   margin: "12px 0 0 47px",
//                 }}
//               >
//                 <h5
//                   style={{
//                     color: "#c71e78",
//                   }}
//                 >
//                   Bake Egg
//                 </h5>
//                 <p>Recpe</p>
//                 <ul>
//                   <li>sdvdssdsd</li>
//                   <li>sdvdssdsd</li>
//                   <li>sdvdssdsd</li>
//                   <li>sdvdssdsd</li>
//                   <li>sdvdssdsd</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
// }

export default SingleRecipe;
