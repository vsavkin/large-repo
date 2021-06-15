import { render } from '@testing-library/react';

import App19component41 from './app19component41';

describe('App19component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component41 />);
    expect(baseElement).toBeTruthy();
  });
});
