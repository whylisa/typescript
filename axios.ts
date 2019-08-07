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


























