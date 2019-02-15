import request from '@/utils/request';

export async function query(params) {
  return request('/api/query', {
    method: 'POST',
    body: params,
  });
}
