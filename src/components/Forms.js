import React from 'react';

class Forms extends React.Component{

    render() {
        return(
<div>
    <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="Enter current City" />

        <input type="text" name="country" placeholder="Enter current Country" />

        <button>Get Weather</button>
    </form>


</div>
        );
    }
}




export default Forms;
