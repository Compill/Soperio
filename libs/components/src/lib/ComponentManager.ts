import { ComponentConfig, MultiPartComponentConfig } from "./ComponentConfig";
import { SoperioComponent } from "./SoperioComponent";

export class ComponentManager
{
    static components: Record<string, ComponentConfig<SoperioComponent> | MultiPartComponentConfig<SoperioComponent>> = {};

    static registerComponent<T extends SoperioComponent, C extends ComponentConfig<T> | MultiPartComponentConfig<T>>(name: string, componentConfig: C)
    {
        this.components[name] = componentConfig;
    }

    static getComponentConfig(name: string): ComponentConfig<SoperioComponent> | MultiPartComponentConfig<SoperioComponent> | undefined
    {
        // TODO Merge with config from soperio-components.config.ts
        // Do the merge at startup, instead of every time
        // Or maybe cache the result
        return this.components[name];
    }
}