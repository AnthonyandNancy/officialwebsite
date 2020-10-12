import request from '../utils/request'

export function getList() {
  return request({
    url: '/home/swiperdata',
    method: 'get'
  })
}

