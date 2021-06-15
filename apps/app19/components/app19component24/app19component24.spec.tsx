import { render } from '@testing-library/react';

import App19component24 from './app19component24';

describe('App19component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component24 />);
    expect(baseElement).toBeTruthy();
  });
});
