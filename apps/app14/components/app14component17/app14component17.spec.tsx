import { render } from '@testing-library/react';

import App14component17 from './app14component17';

describe('App14component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component17 />);
    expect(baseElement).toBeTruthy();
  });
});
