import { render } from '@testing-library/react';

import App14component50 from './app14component50';

describe('App14component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component50 />);
    expect(baseElement).toBeTruthy();
  });
});
