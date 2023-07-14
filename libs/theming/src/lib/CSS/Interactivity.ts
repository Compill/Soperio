export interface Interactivity
{
  appearanceNone?: boolean,
  cursor?: false | "auto" | "default" | "pointer" | "wait" | "text" | "move" | "help" | "not-allowed" | "none" | "context-menu" | "progress" | "cell" | "crosshair" | "vertical-text" | "alias" | "copy" | "no-drop" | "grab" | "grabbing" | "all-scroll" | "col-resize" | "row-resize" | "n-resize" | "e-resize" | "s-resize" | "w-resize" | "ne-resize" | "nw-resize" | "se-resize" | "sw-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "zoom-in" | "zoom-out",
  pointerEvents?: false | "none" | "auto",
  resize?: false | true | "both" | "none" | "x" | "y";
  userSelect?: false | "none" | "text" | "all" | "auto";
}
