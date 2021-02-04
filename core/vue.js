/*
 * @Author: wuzixuan
 * @Date: 2021-02-02 18:03:48
 * @description: Vue响应式简单实现
 * @LastEditors: wuzixuan
 * @LastEditTime: 2021-02-04 15:46:16
 */

 import Observer from './observer'

 class Conf {
     /**
      * Vue 基础配置
      * @param {string} el 挂载节点id
      * @param {object} data 初始数据 
      * @param {string} template HTML模板字符串 
      * @param {object} methods 方法集 
      */
    constructor(el, data, template, methods) {
        this.el = el
        this.data = data
        this.template = template
        this.methods = methods
    }
 }
class Vue {
    /**
     * 
     * @param {Conf} conf 配置
     */
    constructor(conf) {
        const root = this.render(conf.el, conf.template)
        this.initDataReactive(conf.data, root)
    }

    /**
     * 虚拟节点挂载
     * @param {string} el
     * @param {string} template 
     */
    render(el, template) {
        const root = document.querySelector(el)

        // TODO HTML模板渲染原理
        root.innerHTML = template
        return root
    }

    /**
     * 设置响应式对象
     * @param {object} data 
     * @param {Element} root
     */
    initDataReactive(data, root) {
        new Observer(data, root)
    }
}

/**
 * 模板转化为HTML
 */