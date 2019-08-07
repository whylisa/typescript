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

export type Method = {
	| 'get'
	| 'GET'
	| 'delete'
	|
	|
	|
	|
	|
	|
	|
	|
	|
	|
	|
	|
	
}

export interface AxiosRequestConfig {
	url? string
	method?: Method
	data?: any
	params?:any
	responseType?: XMLHttpRequestResponseType
	timeout?: number
}

export interface AxiosResponse<T = any> {
	data: T
	status: number
	statusText: string
	headers: any
	configL: AxiosRequestConfig
	request: any
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>>{}
export interface AxiosError extends Error {
	config: AxiosRequestConfig
	code?: string
	request?: any
	response?: AxiosResponse
	isAxiosError: boolean
}
export interface Axios {
	interceptors: {
		request: AxiosInterceptorManage<AxiosRequestConfig>
		response: AxiosInterceptorManage<AxiosResponse>
	}
	
	request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>
	get<T = any>(url: string,config?: AxiosRequestConfig): AxiosPromise<T>
	delete<T = any>(url:string,config?: AxiosRequestConfig): AxiosPromise<T>
	head<T = any>(url: string,config?: AxiosRequestConfig): AxiosPromise<T>
	options<T = any>(url:string, config?: AxiosRequestConfig): AxiosPromise<T>
	put
	petch
}
export interface AxiosInstance extends Axios{
	<T = any>(config: AxiosRequestConfig): AxiosPromise<T>
	<T = any>(url: string,config ?: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosInterceptorManager<T> {
	use(resolved: ResolvedFn<T>,rejected?: RejecteFn): number
}

export interface ResolveFn<T> {
	(val: T): T | Promise<T>
}
export interface RejectedFn {
	(error: any):any
}

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
	return new Promise((resolve,reject) => {
		const { data = null,url,method = 'get',headers,responseType,timeout } = config
		const request = new XMLHttpRequest()
		
		if(responseType) {
			request.responseType = responseType
		}
		if(timeout) {
			request.timeout = timeout
		}
		request.open(method.toUpperCase(),url!,true)
		
		request.onreadystatechange = function handleLoad() {
			if(request.readyState !== 4) {
				return 
			}
			
			if(request.status === 0) {
				return 
			}
			
			const responseHeaders = parseHeaders(request.getAllResponseHeaders())
			const responseData = 
			  responseType && responseType != 'text' ? resquest.reponse : request.responseText
			const response: AxiosResponse = {
				data: responseData,
				status: request.status,
				statusText: request.statusText,
				headers: responseHeaders,
				config,
				request
			}
			handleResponse(response)
		}
		
		request.onerror = function handleError() {
			reject(createError('Network Error',config,null,request))
		}
		request.ontimeout = function handleTimeout() {
			reject(
				createError(`Timeout of ${config.timeout} ms exceeded`,config,'ECONNABORTED',request)
				
			)
		}
		Object.keys(headers).forEach(name => {
			if(data === null && name.toLowerCase() === "content-type") {
				delete headers[name]
			}else {
				request.setRequestHeader(name,headers[name])
			}
		})
		request.send(data)
		function handleResponse(response: AxiosResponse): void {
			if(response.status >= 200 && response.status < 300) {
				resolve(response)
			}else {
				reject(
					createError(
						`Request faild with status code ${response.status}`
						,config,
						null,
						request,
						response
					)
				)
			}
		}
	})
}
interface Interceptor<T> {
	resolved: ResolvedFn<T>
	rejected?: rejectedFn
}

export default class InterceptorManager<T> {
	private interceptors: Array<Interceptor<T> | null>
	
	constructor() {
		this.interceptors = []
	}
	use(resolved: ResolvedFn<T>,rejected?: Rejected?: RejectedFn): number {
		this.interceptors.push({
			resolved,
			rejected
		})
		return this.interceptors.length - 1
	}
	forEach(fn: (interceptor: interceptor<T>) => void): void {
		this.interceptors.forEach(interceptor => {
			if(interceptor !== null) {
				fn(interceptor)
			}
		})
	}
	eject(id: number): void {
		if(this.interceptors[id]) {
			this.interceptors[id] = null
		}
	}
}

























