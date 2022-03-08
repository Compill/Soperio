import { defaultTheme } from "./defaultTheme";
import { Theme } from "./Theme";

export default class ThemeCache
{
    static instance = new ThemeCache();

    static get()
    {
        return this.instance;
    }

    theme: Theme;
    private listeners: any[] = []

    private constructor()
    {
        this.theme = defaultTheme;
    }

    private merge(newTheme: Theme): Theme
    {
        // TODO Future : add the possibilty to override and extends
        // default condif the same way Tailwind does it
        return { ...defaultTheme, ...newTheme };
    }

    switchTheme(newTheme: Theme)
    {
        this.theme = this.merge(newTheme);
        this.listeners.forEach(listener => listener())
    }

    addListener(listener: any)
    {
        this.listeners.push(listener);
    }

    removeListener(listener: any)
    {
        this.listeners = this.listeners.filter(item => item !== listener)
    }
}
