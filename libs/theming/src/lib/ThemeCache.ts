export class ThemeCache
{
    private static instance = new ThemeCache();

    static get()
    {
        return this.instance;
    }

    private cache:any;

    private constructor()
    {
        this.cache = {}
    }

    clear()
    {
        this.cache = {}
    }

    put(property: string, value: any)
    {
        this.cache[property] = value
    }

    get(property:string): any
    {
        return this.cache[property]
    }
}
