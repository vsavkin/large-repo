import { render } from '@testing-library/react';

import App14component9 from './app14component9';

describe('App14component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component9 />);
    expect(baseElement).toBeTruthy();
  });
});
