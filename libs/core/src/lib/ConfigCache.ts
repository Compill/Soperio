import config, { SoperioConfig } from "./defaultConfig";

export default class ConfigCache
{
    static instance = new ConfigCache();

    static get() 
    {
        return this.instance;
    }

    config: SoperioConfig;
    private listeners:any[] = []

    private constructor()
    {
        this.config = config;
    }

    private merge(newConfig: SoperioConfig): SoperioConfig
    {
        // TODO Future : add the possibilty to override and extends 
        // default condif the same way Tailwind does it
        return { ...config, ...newConfig };
    }

    switchConfig(newConfig: SoperioConfig)
    {
        this.config = this.merge(newConfig);
        this.listeners.forEach(listener => listener())
    }

    addListener(listener:any)
    {
        this.listeners.push(listener);
    }

    removeListener(listener: any)
    {
        this.listeners = this.listeners.filter(item => item !== listener)
    }
}