export default interface ThemeTransition
{
  ease: "linear" | "in" | "out" | "in-out",
  duration: "75" | "100" | "150" | "200" | "300" | "500" | "700" | "1000",
  delay: "75" | "100" | "150" | "200" | "300" | "500" | "700" | "1000",
  animation: "none" | "spin" | "ping" | "pulse" | "bounce" | "breathe",
  transitionProperty: "all" | "none" | "colors" | "opacity" | "shadow" | "transform";
}
