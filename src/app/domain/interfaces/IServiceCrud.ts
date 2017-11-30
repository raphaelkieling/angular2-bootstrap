export interface IServiceCrud {
    getAll(url)
    getUnique(url,id:any)
    post(url,data)
    put(url,data)
    delete(url,id)
}