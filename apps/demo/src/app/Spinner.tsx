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
                    <Spinner size="sm" me="5" />
                    <Spinner size="md" me="5" />
                    <Spinner size="lg" me="5" />
                    <Spinner size="xl" me="5" />
                    <Spinner size="x2" me="5" />
                </div>

                <div mb="10">
                    <Spinner variant="track" size="sm" me="5" />
                    <Spinner variant="track" size="md" me="5" />
                    <Spinner variant="track" size="lg" me="5" />
                    <Spinner variant="track" size="xl" me="5" />
                    <Spinner variant="track" size="x2" me="5" />
                </div>

                <div mb="10">
                    <Spinner size="sm" me="5" theme="pink" />
                    <Spinner size="md" me="5" theme="pink" />
                    <Spinner size="lg" me="5" theme="pink" />
                    <Spinner size="xl" me="5" theme="pink" />
                    <Spinner size="x2" me="5" theme="pink" />
                </div>

                <div mb="10">
                    <Spinner size="sm" me="5" trackColor="orange-800" />
                    <Spinner size="md" me="5" trackColor="orange-800" />
                    <Spinner size="lg" me="5" trackColor="orange-800" />
                    <Spinner size="xl" me="5" trackColor="orange-800" />
                    <Spinner size="x2" me="5" trackColor="orange-800" />
                </div>

                <div mb="10">
                    <Spinner size="sm" me="5" trackColor="orange-800" progress={25}/>
                    <Spinner size="md" me="5" trackColor="orange-800" progress={25} />
                    <Spinner size="lg" me="5" trackColor="orange-800" progress={25} />
                    <Spinner size="xl" me="5" trackColor="orange-800" progress={25} />
                    <Spinner size="x2" me="5" trackColor="orange-800" progress={25} />
                </div>

                <div mb="10">
                    <Spinner w="10" h="10" me="5" />
                    <Spinner w="11" h="11" me="5" />
                    <Spinner w="12" h="12" me="5" />
                    <Spinner w="14" h="14" me="5" />
                    <Spinner w="20" h="20" me="5"/>
                </div>
            </Container>
    );
}
