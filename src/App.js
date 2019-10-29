import React, { Component } from 'react';
import Customer from './components/customer'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth:1080
  }
});

// customer 객체 초기화값 설정
const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': 'GihoKim',
    'birthday': '890811',
    'gender': 'Male',
    'job': 'Developer'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'Obama',
    'birthday': '510521',
    'gender': 'Male',
    'job': 'President'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'IU',
    'birthday': '930219',
    'gender': 'Female',
    'job': 'Singer'
  }
]

// Customer 객체에 해당값 넘겨주기
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {
              return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
            })}
          </TableBody>
        </Table>
        </Paper>
      </div>
    );
  }
}
/*
특정한 리스트(List)가 있을 때 해당 리스트의 각 원소에 특정한 문법을 적용한 결과 리스트를 반환합니다. 
다시 말해서 customers 배열에 있는 모든 원소에 대한 Customer Element를 반환하는 것입니다. 
쉽게 말해 그냥 반복문을 사용해 각 고객에 대한 정보를 출력하도록 명시한 것입니다.
또한 추가적으로 알아두면 좋은 점은 맵(Map)을 이용해 다수의 정보를 출력할 때는 key라는 이름의 Props를 사용해야 한다는 점입니다. 
이를 사용하지 않으면 자바스크립트 콘솔(Console)에 관련 오류가 출력됩니다.
*/

export default withStyles(styles)(App);