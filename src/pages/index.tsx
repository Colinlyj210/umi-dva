import React, {Component} from 'react';
import {Button} from 'antd';
import {connect} from 'dva';
import styles from './index.css';


interface IProps {
  dispatch: any,
  count: any,
  loading: any,
}

interface IState {

}

@connect(({count, loading, tT}) => ({
  count,
  tT,
  loading: loading.effects['count/query'],
}))
export default class Index extends Component<IProps, IState> {

  componentDidMount() {
    console.log(this.props);
  }

  addNum = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'count/add',
      payload: {num: 1}
    })
  };

  queryAddNum = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'count/query',
      payload: {user: 'darcy'}
    })
  };

  render() {
    let {count, loading} = this.props;
    return (
      <div className={styles.normal}>
        <h1 style={{marginBottom: '20px'}}>{count.count}</h1>
        <div style={{marginBottom: '20px'}}>
          <Button onClick={this.addNum} type="primary">直接增加</Button>
        </div>
        <div>
          <Button loading={loading} onClick={this.queryAddNum} type="primary">获取数据增加</Button>
        </div>
      </div>
    );
  }
}
