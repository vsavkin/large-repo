import { render } from '@testing-library/react';

import App14component6 from './app14component6';

describe('App14component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component6 />);
    expect(baseElement).toBeTruthy();
  });
});
