import { render } from '@testing-library/react';

import App19component2 from './app19component2';

describe('App19component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component2 />);
    expect(baseElement).toBeTruthy();
  });
});
