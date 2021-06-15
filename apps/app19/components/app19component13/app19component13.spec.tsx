import { render } from '@testing-library/react';

import App19component13 from './app19component13';

describe('App19component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component13 />);
    expect(baseElement).toBeTruthy();
  });
});
