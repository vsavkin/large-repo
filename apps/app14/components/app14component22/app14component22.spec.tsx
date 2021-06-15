import { render } from '@testing-library/react';

import App14component22 from './app14component22';

describe('App14component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component22 />);
    expect(baseElement).toBeTruthy();
  });
});
