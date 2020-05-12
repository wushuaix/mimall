// 封装Storage
const STORAGE_KEY = 'mall'
    //取出所有Storage中的值
export default {
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getStorage()[module_name]
            val[key] = value
            this.setItem(module_name, val)
        } else {
            let val = this.getStorage()
            val[key] = value
            window.sessionStorage.setItem(STORAGE_KEY, val)
        }
    },
    //获取某一模块下的属性
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            if (val) return val[key]
        } else {
            return this.getStorage()[key]
        }

    },
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || {})
    },
    clear(key, module_name) {
        let val = this.getStorage()
        if (module_name) {
            delete val[module_name][key]
        } else {
            delete val[key]
        }
        this.setItem(val)
    }
}