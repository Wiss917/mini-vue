/*
 * @Author: wuzixuan
 * @Date: 2021-02-02 18:04:09
 * @description: 被观察类简单实现
 * @LastEditors: wuzixuan
 * @LastEditTime: 2021-02-03 17:55:33
 */
import Watcher from "./watcher";

export class Observer {
  constructor() {
    this.observers = [];
  }
  /**
   *
   * @param {Watcher} watcher
   */
  addWatcher(watcher) {
    this.observers.push(watcher)
  }

  /**
   * 通知观察者更新
   * @param {any} data 响应式数据
   */
  notify(data) {
    this.observers.forEach(watcher => watcher.update(data))
  }
}
