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
        this.cache = {
            color: {},
            colorize: {},
            colorTheme: {},
            alphaColor: {},
            prop: {}
        }
    }

    clear()
    {
        this.cache = {
            color: {},
            colorize: {},
            colorTheme: {},
            alphaColor: {},
            prop: {}
        }
    }

    put(type: string, property: string, value: any)
    {
        this.cache[type][property] = value
    }

    get(type:string, property:string): any
    {
        return this.cache[property]
    }
}
