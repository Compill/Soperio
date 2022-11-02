Soperio is a UI framework for React. 

Soperio aims to help developers get rid of the CSS nightmare by providing simple and easy HTML design properties that will automatically translate into CSS at runtime.

You can find the documentation website at [https://soperio-ui.com](https://soperio-ui.com)

Here is an example of code you can use with Soperio:

```tsx
<div 
    bgColor="slate-100" 
    w="full"
    p="8"
    dflex
    flexRow
    placeContent="center"
>
    <div
        bgColor="white"
        rounded
        w="80"
        shadow
    >
        <img 
            src="/images/landscape.jpg" 
            w="full"
            h="40"
            objectFit="cover"
            roundedT
            alt="landscape"
        />
        <div
            py="4"
            px="5"
            fontWeight="400"
            textColor="slate-700"
        >
            <div 
                dflex
                flexRow
                spaceX="2"
                mb="2"
            >
                <span rounded px="2" textColor="white" bgColor="blue-500">React</span>
                <span rounded px="2" textColor="white" bgColor="emerald-500">CSS-IN-JS</span>
                <span rounded px="2" textColor="white" bgColor="pink-500">UI</span>
            </div>

            <p>
                This is a sample card designed with <span textColor="sky-500" fontWeight="500">Soperio</span>. You can see that I'm applying design props <span fontWeight="500" textDecoration="underline">directly on the HTML tags</span>. 
            </p>
            
            <p mt="2">
                Properties like margin top, horizontal and vertical padding, flex box, rounded corners, width, height, font weight, shadow, text decoration, text and background color are easily defined without the need to write silly CSS.
            </p>
        </div>
     </div>
</div>
```

## Installation

```bash
# using npm
npm install @soperio/react @emotion/react@^11

# using yarn
yarn add @soperio/react @emotion/react@^11
```

## Define Soperio as your React JSX

In your `tsconfig.json` file, set the `jsxImportSource` property as follow:

```js
// tsconfig.json

{
  {
    //...
    "compilerOptions": {
      "jsx": "react-jsx", // or "preserve",
      "jsxImportSource": "@soperio", // <= The important line
    }
  }
}
```


If you have a babel config file (babelrc.json or babel.config.js or babel.config.json), set the following configuration:

```js
//.babelrc config

{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic",
        "importSource": "@soperio" // <= The important line
      }]
  ],
  // ...
}
```

```js
{
  "presets": [
    [
      "@nrwl/react/babel",
      {
        "runtime": "automatic",
        "importSource": "@soperio" // <= The important line
      }]
  ],
  // ...
}
```

## Wrap your app with SoperioProvider

After installing Soperio UI, you need to set up the `SoperioProvider` at the root of your application. This can be either in your `index.jsx` or `index.tsx`

Put in the following code:

```tsx
// 1. import `SoperioProvider` component
import { SoperioProvider } from "@soperio/react"

function App()
{
  // 2. Wrap SoperioProvider at the root of your app
  // It doesn't have to be the root of your app, but you must wrap
  // the first top React component you want to be able to customize
  // with Soperio
  return (
    <SoperioProvider>
      <App />
    </SoperioProvider>
  )
}
```

Note that at the moment, `SoperioProvider` must be your root tag.



## LICENSE

MIT © [Jonathan Gerbaud](https://github.com/jonathangerbaud)