/*
 * @Author: wuzixuan
 * @Date: 2021-02-02 18:04:09
 * @description: 观察者模式简单实现
 * @LastEditors: wuzixuan
 * @LastEditTime: 2021-02-04 15:12:29
 */
import Watcher from "./watcher";
import Dep from "./dep";

export class Observer {
  /**
   * @param {Element} vmNode 虚拟节点
   * @param {object} initData 响应式数据
   */  
  constructor(vmNode, initData) {
    this.reactive(vmNode, initData);
  }

  /**
   * @param {Element} vmNode 虚拟节点
   * @param {object} initData 响应式数据
   */
  reactive(vmNode, initData) {
    for (let key in initData) {
        let val = initData[key]
        let dep = new Dep()

        Object.defineProperty(initData, key, {
            enumerable: true,
            configurable: true,
            get() {
                let watcher = new Watcher(val => vmNode.innerHTML = val)
                dep.addWatcher(watcher)
                return val
            },
            set(newVal) {
                Dep.notify(newVal)
                initData[key] = newVal
            }
        })
    }
  }
}
