import { ComponentManager, ComponentTheme, useColorTheme, useFirstRender, useMultiPartComponentConfig } from "@soperio/react";
import React from "react";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Avatar";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)


const DefaultIcon = () => (
  <svg
    viewBox="0 0 128 128"
    color="#fff"
    width="100%"
    height="100%"
  >
    <path
      fill="currentColor"
      d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
    />
    <path
      fill="currentColor"
      d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
    />
  </svg>
)

export interface AvatarProps extends ComponentProps
{
  theme?: ComponentTheme;
  config?: ExtendConfig;
  src?: string;
  name?: string
  getInitials?: (name: string) => string
  icon?: React.ReactElement
  badge?: boolean,
  badgeColor?: string,
  badgePosition?: "bottomEnd" | "bottomStart" | "topEnd" | "topStart" | "centerEnd" | "centerStart",
  badgeText?: string | number
}

function initials(name: string)
{
  const [firstName, lastName] = name.split(" ")
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}

/**
 *
 *
 *
 */
function randomColor(str: string)
{
  let hash = 0

  if (str.length === 0)
    return hash.toString()

  for (let i = 0; i < str.length; i += 1)
  {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash
  }

  let color = "#"
  for (let j = 0; j < 3; j += 1)
  {
    const value = (hash >> (j * 8)) & 255
    color += `00${value.toString(16)}`.substr(-2)
  }

  return color
}


export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>((
{
  corners = "default",
  size,
  variant = "default",
  theme = "default",
  config,
  src,
  name,
  icon = <DefaultIcon />,
  getInitials = initials,
  badge,
  badgeColor,
  badgePosition = "bottomEnd",
  badgeText,
  ...props
}: AvatarProps, ref) =>
{
  const firstRender = useFirstRender();
  const [activeSrc, setActiveSrc] = React.useState(src);
  const styles = useMultiPartComponentConfig(COMPONENT_ID, theme, config, { corners, size, variant }, props);
  const colorTheme = useColorTheme();

  const bg = name ? randomColor(name) : colorTheme.default

  const translateX = (badgePosition === "bottomStart" || badgePosition === "topStart") ? "-40%" : "40%"
  const translateY = (badgePosition === "topEnd" || badgePosition === "topStart") ? " - 40%" : "40%"

  const top = (badgePosition === "topEnd" || badgePosition === "topStart") ? corners === "default" ? "0" : "-5%" : false
  const bottom = (badgePosition === "bottomEnd" || badgePosition === "bottomStart") ? corners === "default" ? "0" : "-5%" : false
  const start = (badgePosition === "bottomStart" || badgePosition === "topStart") ? corners === "default" ? "0" : "-5%" : false
  const end = (badgePosition === "bottomEnd" || badgePosition === "topEnd") ? corners === "default" ? "0" : "-5%" : false

  return (
    <span
      transition={firstRender ? "none" : "all"}
      ref={ref}
      bgColor={bg}
      {...styles["avatar"]}
      {...props}
    >
      {activeSrc ?
        <img
          transition={firstRender ? "none" : "all"}
          alt={name}
          src={activeSrc}
          onError={() => setActiveSrc("")}
          {...styles["image"]}
        />
        : name ? (
          <span
            transition={firstRender ? "none" : "all"}
            {...styles["initials"]}
          >
            {getInitials?.(name)}
          </span>
        )
          : (
            <span
              {...styles["image"]}
            >
              {React.cloneElement(icon, {
                role: "img",
                "aria-label": name,
              })}
            </span>
          )
      }

      {badge &&
        <div
          top={(badgePosition === "centerEnd" || badgePosition === "centerStart") ? "40%" : top}
          bottom={bottom}
          start={badgePosition === "centerStart" ? "-15%" : start}
          end={badgePosition === "centerEnd" ? "-15%" : end}
          translateX={(badgePosition === "centerEnd" || badgePosition === "centerStart") ? false : translateX}
          translateY={(badgePosition === "centerEnd" || badgePosition === "centerStart") ? false : translateY}
          rounded="full"
          transform={true}
          bgColor={badgeColor || "green"}
          {...styles["badge"]}
        >
          {badgeText}
        </div>}

    </span >
  );
});
