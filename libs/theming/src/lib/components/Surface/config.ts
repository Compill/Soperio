import { SurfaceSchemeSet } from "../../SurfaceScheme"

const config = (surface: SurfaceSchemeSet, darkMode: boolean) =>
{
  return {
    defaultProps:
    {
      stateDisabled:
      {
        cursor: "default"
      }
    },
    defaultTraits:
    {
      variant: "main",
    },
    traits:
    {
      variant:
      {
        main: // mainInverse, alt, altInverse, mainLayer
        {
          bgColor: surface.main.color,
          hover_bgColor: surface.main.hover.color,
          textColor: surface.main.onColor,
          hover_textColor: surface.main.hover.onColor,
          stateSelected:
          {
            bgColor: surface.main.selected.color,
            hover_bgColor: surface.main.hover.selected.color,
            textColor: surface.main.selected.onColor,
            hover_textColor: surface.main.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.main.active.color,
            hover_bgColor: surface.main.hover.active.color,
            textColor: surface.main.active.onColor,
            hover_textColor: surface.main.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.main.disabled.color,
            hover_bgColor: surface.main.disabled.color,
            textColor: surface.main.disabled.onColor,
            hover_textColor: surface.main.disabled.onColor,
          }
        },
        mainInverse:
        {
          bgColor: surface.mainInverse.color,
          hover_bgColor: surface.mainInverse.hover.color,
          textColor: surface.mainInverse.onColor,
          hover_textColor: surface.mainInverse.hover.onColor,
          stateSelected:
          {
            bgColor: surface.mainInverse.selected.color,
            hover_bgColor: surface.mainInverse.hover.selected.color,
            textColor: surface.mainInverse.selected.onColor,
            hover_textColor: surface.mainInverse.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.mainInverse.active.color,
            hover_bgColor: surface.mainInverse.hover.active.color,
            textColor: surface.mainInverse.active.onColor,
            hover_textColor: surface.mainInverse.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.mainInverse.disabled.color,
            hover_bgColor: surface.mainInverse.disabled.color,
            textColor: surface.mainInverse.disabled.onColor,
            hover_textColor: surface.mainInverse.disabled.onColor,
          }
        },
        mainInverseHoverMain:
        {
          bgColor: surface.mainInverse.color,
          hover_bgColor: surface.main.hover.color,
          textColor: surface.mainInverse.onColor,
          hover_textColor: surface.main.hover.onColor,
          stateSelected:
          {
            bgColor: surface.mainInverse.selected.color,
            hover_bgColor: surface.main.hover.selected.color,
            textColor: surface.mainInverse.selected.onColor,
            hover_textColor: surface.main.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.mainInverse.active.color,
            hover_bgColor: surface.main.hover.active.color,
            textColor: surface.mainInverse.active.onColor,
            hover_textColor: surface.main.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.mainInverse.disabled.color,
            hover_bgColor: surface.main.disabled.color,
            textColor: surface.mainInverse.disabled.onColor,
            hover_textColor: surface.main.disabled.onColor,
          }
        },
        mainLayer:
        {
          bgColor: surface.mainLayer.color,
          hover_bgColor: surface.mainLayer.hover.color,
          textColor: surface.mainLayer.onColor,
          hover_textColor: surface.mainLayer.hover.onColor,
          stateSelected:
          {
            bgColor: surface.mainLayer.selected.color,
            hover_bgColor: surface.mainLayer.hover.selected.color,
            textColor: surface.mainLayer.selected.onColor,
            hover_textColor: surface.mainLayer.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.mainLayer.active.color,
            hover_bgColor: surface.mainLayer.hover.active.color,
            textColor: surface.mainLayer.active.onColor,
            hover_textColor: surface.mainLayer.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.mainLayer.disabled.color,
            hover_bgColor: surface.mainLayer.disabled.color,
            textColor: surface.mainLayer.disabled.onColor,
            hover_textColor: surface.mainLayer.disabled.onColor,
          }
        },
        mainLayerHoverMain:
        {
          bgColor: surface.mainLayer.color,
          hover_bgColor: surface.main.hover.color,
          textColor: surface.mainLayer.onColor,
          hover_textColor: surface.main.hover.onColor,
          stateSelected:
          {
            bgColor: surface.mainLayer.selected.color,
            hover_bgColor: surface.main.hover.selected.color,
            textColor: surface.mainLayer.selected.onColor,
            hover_textColor: surface.main.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.mainLayer.active.color,
            hover_bgColor: surface.main.hover.active.color,
            textColor: surface.mainLayer.active.onColor,
            hover_textColor: surface.main.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.mainLayer.disabled.color,
            hover_bgColor: surface.main.disabled.color,
            textColor: surface.mainLayer.disabled.onColor,
            hover_textColor: surface.main.disabled.onColor,
          }
        },
        alt:
        {
          bgColor: surface.alt.color,
          hover_bgColor: surface.alt.hover.color,
          textColor: surface.alt.onColor,
          hover_textColor: surface.alt.hover.onColor,
          stateSelected:
          {
            bgColor: surface.alt.selected.color,
            hover_bgColor: surface.alt.hover.selected.color,
            textColor: surface.alt.selected.onColor,
            hover_textColor: surface.alt.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.alt.active.color,
            hover_bgColor: surface.alt.hover.active.color,
            textColor: surface.alt.active.onColor,
            hover_textColor: surface.alt.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.alt.disabled.color,
            hover_bgColor: surface.alt.disabled.color,
            textColor: surface.alt.disabled.onColor,
            hover_textColor: surface.alt.disabled.onColor,
          }
        },
        altInverse:
        {
          bgColor: surface.altInverse.color,
          hover_bgColor: surface.altInverse.hover.color,
          textColor: surface.altInverse.onColor,
          hover_textColor: surface.altInverse.hover.onColor,
          stateSelected:
          {
            bgColor: surface.altInverse.selected.color,
            hover_bgColor: surface.altInverse.hover.selected.color,
            textColor: surface.altInverse.selected.onColor,
            hover_textColor: surface.altInverse.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.altInverse.active.color,
            hover_bgColor: surface.altInverse.hover.active.color,
            textColor: surface.altInverse.active.onColor,
            hover_textColor: surface.altInverse.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.altInverse.disabled.color,
            hover_bgColor: surface.altInverse.disabled.color,
            textColor: surface.altInverse.disabled.onColor,
            hover_textColor: surface.altInverse.disabled.onColor,
          }
        },
        altHoverMain:
        {
          bgColor: surface.alt.color,
          hover_bgColor: surface.main.hover.color,
          textColor: surface.alt.onColor,
          hover_textColor: surface.main.hover.onColor,
          stateSelected:
          {
            bgColor: surface.alt.selected.color,
            hover_bgColor: surface.main.hover.selected.color,
            textColor: surface.alt.selected.onColor,
            hover_textColor: surface.main.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.alt.active.color,
            hover_bgColor: surface.main.hover.active.color,
            textColor: surface.alt.active.onColor,
            hover_textColor: surface.main.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.alt.disabled.color,
            hover_bgColor: surface.main.disabled.color,
            textColor: surface.alt.disabled.onColor,
            hover_textColor: surface.main.disabled.onColor,
          }
        },
      }
    }
  }
}

export default config
