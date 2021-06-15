import { render } from '@testing-library/react';

import App14component14 from './app14component14';

describe('App14component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component14 />);
    expect(baseElement).toBeTruthy();
  });
});
