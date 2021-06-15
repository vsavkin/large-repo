import { render } from '@testing-library/react';

import App14component1 from './app14component1';

describe('App14component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component1 />);
    expect(baseElement).toBeTruthy();
  });
});
