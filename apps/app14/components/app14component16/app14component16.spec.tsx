import { render } from '@testing-library/react';

import App14component16 from './app14component16';

describe('App14component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component16 />);
    expect(baseElement).toBeTruthy();
  });
});
