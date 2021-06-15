import { render } from '@testing-library/react';

import App14component23 from './app14component23';

describe('App14component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component23 />);
    expect(baseElement).toBeTruthy();
  });
});
