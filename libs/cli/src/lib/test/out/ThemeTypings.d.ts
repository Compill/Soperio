// regenerate by running
// npx @soperio/cli build-theme path/to/your/theme.(js|ts)

export interface Components {
  'Soperio.Badge': {
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2';
    variant: 'default' | 'light' | 'outline' | 'light-outline';
    shape: 'square' | 'default' | 'rounded' | 'pill';
  };

  'Soperio.Button': {
    size: 'sm' | 'md' | 'lg' | 'xl' | 'x2';
    variant: 'default' | 'light' | 'link' | 'outline' | 'borderless';
    corners: 'square' | 'default' | 'pill';
  };

  'Soperio.Card': {
    variant: 'default' | 'bordered';
    corners: 'square' | 'default' | 'pill';
  };

  'Soperio.Checkbox': {
    size: 'sm' | 'md' | 'lg' | 'xl' | '2x';
    variant: 'default' | 'outline';
    shape: 'square' | 'default' | 'circle';
  };

  'Soperio.Input': {
    size: 'sm' | 'md' | 'lg' | 'xl' | 'x2';
    variant: 'default' | 'solid' | 'underline';
    corners: 'square' | 'default' | 'pill';
  };

  'Soperio.Radio': {
    size: 'sm' | 'md' | 'lg' | 'xl' | 'x2';
    variant: 'default' | 'outline';
  };

  'Soperio.Select': {
    size: 'sm' | 'md' | 'lg' | 'xl' | 'x2';
    variant: 'default' | 'solid' | 'underline';
    corners: 'square' | 'default' | 'pill';
  };

  'Soperio.Spinner': {
    size: 'sm' | 'md' | 'lg' | 'xl' | 'x2';
    variant: 'default' | 'track';
  };

  'Soperio.TextArea': {
    size: 'sm' | 'md' | 'lg' | 'xl' | 'x2';
    variant: 'default' | 'solid' | 'underline';
    corners: 'square' | 'default' | 'pill';
  };
}
