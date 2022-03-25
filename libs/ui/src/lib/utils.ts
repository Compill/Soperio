import { SoperioComponent } from "@soperio/react";

export function sanitizeProps<T>(props: T | undefined, ...toRemove: (keyof T)[]): SoperioComponent
{
  if (!props)
    return {};

  const sanitizedProps = { ...props };

  toRemove.forEach(key => delete sanitizedProps[key]);

  return sanitizedProps;
}