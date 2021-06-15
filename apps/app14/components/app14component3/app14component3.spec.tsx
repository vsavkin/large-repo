import { render } from '@testing-library/react';

import App14component3 from './app14component3';

describe('App14component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component3 />);
    expect(baseElement).toBeTruthy();
  });
});
