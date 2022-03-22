import React from "react";
import { SoperioComponent } from "@soperio/components";
import { Container,  Divider} from "@soperio/ui";


type Side = "left" | "right" | "top" | "bottom";

/**
 *
 *
 */
export default function Page({ ...props })
{

  return (
    <Container center size="xxl" dflex gap="20" justifyContent="center" py="20">
      <div spaceY="5" {...props} h="50px" >
      <Divider variant="dashed" borderColor="blue" />

<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis, recusandae hic autem error eaque officia culpa veritatis dolorem corrupti. Odit incidunt repudiandae, corporis laboriosam cum architecto non officiis ipsum?</p>
<Divider  orientation="vertical" />
</div>
    </Container>
  );
}
