import React from 'react'; // React Component를 사용하기위함!
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render() {
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )
    }
}

// 내가 만든 Customer 컴포넌트를 export해주기 (다른 컴포넌트에서 이 컴포넌트를 사용하기 위함!)
export default Customer;