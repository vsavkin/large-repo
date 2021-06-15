import { render } from '@testing-library/react';

import App19component32 from './app19component32';

describe('App19component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component32 />);
    expect(baseElement).toBeTruthy();
  });
});
