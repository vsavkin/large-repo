import { render } from '@testing-library/react';

import App14component7 from './app14component7';

describe('App14component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App14component7 />);
    expect(baseElement).toBeTruthy();
  });
});
