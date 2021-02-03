/*
 * @Author: wuzixuan
 * @Date: 2021-02-02 18:03:55
 * @description: 观察者类简单实现
 * @LastEditors: wuzixuan
 * @LastEditTime: 2021-02-03 17:55:57
 */
export class Watcher {
    /**
     * 
     * @param {function} callback 回调函数
     */
    constructor(callback) {
        this.callback = callback
    }

    /**
     * 数据改变执行回调
     * @param {any} data 响应式数据
     */
    update(data) {
        this.callback(data)
    }
}
