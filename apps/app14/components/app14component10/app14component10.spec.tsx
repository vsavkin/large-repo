import { render } from '@testing-library/react';

import App14component10 from './app14component10';

describe('App14component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component10 />);
    expect(baseElement).toBeTruthy();
  });
});
