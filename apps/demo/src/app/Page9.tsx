/** @jsx jsx */

import { jsx } from "@soperio/core";
import { Container, Spinner } from "@soperio/ui";


/**
 *
 *
 */
export default function Page({ ...props })
{

    return (
      <Container center breakpoint="xxl" gap="20" justifyContent="center" py="20">
                <div mb="10">
                    <Spinner size="sm" mr="5" />
                    <Spinner size="md" mr="5" />
                    <Spinner size="lg" mr="5" />
                    <Spinner size="xl" mr="5" />
                    <Spinner size="x2" mr="5" />
                </div>

                <div mb="10">
                    <Spinner variant="track" size="sm" mr="5" />
                    <Spinner variant="track" size="md" mr="5" />
                    <Spinner variant="track" size="lg" mr="5" />
                    <Spinner variant="track" size="xl" mr="5" />
                    <Spinner variant="track" size="x2" mr="5" />
                </div>

                <div mb="10">
                    <Spinner size="sm" mr="5" theme="pink" />
                    <Spinner size="md" mr="5" theme="pink" />
                    <Spinner size="lg" mr="5" theme="pink" />
                    <Spinner size="xl" mr="5" theme="pink" />
                    <Spinner size="x2" mr="5" theme="pink" />
                </div>

                <div mb="10">
                    <Spinner size="sm" mr="5" trackColor="orange-800" />
                    <Spinner size="md" mr="5" trackColor="orange-800" />
                    <Spinner size="lg" mr="5" trackColor="orange-800" />
                    <Spinner size="xl" mr="5" trackColor="orange-800" />
                    <Spinner size="x2" mr="5" trackColor="orange-800" />
                </div>

                <div mb="10">
                    <Spinner size="sm" mr="5" trackColor="orange-800" progress={25}/>
                    <Spinner size="md" mr="5" trackColor="orange-800" progress={25} />
                    <Spinner size="lg" mr="5" trackColor="orange-800" progress={25} />
                    <Spinner size="xl" mr="5" trackColor="orange-800" progress={25} />
                    <Spinner size="x2" mr="5" trackColor="orange-800" progress={25} />
                </div>

                <div mb="10">
                    <Spinner w="10" h="10" mr="5" />
                    <Spinner w="11" h="11" mr="5" />
                    <Spinner w="12" h="12" mr="5" />
                    <Spinner w="14" h="14" mr="5" />
                    <Spinner w="20" h="20" mr="5"/>
                </div>
            </Container>
    );
}
