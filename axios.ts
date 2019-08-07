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


export default function dispatchRequest(config: AxiosRequestConfig) : AxiosPromise{
	processConfig(config)
	return xhr(config).then(res => {
		return transformResponseData(res)
	})
	
}

function processConfig(config: AxiosRequestConfig): void {
	config.url = transfromURL(config)
	config.headers = taransformHeaders(config)
	config.data = tansformRequestData(config)
}
function transformURL(config: AxiosRequestConfig): string{
	const ( url , parms ) = config
	return buildURL(url !,params)
}
function transformRequstData(config:AxiosRequestConfig): any {
	return transformRequest(config.data)
}
function transformHeaders(config:AxiosRequstConfig): any{
	const { headers = {},data } = config
	return processHeaders(headers,data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
	res.data = transformResponse(res.data)
	return res
}
interface Interceptors {
	request: InterceptorManager<AxiosRequestConfig>
	response: InterceptorManager<AxiosResponse>
}
interface PromiseChain<T> {
	resolved: ResolvedFn<T> | ((config: AxiosRequestConfig) => AxiosPromise)
	rejected?: RejectedFn
}

export default class Axios {
	interceptors: Interceptors
	
	constructor() {
		this.interceptors = {
			request: new InterceptorManager<AxiosRequestConfig>(),
			response: new InterceptorManager<AxiosResponse>()
		}
	}
	
	request( url: any,config?: any): AxiosPromise {
		if(typeof url === 'string') {
			if(!config) {
				config = {}
			}
			config.url = url
		}else {
			config = url 
		}
		const chain: PromiseChain<any>[] = [
		  {
		  	resolved: dispatchRequst,
		  	rejected: undefined
		  }
		]
		this.interceptors.reqeust.forEach(interceptor => {
			chain.unshift(interceptor)
		})
		this.interceptors.response.forEach(interceptor => {
			chain.push(interceptor)
		})
		
		let promise = Promise.resolve(config)
		while (chain.length) {
			const { resolved, rejected} = chain.shift()!
			promise = promise.then(resolved,rejected)
		}
		return promise
	}
	get(url: string,config?: AxiosRequestConfig): AxiosPromise {
		return this._requestMethodWithoutData('get',url,config)
	}
	
	delete(url: string,config?: AxiosRequestConfig): AxiosPromise {
		return this._requestMethodWithoutData('delete',url,config)
	}
	head(url: string,config?: AxiosRequestConfig): AxiosPromise {
		return this._requestMethodWithoutData('head',url,config)
	}
	options(url: string,config?: AxiosRequestConfig): AxiosPromise {
		return this._requestMethodWithoutData("options",url,config)
	}
	post(url:string,data?: any,config?: AxiosRequestConfig): AxiosPromise {
		return this._requestMethodWithoutData('post',url,data,config)
	}
	put 
	petch
	_requestMethodWithoutData(
		method: Method,
		url: string,
		config?:AxiosRequestConfig
	): AxiosPromise {
		return this.reqeust(
			
			Object.assign(config || {} ,{
				method,
				url
			})
		)
	}
	_requestMethodWithoutData(
		method: Method,
		url: string,
		data?: any,
		config?: AxiosRequestConfig
	): AxiosPromise{
		return this.request(
			Object.assign(config || {} ,{
				method,
				url,
				data
			})
		)
	}
}

export function transformRequest(data: any): any {
	if(isPlainObject(data)) {
		return JSON.stringify(data)
	}
	return data 
}

export function transformResponse(data:any) {
	if(typeof data === 'string') {
		try {
			data = JSON.parse(data)
		}catch (e) {
			
		}
	}
	return data
}

export function processHeaders(headers: any,data: any) {
	normalizeHeaderName(headers,'content-Type')
	if(isPlainObject(data)) {
		if(headers && !headers['Content-Type']) {
			heanders['Content-Type'] = 'application/json;charset=utf-8'
		}
	}
	return headers
}

export function parseHeaders(headers: string): any {
	let parsed = Object.create(null)
	if(!headers) {
		return parsed
	}
	headers.split('\r\n').forEach(line => {
		let [key,val] = line.split(":")
		key = key.trim().toLowerCase()
		
		if(!key) {
			return 
		}
		if(val) {
			val = val.trim()
		}
		parsed[key] = val
	})
	return parsed
}

export function idDate(val:any):val is Date {
	return toString.call(val) === '[object Date]'
}

export function isPlainObject(val: any): val is Object {
	return toString.call(val) === '[object Object]'
}

export function extend<T,U>(to:T,from: U):T & U {
	for(const key in from ) {
		(to as T & U)[key] = from[key] as any
	}
	return to as T & U 
}










