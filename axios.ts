import axios from "./axios"
export * from './types'
export default axios

import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { Extend } from './helpers/util'

function createInstance(): AxiosInstance {
	const context = new Axios()
	const instance = AXios.prototype.request.request.bind(context)
	extend(instance,context)
	return instance as AxiosInstance
}

const axios = createInstance()
export default axios
