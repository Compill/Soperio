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
        return this.components[name];
    }
}