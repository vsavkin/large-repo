import { render } from '@testing-library/react';

import App14component8 from './app14component8';

describe('App14component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component8 />);
    expect(baseElement).toBeTruthy();
  });
});
