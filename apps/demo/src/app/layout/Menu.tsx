import { HTMLDivProps, ParentComponent, SoperioComponent } from "@soperio/react";
import { useAppContext } from "./AppContext";
import { menu } from "./config";

export function Menu()
{
  const { page, setPage } = useAppContext()
  const config = menu

  const items = Object.keys(config)

  return (
    <div spaceY="1" h="screen" position="fixed" overflowY="auto" w="240px" py="10" px="5">
      {items.map(item => <MenuItem key={item} selected={page === item} onClick={() => setPage(item)}>{item}</MenuItem>)}
    </div>
  )
}

function MenuItem({ selected, children,...props }: { selected: boolean } & SoperioComponent & ParentComponent & HTMLDivProps)
{
  return (
    <div
      bgColor={selected ? "sky-500" : "transparent"}
      hover_bgColor="sky-500"
      textColor={selected ? "white" : "black"}
      hover_textColor="white"
      rounded
      px="5"
      py="2"
      fontSize="lg"
      {...props}
    >
      {children}
    </div>
  )
}
