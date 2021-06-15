import { render } from '@testing-library/react';

import App14component20 from './app14component20';

describe('App14component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component20 />);
    expect(baseElement).toBeTruthy();
  });
});
