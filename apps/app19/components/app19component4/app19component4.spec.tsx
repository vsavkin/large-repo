import { render } from '@testing-library/react';

import App19component4 from './app19component4';

describe('App19component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component4 />);
    expect(baseElement).toBeTruthy();
  });
});
