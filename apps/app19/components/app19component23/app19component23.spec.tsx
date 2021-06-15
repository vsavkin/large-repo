import { render } from '@testing-library/react';

import App19component23 from './app19component23';

describe('App19component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component23 />);
    expect(baseElement).toBeTruthy();
  });
});
