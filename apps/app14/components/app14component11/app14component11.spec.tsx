import { render } from '@testing-library/react';

import App14component11 from './app14component11';

describe('App14component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component11 />);
    expect(baseElement).toBeTruthy();
  });
});
