import { Animation, Delay, Duration, Ease, TransitionProperty } from "../CSSTypes";

export interface Transitions
{
  transition?: false | true | false | TransitionProperty,
  duration?: false | Duration | number,
  easing?: false | Ease,
  delay?: false | Delay,
  animate?: false | Animation;
}
