export default class HttpService implements IHttpService {
    /**
     * Runtime equivalent of the $httpProvider.defaults property. Allows configuration of default headers, withCredentials as well as request and response transformations.
     */
    public get defaults() : ng.IHttpProviderDefaults {
        return this.$http.defaults;
    }

    /**
     * Runtime equivalent of the $httpProvider.defaults property. Allows configuration of default headers, withCredentials as well as request and response transformations.
     */
    public set defaults(v : ng.IHttpProviderDefaults) {
        this.$http.defaults = v;
    }

    /**
     * Array of config objects for currently pending requests. This is primarily meant to be used for debugging purposes.
     */
    public get pendingRequests() : ng.IRequestConfig[] {
        return this.$http.pendingRequests;
    }

    /**
     * Array of config objects for currently pending requests. This is primarily meant to be used for debugging purposes.
     */
    public set pendingRequests(v : ng.IRequestConfig[]) {
        this.$http.pendingRequests = v;
    }

    static $inject = ["$http"];
    static className = "HttpService";
    constructor(private $http: ng.IHttpService) {
    }

    /**
     * Shortcut method to perform GET request.
     *
     * @param url Relative or absolute URL specifying the destination of the request
     * @param config Optional configuration object
     */
    get<T>(url: string, config?: ng.IRequestShortcutConfig): Promise<ng.IHttpPromiseCallbackArg<T>> {
        return this.toPromise(this.$http.get<T>(url, config));
    }

    /**
     * Shortcut method to perform DELETE request.
     *
     * @param url Relative or absolute URL specifying the destination of the request
     * @param config Optional configuration object
     */
    delete<T>(url: string, config?: ng.IRequestShortcutConfig): Promise<ng.IHttpPromiseCallbackArg<T>> {
        return  this.toPromise(this.$http.delete<T>(url, config));
    }

    /**
     * Shortcut method to perform HEAD request.
     *
     * @param url Relative or absolute URL specifying the destination of the request
     * @param config Optional configuration object
     */
    head<T>(url: string, config?: ng.IRequestShortcutConfig): Promise<ng.IHttpPromiseCallbackArg<T>> {
        return this.toPromise(this.$http.head<T>(url, config));
    }

    /**
     * Shortcut method to perform JSONP request.
     *
     * @param url Relative or absolute URL specifying the destination of the request
     * @param config Optional configuration object
     */
    jsonp<T>(url: string, config?: ng.IRequestShortcutConfig): Promise<ng.IHttpPromiseCallbackArg<T>> {
        return this.toPromise(this.$http.jsonp<T>(url, config));
    }

    /**
     * Shortcut method to perform POST request.
     *
     * @param url Relative or absolute URL specifying the destination of the request
     * @param data Request content
     * @param config Optional configuration object
     */
    post<T>(url: string, data: any, config?: ng.IRequestShortcutConfig): Promise<ng.IHttpPromiseCallbackArg<T>> {
        return this.toPromise(this.$http.post<T>(url, data, config));
    }

    /**
     * Shortcut method to perform PUT request.
     *
     * @param url Relative or absolute URL specifying the destination of the request
     * @param data Request content
     * @param config Optional configuration object
     */
    put<T>(url: string, data: any, config?: ng.IRequestShortcutConfig): Promise<ng.IHttpPromiseCallbackArg<T>> {
        return this.toPromise(this.$http.put<T>(url, data, config));
    }

    /**
     * Shortcut method to perform PATCH request.
     *
     * @param url Relative or absolute URL specifying the destination of the request
     * @param data Request content
     * @param config Optional configuration object
     */
    patch<T>(url: string, data: any, config?: ng.IRequestShortcutConfig): Promise<ng.IHttpPromiseCallbackArg<T>> {
        return this.toPromise(this.$http.patch<T>(url, data, config));
    }

    private toPromise<T>(ngPromise: ng.IHttpPromise<T>): Promise<ng.IHttpPromiseCallbackArg<T>> {
        return new Promise<ng.IHttpPromiseCallbackArg<T>>((resolve, reject) => ngPromise.then(resolve, reject));
    }
}