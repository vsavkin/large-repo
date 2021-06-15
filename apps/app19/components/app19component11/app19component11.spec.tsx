import { render } from '@testing-library/react';

import App19component11 from './app19component11';

describe('App19component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component11 />);
    expect(baseElement).toBeTruthy();
  });
});
