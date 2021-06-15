import { render } from '@testing-library/react';

import App14component5 from './app14component5';

describe('App14component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component5 />);
    expect(baseElement).toBeTruthy();
  });
});
