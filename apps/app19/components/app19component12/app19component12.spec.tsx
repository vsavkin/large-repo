import { render } from '@testing-library/react';

import App19component12 from './app19component12';

describe('App19component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component12 />);
    expect(baseElement).toBeTruthy();
  });
});
