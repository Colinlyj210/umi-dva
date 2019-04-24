/**
 * title: test
 */
import React, {Component} from 'react';
import {Button} from 'antd';
import {connect} from 'dva';
import styles from './index.css';
import Link from 'umi/link';


@connect(({count, loading, tT}) => ({
  count,
  tT,
  loading: loading.effects['count/query']
}))
class Index extends Component {

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
        <div>
          <Link to="/test">/test</Link>
        </div>
        <div>
          <Link to="/123/aa">/aa</Link>
        </div>
        <div>
          <Link to="/test/test">/test/test</Link>
        </div>
        <div>
          <Link to="/test/123">/test/123</Link>
        </div>
        <div>
          <Link to="/test/index">/test/index</Link>
        </div>
      </div>
    );
  }
}

export default Index;

// export default connect(({ count }) => ({
//   count,
// }))(Index);
