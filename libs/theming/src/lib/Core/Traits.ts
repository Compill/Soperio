import { SoperioComponent } from "../SoperioComponent";

type Trait = Omit<SoperioComponent, "trait">

export type ThemeTraits = {
  "typo.display1": Trait
  "typo.display2": Trait
  "typo.display3": Trait
  "typo.display4": Trait
  "typo.display5": Trait
  "typo.h1": Trait
  "typo.h2": Trait
  "typo.h3": Trait
  "typo.h4": Trait
  "typo.h5": Trait
  "typo.h6": Trait
  "typo.subtitle1": Trait
  "typo.subtitle2": Trait
  "typo.body1": Trait
  "typo.body2": Trait
  "typo.caption": Trait
  "typo.overline": Trait
}
