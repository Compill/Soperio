export interface Interactivity
{
  appearanceNone?: boolean,
  cursor?: false | "auto" | "default" | "pointer" | "wait" | "text" | "move" | "help" | "not-allowed",
  pointerEvents?: false | "none" | "auto",
  resize?: false | true | "both" | "none" | "x" | "y";
  userSelect?: false | "none" | "text" | "all" | "auto";
}
