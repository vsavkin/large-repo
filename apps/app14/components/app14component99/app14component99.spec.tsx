import { render } from '@testing-library/react';

import App14component99 from './app14component99';

describe('App14component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component99 />);
    expect(baseElement).toBeTruthy();
  });
});
