interface IHttpService {
    defaults: ng.IHttpProviderDefaults;
    pendingRequests: ng.IRequestConfig[];

    get<T>(url: string, config?: ng.IRequestShortcutConfig): Promise<ng.IHttpPromiseCallbackArg<T>>;
    delete<T>(url: string, config?: ng.IRequestShortcutConfig): Promise<ng.IHttpPromiseCallbackArg<T>>;
    head<T>(url: string, config?: ng.IRequestShortcutConfig): Promise<ng.IHttpPromiseCallbackArg<T>>;
    jsonp<T>(url: string, config?: ng.IRequestShortcutConfig): Promise<ng.IHttpPromiseCallbackArg<T>>;
    post<T>(url: string, data: any, config?: ng.IRequestShortcutConfig): Promise<ng.IHttpPromiseCallbackArg<T>>;
    put<T>(url: string, data: any, config?: ng.IRequestShortcutConfig): Promise<ng.IHttpPromiseCallbackArg<T>>;
    patch<T>(url: string, data: any, config?: ng.IRequestShortcutConfig): Promise<ng.IHttpPromiseCallbackArg<T>>;
}