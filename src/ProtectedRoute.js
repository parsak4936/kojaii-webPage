import {Route , Redirect} from "react-router-dom";
import React from "react";

function ProtectedRoutes({
    component : Component,
    IsAutho :IsAutho,

    ...rest


                         }){
    return(
        <Route
            {...rest} render ={(props) => {
            if (IsAutho) {
                return <Component  />;
            } else {
                return (
                    <Redirect to={{pathname: "/", state: {from: props.location}}}/>

                );
            }
        }
        }


/>
    );


}
export default ProtectedRoutes;