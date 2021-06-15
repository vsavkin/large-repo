import { render } from '@testing-library/react';

import App14component24 from './app14component24';

describe('App14component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component24 />);
    expect(baseElement).toBeTruthy();
  });
});
