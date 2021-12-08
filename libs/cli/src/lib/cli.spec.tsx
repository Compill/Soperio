import { render } from '@testing-library/react';

import Cli from './cli';

describe('Cli', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cli />);
    expect(baseElement).toBeTruthy();
  });
});
