# Component Typings generation via CLI

https://chakra-ui.com/docs/styled-system/theming/component-style

https://github.com/chakra-ui/chakra-ui/blob/main/tooling/cli/src/command/tokens/extract-component-types.ts

Le but est de générer les types de composants. Comme pour Chakra UI, on peut ajouter des "traits" qui sont des styles prédéfinis de composants.

Par exemple, un bouton peut avoir :
- un variant par défaut avec un background opaque
- un variant "light" avec un background semi transparent
- un variant "outline" avec un background transparente et une bordure de coulour
- un variant "link" avec juste le texte du bouton
- un variant "borderless" avec un background qui ne s'affiche que sur le hover

A l'inverse de Chakra UI, on ne limite pas la définition de "traits" à juste "variant" et "size".

En gros, on a donc des variants, comme pour bootstrap. Mais on peut aussi ajouter d'autres variants qui ne sont pas des variants type bootstrap, comme "size" ou "corners"

On peut donc avoir un composant avec 3 traits différents:
- variant: default, light, outline, link, borderless
- size: sm, md, lg, xl
- corners: default, pill, square

## Config object

```json 
{
    defaultProps?: SoperioComponent & T,
    defaultVariants?: { [key: string]: string; };
    variants?: ConfigVariants<C, T> | undefined;
}

{
    defaultProps: {
        mx: "2",
        pt: "5"
    },
    defaultTraits:
    {
        variant: "default",
        size: "default",
        corners: "default"
    }
    traits: {
        variant: {
            default: {
                // soperio props
            },
            light: {
                // soperio props
            },
            outline: {
                // soperio props
            },
            link: {
                // soperio props
            },
            borderless: {
                // soperio props
            }
        },
        size: {
            sm: {
                // soperio props
            },
            md: {
                // soperio props
            },
            default: {
                // soperio props
            },
            lg: {
                // soperio props
            },
            xl: {
                // soperio props
            }
        },
        corners: {
            default: {
                rounded: "2"
            },
            pill: {
                rounded: "100"
            },
            square: {
                rounded: "0"
            }
        }
    }
}
```

Dans l'exemple ci-dessus (pour un bouton), les traits de Soperio sont `variant`, `size` et `corners`

Variant définit le style principal du bouton
Size modifie seulement la taille du bouton
Corners modifie seulement les arrondis


Chakra UI se contente de seulement définir variant et size. Soperio permet de définir autant de traits que l'on souhaite.

`defaultProps` constitue les propriétés initiales du composant, le style qui va être appliqué à tous les variants (même si on peut overrider ces propriétés dans les variants)

`defaultTraits` défini le trait par défaut de chaque trait (ici, variant, size et corners, on applique le trait `default` de chaque)

## Composant multi part

https://chakra-ui.com/docs/styled-system/theming/component-style#styling-multipart-components

Même idée que Chakra UI.

Un composant peut contenir plusieurs sous composants. Exemple: Une Card contient un header, un footer, et le body.

On a donc besoin de pouvoir definir le style de chaque composant: Card, Header, Body, Footer.

On ajoute une propriété `subComponents` pour définir un composant comme étant un composant multi part (il faudra pouvoir faire la différence dans le CLI entre un composant normal et un composant multi part)

Les valeurs de `defaultProps` et `traits` changent alors pour pouvoir appliquer des styles à chaque composant

Ex pour defaultProps, composant normal

```json
defaultProps: 
{
    mx: "2",
    pt: "10"
}
```

Composant multipart
```json
defaultProps: 
{
    card: {
        mx: "2"
    },
    header: {
        h: "56px",
        p: "3",
        fontSize: "lg"
    },
    footer: {
        h: "56px",
        p: "3",
        fontSize: "md"
    },
    header: {
        p: "3",
        fontSize: "md",
        textColor: "black-800"
    }
},
```

```json
{
    defaultTraits:
    {
      variant: "default",
      corners: "default",

    },
    defaultProps: 
    {
      card: {
        mx: "2"
      }
    },
    subComponents: ["card", "header", "content", "footer"],
    traits:
    {
      variant:
      {
        default:
        {
          card:
          {
            bgColor: darkMode ? theme.background2 : theme.background1,
            border: "0",
            textColor: theme.textDark1
          }
        },
        bordered:
        {
          card:
          {
            bgColor: darkMode ? theme.background2 : theme.background1,
            border: "2",
            borderColor: theme.border1,
          },
        },
      },
      corners:
      {
        square: {},
        default:
        {
          card:
          {
            rounded: true
          }
        },
        pill:
        {
          card:
          {
            rounded: "full"
          }
        }
      }
    }
  };
```

## Définition dans le thème

On va ajouter une propiété `components` dans le thème, qui va contenir un objet définissant les configs de chaque composants:

```json
{
    components: {
        "Soperio.Button": {
            defaultProps: {},
            defaultTraits: {},
            traits: {
                variant: {},
                size: {},
                corners: {},
            },
        },
        "Soperio.Badge": {
            defaultProps: {},
            defaultTraits: {},
            traits: {
                variant: {},
                size: {},
                corners: {},
            },
        },
        "Soperio.Spinner": {
            defaultProps: {},
            defaultTraits: {},
            traits: {
                variant: {},
                size: {}
            },
        },
        ...
    }
}
```

Chaque composant est défini par un ID, ici `Soperio.Button`, `Soperio.Badge`, `Soperio.Spinner`.

Dans Auducia, on aura par exemple en plus `Auducia.Input`, `Auducia.FieldLabel`, `Auducia.SVGIcon`


## Génération du fichier de types

Le fichier se trouve dans `components/src/lib/ComponentTypings.ts`

```ts
export interface Components
{
    "Soperio.Badge":
    {
        variant: "default" | "light" | "outline" | "light-outline";
        size: "xs" | "sm" | "md" | "lg" | "xl" | "x2";
        shape: "default" | "rounded" | "pill" | "square";
    },
    "Soperio.Button":
    {
        variant?: "default" | "light" | "outline" | "link" | "borderless";
        size?: "sm" | "md" | "lg" | "xl" | "x2";
        corners?: "default" | "square" | "pill";
    },
    "Soperio.Card":
    {
        variant?: "default" | "bordered";
        corners?: "default" | "square" | "pill";
    },
    "Soperio.Checkbox":
    {
        otherNameThanSize: "sm" | "md" | "lg" | "xl" | "x2";
        variant: "default" | "outline";
        shape: "square" | "default" | "circle";
    },
    "Soperio.Input":
    {
        size: "sm" | "md" | "lg" | "xl" | "x2";
        variant: "default" | "solid" | "underline";
        corners: "square" | "default" | "pill";
    },
    "Soperio.Radio":
    {
        otherNameThanSize: "sm" | "md" | "lg" | "xl" | "x2";
        variant: "default" | "outline";
        shape: "square" | "default" | "circle";
        dotSize?: "sm" | "md" | "lg";
    },
    "Soperio.Select":
    {
        size: "sm" | "md" | "lg" | "xl" | "x2";
        variant: "default" | "solid" | "underline";
        corners: "square" | "default" | "pill";
    },
    "Soperio.Spinner":
    {
        variant?: "default" | "track",
        size?: "sm" | "md" | "lg" | "xl" | "x2";
    },
    "Soperio.TextArea":
    {

        size: "sm" | "md" | "lg" | "xl" | "x2";
        variant: "default" | "solid" | "underline";
        corners: "square" | "default" | "pill";
    },
}
```
On utilise ensuite ComponentTypings<"ID_DU_COMPOSANT"> pour définir les types des composants

Exemple pour Button

```ts
type TraitProps = ComponentTypings<"Soperio.Button">

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState;

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

export type Config = ComponentConfig<ConfigStateProps, TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;

export interface ButtonProps extends ComponentProps, HTMLButtonProps
{
  theme?: ComponentTheme,
  config?: ExtendConfig;
}
```