import { Container, Divider } from "@soperio/ui";
import React from "react";


type Side = "left" | "right" | "top" | "bottom";

/**
 *
 *
 */
export default function Page({ ...props })
{

  return (
    <Container  center size="x2" dflex gap="20" justifyContent="center" py="20"  >
      <div ms="8" spaceY="5" {...props} h="50px" >


<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis, recusandae hic autem error eaque officia culpa veritatis dolorem corrupti. Odit incidunt repudiandae, corporis laboriosam cum architecto non officiis ipsum?</p>
<Divider  orientation="vertical" />
</div>
<Divider variant="dashed" borderColor="blue" />
    </Container>
  );
}
