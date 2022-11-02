import { Animation, Delay, Duration, Ease, TransitionProperty } from "../CSSTypes";

export interface Transitions
{
  transition?: false | true | false | TransitionProperty,
  duration?: false | Duration | number | "any time value like 1.25s, 5000ms, ...",
  easing?: false | Ease,
  delay?: false | Delay,
  animate?: false | Animation;
}
