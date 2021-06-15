import { render } from '@testing-library/react';

import App14component21 from './app14component21';

describe('App14component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component21 />);
    expect(baseElement).toBeTruthy();
  });
});
