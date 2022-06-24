import { Surface } from "@soperio/react";
import { Container } from "@soperio/ui";
import React from 'react';

/**
 *
 *
 */
export default function Page({ ...props })
{
  return (
    <Container center size="x2" dflex flexCol gap="20" justifyContent="center" py="20" alignItems="center">

      <div dflex flexRow gap="20">
        <Surface rounded p="5" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>

        <Surface rounded p="5" variant="mainInverse" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>

        <Surface rounded p="5" variant="mainInverseHoverMain" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>

        <Surface rounded p="5" variant="mainLayer" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>

        <Surface rounded p="5" variant="mainLayerHoverMain" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>
      </div>

      <div dflex flexRow gap="20">
        <Surface rounded p="5" variant="alt" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>

        <Surface rounded p="5" variant="altInverse" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>

        <Surface rounded p="5" variant="altHoverMain" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>
      </div>

      {/* Secondary */}
      <div dflex flexRow gap="20">
        <Surface rounded p="5" scheme="secondary" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>

        <Surface rounded p="5" scheme="secondary" variant="mainInverse" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>

        <Surface rounded p="5" scheme="secondary" variant="mainInverseHoverMain" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>

        <Surface rounded p="5" scheme="secondary" variant="mainLayer" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>

        <Surface rounded p="5" scheme="secondary" variant="mainLayerHoverMain" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>
      </div>

      <div dflex flexRow gap="20">
        <Surface rounded p="5" scheme="secondary" variant="alt" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>

        <Surface rounded p="5" scheme="secondary" variant="altInverse" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>

        <Surface rounded p="5" scheme="secondary" variant="altHoverMain" hoverable>
          <div trait="typo.h3">Title</div>
          <div trait="typo.subtitle1">Subtitle</div>
        </Surface>

      </div>
    </Container>
  );
}

/**
 * function MyComponent({surface, ...props})
 * {
 *  const sf = useSurface(surface)
 *  const hoverSf = useSurface()
 * }
 */


/**
 * I cannot use hover_surface
 *
 * Because this only generates CSS props, and I cannot change the surface in CSS
 *
 * Also means, I can't use focus, groupHover, sm, lg, xl, ... variants
 */

/*

  So it will be one of two things

  1 - Using surface

  function MyComponent({surface, ...props})
  {
    const sf = useSurface(surface)

    return <div bgColor={sf.bg}>Hello</div>
  }

  2 - Using colors

  function MyComponent()
  {
    return <div bgColor="sf.primary.bg">Hello</div>
  }

  3 - Using both // It's quite useless compared to 1

  function MyComponent({ surface, ...props})
  {
    const sf = useSurface(surface)
    const prefix = `sf.${sf.name}`

    return <div bgColor=`${prefix}.bg`>Hello</div>
  }

  First scenario is where you can dynamically do stuff
  Second scenario is pratical but non dynamic
*/
