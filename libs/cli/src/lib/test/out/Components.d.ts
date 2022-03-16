// regenerate by running
// npx @Soperio/cli build-theme path/to/your/theme.(js|ts)

export interface ThemeTypings {
  rootColors:
    | 'text-color-1'
    | 'text-color-2'
    | 'text-color-3'
    | 'text-color-4'
    | 'text-color-disabled'
    | 'text-color-inverse-1'
    | 'text-color-inverse-2'
    | 'text-color-inverse-3'
    | 'text-color-inverse-4'
    | 'text-color-inverse-disabled'
    | 'bg-color-1'
    | 'bg-color-2'
    | 'bg-color-3'
    | 'bg-color-4'
    | 'bg-color-5'
    | 'bg-color-disabled'
    | 'border-color-1'
    | 'border-color-2'
    | 'border-color-disabled'
    | 'shadow-color';
  colors:
    | 'transparent'
    | 'current'
    | 'black'
    | 'white'
    | 'gray-100'
    | 'gray-200'
    | 'gray-300'
    | 'gray-400'
    | 'gray-500'
    | 'gray-600'
    | 'gray-700'
    | 'gray-800'
    | 'gray-900'
    | 'coolGray-50'
    | 'coolGray-100'
    | 'coolGray-200'
    | 'coolGray-300'
    | 'coolGray-400'
    | 'coolGray-500'
    | 'coolGray-600'
    | 'coolGray-700'
    | 'coolGray-800'
    | 'coolGray-900'
    | 'emerald-50'
    | 'emerald-100'
    | 'emerald-200'
    | 'emerald-300'
    | 'emerald-400'
    | 'emerald-500'
    | 'emerald-600'
    | 'emerald-700'
    | 'emerald-800'
    | 'emerald-900'
    | 'red-100'
    | 'red-200'
    | 'red-300'
    | 'red-400'
    | 'red-500'
    | 'red-600'
    | 'red-700'
    | 'red-800'
    | 'red-900'
    | 'orange-100'
    | 'orange-200'
    | 'orange-300'
    | 'orange-400'
    | 'orange-500'
    | 'orange-600'
    | 'orange-700'
    | 'orange-800'
    | 'orange-900'
    | 'yellow-100'
    | 'yellow-200'
    | 'yellow-300'
    | 'yellow-400'
    | 'yellow-500'
    | 'yellow-600'
    | 'yellow-700'
    | 'yellow-800'
    | 'yellow-900'
    | 'green-100'
    | 'green-200'
    | 'green-300'
    | 'green-400'
    | 'green-500'
    | 'green-600'
    | 'green-700'
    | 'green-800'
    | 'green-900'
    | 'teal-100'
    | 'teal-200'
    | 'teal-300'
    | 'teal-400'
    | 'teal-500'
    | 'teal-600'
    | 'teal-700'
    | 'teal-800'
    | 'teal-900'
    | 'blue-100'
    | 'blue-200'
    | 'blue-300'
    | 'blue-400'
    | 'blue-500'
    | 'blue-600'
    | 'blue-700'
    | 'blue-800'
    | 'blue-900'
    | 'indigo-100'
    | 'indigo-200'
    | 'indigo-300'
    | 'indigo-400'
    | 'indigo-500'
    | 'indigo-600'
    | 'indigo-700'
    | 'indigo-800'
    | 'indigo-900'
    | 'purple-100'
    | 'purple-200'
    | 'purple-300'
    | 'purple-400'
    | 'purple-500'
    | 'purple-600'
    | 'purple-700'
    | 'purple-800'
    | 'purple-900'
    | 'pink-100'
    | 'pink-200'
    | 'pink-300'
    | 'pink-400'
    | 'pink-500'
    | 'pink-600'
    | 'pink-700'
    | 'pink-800'
    | 'pink-900'
    | 'sky-50'
    | 'sky-100'
    | 'sky-200'
    | 'sky-300'
    | 'sky-400'
    | 'sky-500'
    | 'sky-600'
    | 'sky-700'
    | 'sky-800'
    | 'sky-900'
    | 'hello-color';
  colorThemes: 'default' | 'success' | 'pink' | 'neutral';
  darkModeOverride: {
    rootColors:
      | 'text-color-1'
      | 'text-color-2'
      | 'text-color-3'
      | 'text-color-4'
      | 'text-color-disabled'
      | 'text-color-inverse-1'
      | 'text-color-inverse-2'
      | 'text-color-inverse-3'
      | 'text-color-inverse-4'
      | 'text-color-inverse-disabled'
      | 'bg-color-1'
      | 'bg-color-2'
      | 'bg-color-3'
      | 'bg-color-4'
      | 'bg-color-5'
      | 'bg-color-disabled'
      | 'border-color-1'
      | 'border-color-2'
      | 'border-color-disabled'
      | 'shadow-color';
  };
  breakpoints: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  border: {
    radius:
      | 'none'
      | 'sm'
      | 'default'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | '3xl'
      | 'full';
    width: '0' | '2' | '4' | '8' | 'default';
  };
  effects: {
    boxShadow:
      | 'xs'
      | 'sm'
      | 'md'
      | 'default'
      | 'lg'
      | 'xl'
      | 'x2'
      | 'inner'
      | 'outline'
      | 'none';
  };
  flexbox: {
    flex: '1' | 'auto' | 'initial' | 'none';
    gridAutoColumns: 'auto' | 'min' | 'max' | 'fr';
    gridAutoRows: 'auto' | 'min' | 'max' | 'fr';
    gridColumn:
      | 'auto'
      | 'span-1'
      | 'span-2'
      | 'span-3'
      | 'span-4'
      | 'span-5'
      | 'span-6'
      | 'span-7'
      | 'span-8'
      | 'span-9'
      | 'span-10'
      | 'span-11'
      | 'span-12'
      | 'span-full';
    gridRow:
      | 'auto'
      | 'span-1'
      | 'span-2'
      | 'span-3'
      | 'span-4'
      | 'span-5'
      | 'span-6'
      | 'span-full';
    gridTemplateColumns:
      | '1'
      | '2'
      | '3'
      | '4'
      | '5'
      | '6'
      | '7'
      | '8'
      | '9'
      | '10'
      | '11'
      | '12'
      | 'none';
    gridTemplateRows: '1' | '2' | '3' | '4' | '5' | '6' | 'none';
    order:
      | '1'
      | '2'
      | '3'
      | '4'
      | '5'
      | '6'
      | '7'
      | '8'
      | '9'
      | '10'
      | '11'
      | '12'
      | 'first'
      | 'last'
      | 'none';
  };
  interactivity: { outline: 'none' | 'white' | 'black' };
  filters: {
    blur:
      | '0'
      | '1'
      | '2'
      | '3'
      | '4'
      | '5'
      | '6'
      | '7'
      | '8'
      | '9'
      | '10'
      | '11'
      | '12'
      | '14'
      | '16'
      | '20'
      | '24'
      | '28'
      | '32'
      | '36'
      | '40'
      | '44'
      | '48'
      | '52'
      | '56'
      | '60'
      | '64'
      | '72'
      | '80'
      | '96'
      | 'px'
      | '0.5'
      | '1.5'
      | '2.5'
      | '3.5'
      | 'none'
      | 'sm'
      | 'md'
      | 'default'
      | 'lg'
      | 'xl'
      | '2x'
      | '3x';
    brightness:
      | '0'
      | '25'
      | '50'
      | '75'
      | '90'
      | '95'
      | '100'
      | '105'
      | '110'
      | '125'
      | '150'
      | '200';
    contrast:
      | '0'
      | '25'
      | '50'
      | '75'
      | '90'
      | '95'
      | '100'
      | '105'
      | '110'
      | '125'
      | '150'
      | '200';
    dropShadow: 'sm' | 'default' | 'md' | 'lg' | 'xl' | '2x' | 'none';
    grayscale: '0' | 'default';
    hueRotate: '0' | '15' | '30' | '60' | '90' | '180';
    invert: '0' | 'default';
    saturate:
      | '0'
      | '25'
      | '50'
      | '75'
      | '90'
      | '95'
      | '100'
      | '105'
      | '110'
      | '125'
      | '150'
      | '200';
    sepia: '0' | 'default';
    backdropBlur:
      | '0'
      | '1'
      | '2'
      | '3'
      | '4'
      | '5'
      | '6'
      | '7'
      | '8'
      | '9'
      | '10'
      | '11'
      | '12'
      | '14'
      | '16'
      | '20'
      | '24'
      | '28'
      | '32'
      | '36'
      | '40'
      | '44'
      | '48'
      | '52'
      | '56'
      | '60'
      | '64'
      | '72'
      | '80'
      | '96'
      | 'px'
      | '0.5'
      | '1.5'
      | '2.5'
      | '3.5'
      | 'none'
      | 'sm'
      | 'md'
      | 'default'
      | 'lg'
      | 'xl'
      | '2x'
      | '3x';
    backdropBrightness:
      | '0'
      | '25'
      | '50'
      | '75'
      | '90'
      | '95'
      | '100'
      | '105'
      | '110'
      | '125'
      | '150'
      | '200';
    backdropContrast:
      | '0'
      | '25'
      | '50'
      | '75'
      | '90'
      | '95'
      | '100'
      | '105'
      | '110'
      | '125'
      | '150'
      | '200';
    backdropGrayscale: '0' | 'default';
    backdropHueRotate: '0' | '15' | '30' | '60' | '90' | '180';
    backdropInvert: '0' | 'default';
    backdropOpacity:
      | '0'
      | '1'
      | '2'
      | '3'
      | '4'
      | '5'
      | '6'
      | '7'
      | '8'
      | '9'
      | '10'
      | '11'
      | '12'
      | '13'
      | '14'
      | '15'
      | '16'
      | '17'
      | '18'
      | '19'
      | '20'
      | '21'
      | '22'
      | '23'
      | '24'
      | '25'
      | '26'
      | '27'
      | '28'
      | '29'
      | '30'
      | '31'
      | '32'
      | '33'
      | '34'
      | '35'
      | '36'
      | '37'
      | '38'
      | '39'
      | '40'
      | '41'
      | '42'
      | '43'
      | '44'
      | '45'
      | '46'
      | '47'
      | '48'
      | '49'
      | '50'
      | '51'
      | '52'
      | '53'
      | '54'
      | '55'
      | '56'
      | '57'
      | '58'
      | '59'
      | '60'
      | '61'
      | '62'
      | '63'
      | '64'
      | '65'
      | '66'
      | '67'
      | '68'
      | '69'
      | '70'
      | '71'
      | '72'
      | '73'
      | '74'
      | '75'
      | '76'
      | '77'
      | '78'
      | '79'
      | '80'
      | '81'
      | '82'
      | '83'
      | '84'
      | '85'
      | '86'
      | '87'
      | '88'
      | '89'
      | '90'
      | '91'
      | '92'
      | '93'
      | '94'
      | '95'
      | '96'
      | '97'
      | '98'
      | '99'
      | '100';
    backdropSaturate:
      | '0'
      | '25'
      | '50'
      | '75'
      | '90'
      | '95'
      | '100'
      | '105'
      | '110'
      | '125'
      | '150'
      | '200';
    backdropSepia: '0' | 'default';
  };
  opacity:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '23'
    | '24'
    | '25'
    | '26'
    | '27'
    | '28'
    | '29'
    | '30'
    | '31'
    | '32'
    | '33'
    | '34'
    | '35'
    | '36'
    | '37'
    | '38'
    | '39'
    | '40'
    | '41'
    | '42'
    | '43'
    | '44'
    | '45'
    | '46'
    | '47'
    | '48'
    | '49'
    | '50'
    | '51'
    | '52'
    | '53'
    | '54'
    | '55'
    | '56'
    | '57'
    | '58'
    | '59'
    | '60'
    | '61'
    | '62'
    | '63'
    | '64'
    | '65'
    | '66'
    | '67'
    | '68'
    | '69'
    | '70'
    | '71'
    | '72'
    | '73'
    | '74'
    | '75'
    | '76'
    | '77'
    | '78'
    | '79'
    | '80'
    | '81'
    | '82'
    | '83'
    | '84'
    | '85'
    | '86'
    | '87'
    | '88'
    | '89'
    | '90'
    | '91'
    | '92'
    | '93'
    | '94'
    | '95'
    | '96'
    | '97'
    | '98'
    | '99'
    | '100';
  sizing: {
    height:
      | '0'
      | '1'
      | '2'
      | '3'
      | '4'
      | '5'
      | '6'
      | '7'
      | '8'
      | '9'
      | '10'
      | '11'
      | '12'
      | '14'
      | '16'
      | '20'
      | '24'
      | '28'
      | '32'
      | '36'
      | '40'
      | '44'
      | '48'
      | '52'
      | '56'
      | '60'
      | '64'
      | '72'
      | '80'
      | '96'
      | 'auto'
      | 'px'
      | '0.5'
      | '1.5'
      | '2.5'
      | '3.5'
      | 'full'
      | 'screen';
    maxHeight: 'full' | 'screen';
    maxWidth:
      | 'none'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | '2xl'
      | '3xl'
      | '4xl'
      | '5xl'
      | '6xl'
      | 'full'
      | 'screen-sm'
      | 'screen-md'
      | 'screen-lg'
      | 'screen-xl'
      | 'screen-xxl';
    minHeight: '0' | 'full' | 'screen';
    minWidth: '0' | 'full';
    width:
      | '0'
      | '1'
      | '2'
      | '3'
      | '4'
      | '5'
      | '6'
      | '7'
      | '8'
      | '9'
      | '10'
      | '11'
      | '12'
      | '14'
      | '16'
      | '20'
      | '24'
      | '28'
      | '32'
      | '36'
      | '40'
      | '44'
      | '48'
      | '52'
      | '56'
      | '60'
      | '64'
      | '72'
      | '80'
      | '96'
      | 'auto'
      | 'px'
      | '0.5'
      | '1.5'
      | '2.5'
      | '3.5'
      | '1/2'
      | '1/3'
      | '2/3'
      | '1/4'
      | '2/4'
      | '3/4'
      | '1/5'
      | '2/5'
      | '3/5'
      | '4/5'
      | '1/6'
      | '2/6'
      | '3/6'
      | '4/6'
      | '5/6'
      | '1/12'
      | '2/12'
      | '3/12'
      | '4/12'
      | '5/12'
      | '6/12'
      | '7/12'
      | '8/12'
      | '9/12'
      | '10/12'
      | '11/12'
      | 'full'
      | 'screen';
  };
  spacing: {
    positive:
      | '0'
      | '1'
      | '2'
      | '3'
      | '4'
      | '5'
      | '6'
      | '7'
      | '8'
      | '9'
      | '10'
      | '11'
      | '12'
      | '14'
      | '16'
      | '20'
      | '24'
      | '28'
      | '32'
      | '36'
      | '40'
      | '44'
      | '48'
      | '52'
      | '56'
      | '60'
      | '64'
      | '72'
      | '80'
      | '96'
      | 'px'
      | '0.5'
      | '1.5'
      | '2.5'
      | '3.5';
    positiveNegative:
      | '0'
      | '1'
      | '2'
      | '3'
      | '4'
      | '5'
      | '6'
      | '7'
      | '8'
      | '9'
      | '10'
      | '11'
      | '12'
      | '14'
      | '16'
      | '20'
      | '24'
      | '28'
      | '32'
      | '36'
      | '40'
      | '44'
      | '48'
      | '52'
      | '56'
      | '60'
      | '64'
      | '72'
      | '80'
      | '96'
      | 'px'
      | '0.5'
      | '1.5'
      | '2.5'
      | '3.5'
      | '-0'
      | '-1'
      | '-2'
      | '-3'
      | '-4'
      | '-5'
      | '-6'
      | '-7'
      | '-8'
      | '-9'
      | '-10'
      | '-11'
      | '-12'
      | '-14'
      | '-16'
      | '-20'
      | '-24'
      | '-28'
      | '-32'
      | '-36'
      | '-40'
      | '-44'
      | '-48'
      | '-52'
      | '-56'
      | '-60'
      | '-64'
      | '-72'
      | '-80'
      | '-96'
      | '-px'
      | '-0.5'
      | '-1.5'
      | '-2.5'
      | '-3.5';
  };
  transform: {
    scale:
      | '0'
      | '50'
      | '75'
      | '90'
      | '95'
      | '100'
      | '105'
      | '110'
      | '125'
      | '150';
    rotate:
      | '0'
      | '1'
      | '2'
      | '3'
      | '6'
      | '12'
      | '45'
      | '90'
      | '180'
      | '-180'
      | '-90'
      | '-45'
      | '-12'
      | '-6'
      | '-3'
      | '-2'
      | '-1';
    translate:
      | '0'
      | '1'
      | '2'
      | '3'
      | '4'
      | '5'
      | '6'
      | '7'
      | '8'
      | '9'
      | '10'
      | '11'
      | '12'
      | '14'
      | '16'
      | '20'
      | '24'
      | '28'
      | '32'
      | '36'
      | '40'
      | '44'
      | '48'
      | '52'
      | '56'
      | '60'
      | '64'
      | '72'
      | '80'
      | '96'
      | 'px'
      | '0.5'
      | '1.5'
      | '2.5'
      | '3.5'
      | '-0'
      | '-1'
      | '-2'
      | '-3'
      | '-4'
      | '-5'
      | '-6'
      | '-7'
      | '-8'
      | '-9'
      | '-10'
      | '-11'
      | '-12'
      | '-14'
      | '-16'
      | '-20'
      | '-24'
      | '-28'
      | '-32'
      | '-36'
      | '-40'
      | '-44'
      | '-48'
      | '-52'
      | '-56'
      | '-60'
      | '-64'
      | '-72'
      | '-80'
      | '-96'
      | '-px'
      | '-0.5'
      | '-1.5'
      | '-2.5'
      | '-3.5'
      | '-full'
      | '-1/2'
      | '1/2'
      | 'full';
    skew:
      | '0'
      | '1'
      | '2'
      | '3'
      | '6'
      | '12'
      | '-12'
      | '-6'
      | '-3'
      | '-2'
      | '-1';
  };
  transition: {
    transitionProperty:
      | 'none'
      | 'all'
      | 'default'
      | 'colors'
      | 'opacity'
      | 'shadow'
      | 'transform';
    ease: 'linear' | 'in' | 'out' | 'in-out';
    duration: '75' | '100' | '150' | '200' | '300' | '500' | '700' | '1000';
    delay: '75' | '100' | '150' | '200' | '300' | '500' | '700' | '1000';
    animation: 'none' | 'spin' | 'ping' | 'pulse' | 'bounce';
    keyframes: 'spin' | 'ping' | 'pulse' | 'bounce';
  };
  typography: {
    font: 'sans' | 'serif' | 'mono';
    fontSize:
      | 'xs'
      | 'sm'
      | 'md'
      | 'base'
      | 'lg'
      | 'xl'
      | 'x2'
      | 'x3'
      | 'x4'
      | 'x5'
      | 'x6'
      | 'x7'
      | 'x8'
      | 'x9';
    letterSpacing: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
    lineHeight:
      | '3'
      | '4'
      | '5'
      | '6'
      | '7'
      | '8'
      | '9'
      | '10'
      | 'none'
      | 'tight'
      | 'snug'
      | 'normal'
      | 'relaxed'
      | 'loose';
  };
}
