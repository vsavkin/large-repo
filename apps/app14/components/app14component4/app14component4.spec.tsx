import { render } from '@testing-library/react';

import App14component4 from './app14component4';

describe('App14component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component4 />);
    expect(baseElement).toBeTruthy();
  });
});
