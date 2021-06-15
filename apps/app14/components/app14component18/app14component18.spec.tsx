import { render } from '@testing-library/react';

import App14component18 from './app14component18';

describe('App14component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component18 />);
    expect(baseElement).toBeTruthy();
  });
});
