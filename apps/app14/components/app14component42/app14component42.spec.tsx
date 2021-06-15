import { render } from '@testing-library/react';

import App14component42 from './app14component42';

describe('App14component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component42 />);
    expect(baseElement).toBeTruthy();
  });
});
