
// Since this is a test, running without React
// I have to link to the lib like this
// If I import the whole theming lib, it relies on React
// and crash (because the CLI doesn't use React)
import { extendTheme } from "../../../../theming/src/lib/extendTheme/extendTheme";
// import { extendTheme } from "@soperio/theming";

const theme = extendTheme({
    colors: {
        "hello-color": "#FFFF0099"
    }
})

export default theme