Architecture of the project
- node_modules
  - @soperio
    - ui
      - componentA
      - componentB
      - componentC
  - @auducia
    - componentA
    - otherDir
      - componentB
      - componentC


Extending theme is not the issue here as it's already covered
The issue is how to regenerate the types of the components

Right now, each components is hosting its types in his own folder

What if I were to generate all the types in one specific folder of soperio ? (one of its libs, be it theming or maybe componenttheming)

So, basically I could have an index file like this:
 ```ts
 export * from "./components/"
 ```

 Then I would generate another index file in the components folder, like this

 ```ts
 export * from "./ComponentA"
 export * from "./ComponentB"
 export * from "./ComponentC"
 export * from "./ComponentD"
 export * from "./ComponentE"
 ...
 ```

 I would, of course, also have to generate the component type files

 They would look like this

 ```ts
 import { SoperioComponent } from "@soperio/core";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { DisabledState, DisabledThemeProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "../ComponentStates";

type Variants = "default" | "light" | "outline" | "link" | "borderless";
type Sizes = "sm" | "md" | "lg" | "xl" | "x2";
type Corners = "default" | "square" | "pill";

export type VariantProps = {
  variant?: Variants;
  size?: Sizes,
  corners?: Corners;
};
export type GeneratedProps = SoperioComponent & VariantProps & SelectedState & DisabledState;

// TODO Export in other file, and import
type ConfigVariants<V extends { [k: string]: any; }, T> = {
  [key in keyof V]: { [Property in NonNullable<V[key]>]?: T; }
};

export interface ThemeProps extends SoperioComponent, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

export type Config = ComponentConfig<ThemeProps, ConfigVariants<VariantProps, ThemeProps>>;
export type ExtendConfig = ExtendComponentConfig<ThemeProps, Config>;
 ```


Then, developers would import their types like this:
```ts
import { GeneratedProps, ExtendConfig } from "@soperio/component_theming"
```

I guess I would have to rename the generic types to named types to avoid collusion
So, in index.ts, we would have

```ts
import { GeneratedProps as ComponentAProps, Config as ComponentAConfig, ExtendConfig as ComponentAExtendConfig} from "./ComponentA"
import { GeneratedProps as ComponentBProps, Config as ComponentBConfig, ExtendConfig as ComponentBExtendConfig} from "./ComponentB"
...
```

Let's forget about component typing generation, it's too difficult. Just offer good documentation and make types easy 



Now, let's talk about component json config file generation

Like the theme, we would do something like extendComponents

```
import { THEMING as soperioTheming } from "@soperio/ui"
import { THEMING as auduciaTheming } from "@auducia/ui"
import { THEMING as thirdPartyTheming } from "@thirdparty/ui"

const components = extendComponents({
    ...soperioTheming,
    ...auduciaTheming,
    ...thirdPartyTheming,
})
```

Or we can just put it in extendTheme and save the hassle of an extra variable and extra command in the CLI
