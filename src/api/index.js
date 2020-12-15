import request from '../utils/request'

export const User = {
    login: function(data) {
        return request({
            url: '/login',
            method: 'post'
        })
    },
    logout: function(data) {
        return request({
            url: '/login',
            method: 'post'
        })
    },
    getInfo: function(data) {
        return request({
            url: '/login',
            method: 'post'
        })
    }
}