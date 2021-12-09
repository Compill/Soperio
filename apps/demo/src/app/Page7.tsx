/** @jsx jsx */

import { Checkbox, Container, Select } from "@soperio/ui";
import { jsx } from "@soperio/core";


type Side = "left" | "right" | "top" | "bottom";

/**
 *
 *
 */
export default function Page({ ...props })
{

    return (
        <Container center h="screen" bgColor="root.bg-color-3">
            <Container center breakpoint="xl" h="screen" bgColor="root.bg-color-1"  p="20">
                <div mb="10">
                    <Select block size="sm" variant="default" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                    <Select block size="sm" variant="solid" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                    <Select block size="sm" variant="underline" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                </div>

                <div mb="10">
                    <Select block variant="default" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                    <Select block variant="solid" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                    <Select block variant="underline" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                </div>

                <div mb="10">
                    <Select block size="lg" variant="default" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                    <Select block size="lg" variant="solid" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                    <Select block size="lg" variant="underline" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                </div>
                <div mb="10">
                    <Select block size="xl" variant="default" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                    <Select block size="xl" variant="solid" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                    <Select block size="xl" variant="underline" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                </div>
                <div mb="10">
                    <Select block size="x2" variant="default" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                    <Select block size="x2" variant="solid" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                    <Select block size="x2" variant="underline" mb="5" defaultValue="tenerife">
                      <option value="tenerife">Tenerife</option>
                      <option value="grandcanaria">Gran Canaria</option>
                      <option value="laspalmas">Las Palmas</option>
                    </Select>
                </div>
            </Container>
        </Container>
    );
}
