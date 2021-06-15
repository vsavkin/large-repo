import { render } from '@testing-library/react';

import App19component15 from './app19component15';

describe('App19component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component15 />);
    expect(baseElement).toBeTruthy();
  });
});
