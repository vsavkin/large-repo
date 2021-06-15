import { render } from '@testing-library/react';

import App14component32 from './app14component32';

describe('App14component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component32 />);
    expect(baseElement).toBeTruthy();
  });
});
