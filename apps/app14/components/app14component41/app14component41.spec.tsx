import { render } from '@testing-library/react';

import App14component41 from './app14component41';

describe('App14component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component41 />);
    expect(baseElement).toBeTruthy();
  });
});
