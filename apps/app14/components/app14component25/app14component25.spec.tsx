import { render } from '@testing-library/react';

import App14component25 from './app14component25';

describe('App14component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component25 />);
    expect(baseElement).toBeTruthy();
  });
});
