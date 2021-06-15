import { render } from '@testing-library/react';

import App14component2 from './app14component2';

describe('App14component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component2 />);
    expect(baseElement).toBeTruthy();
  });
});
