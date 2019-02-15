import {query} from '@/services/api';

export default {
  namespace: 'count',
  state: {
    count: 1,
  },
  effects: {
    *query({payload}, ss) {

      console.log("ss",ss);
      let {call, put}=ss;

      const response = yield call(query,payload);

      if(response.num>0){

      }else{

      }

      yield put({
        type: 'add',
        payload: {num: response.num}
      })

      // const response = yield call([query], payload);
      // yield put({
      //   type: 'add',
      //   payload: {num: response.num}
      // })
    }
  },
  reducers: {
    add(state, {payload}) {
      console.log("action",payload);
      console.log("state",state);

      return {
        ...state,
        count: state.count + payload.num
      }
    }
  }
}
