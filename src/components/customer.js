import React from 'react'; // React Component를 사용하기위함!


class Customer extends React.Component {
    render() {
        return(
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render(){
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

// 내가 만든 Customer 컴포넌트를 export해주기 (다른 컴포넌트에서 이 컴포넌트를 사용하기 위함!)
export default Customer;