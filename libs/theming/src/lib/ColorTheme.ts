export interface ColorTheme
{
    default: string,
    defaultHover: string,
    defaultActive: string,
    defaultDisabled: string,

    light: string,
    lightHover: string,
    lightActive: string,
    lightDisabled: string,

    textDark1: string,
    textDark2: string,
    textDark3: string,
    textDark4: string,
    textDarkDisabled: string,

    textLight1: string,
    textLight2: string,
    textLight3: string,
    textLight4: string,
    textLightDisabled: string,

    background1: string,
    background2: string,
    background3: string,
    background4: string,
    background5: string,
    backgroundDisabled: string,

    border0: string,
    border1: string,
    borderDisabled: string,

    shadow: string,

    custom?: { [k:string]: string }
}
