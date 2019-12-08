import * as store from 'store'

interface StoreItem {
    value: any
    expiration: number
}
export default class StoreService {

    public setWithExpiration(key: string, value: any, expiration: number): void {
        const storeItem = {
            value: value,
            expiration: expiration
        } as StoreItem

        store.set(key, storeItem)
    }

    public set(key: string, storeItem: any): void {
        store.set(key, storeItem)
    }
    public get(key: string): any{
        return store.get(key)
    }

    public getIfNotExpired(key: string): any | null {
        const storedItem = store.get(key) as StoreItem

        if (storedItem) {
            const expiration = storedItem.expiration || 0
            if (expiration && expiration > 0) {
                const currentTime = new Date().getTime()
                console.log(`currentTime: ${currentTime}, expiration: ${expiration}, result: ${currentTime < expiration}`)
                if (currentTime < expiration) {
                    return storedItem.value
                }
                return null
            }
            return storedItem.value
        }
        return null
    }
}