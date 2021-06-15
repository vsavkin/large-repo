import { render } from '@testing-library/react';

import App14component12 from './app14component12';

describe('App14component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component12 />);
    expect(baseElement).toBeTruthy();
  });
});
