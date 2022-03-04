import * as React from "react";

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export function createContext<ContextType>()
{
  const Context = React.createContext<ContextType | undefined>(undefined);

  function useContext()
  {
    const context = React.useContext(Context);

    if (!context)
      throw new Error("[@soperio/ui createContext] Your forgot to wrap the component in its Provider before using useContext()")

    return context;
  }

  return [
    Context.Provider,
    useContext,
    Context,
  ] as CreateContextReturn<ContextType>;
}
