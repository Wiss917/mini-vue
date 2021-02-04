/*
 * @Author: wuzixuan
 * @Date: 2021-02-03 18:02:11
 * @description: 被观察类简单实现
 * @LastEditors: wuzixuan
 * @LastEditTime: 2021-02-04 14:55:15
 */

import Watcher from "./watcher";

/**
 * 提供用来收集观察者（ addWatcher ）方法和通知观察者（ notify ）方法
 * dependency 依赖收集
 */ 
export class Dep {
    constructor() {
        this.dependencies = [];
      }
      /**
       *
       * @param {Watcher} watcher 观察者
       */
      addWatcher(watcher) {
        this.dependencies.push(watcher)
      }
    
      /**
       * 通知观察者更新
       * @param {any} data 响应式数据
       */
      notify(data) {
        this.dependencies.forEach(watcher => watcher.update(data))
      }
}
