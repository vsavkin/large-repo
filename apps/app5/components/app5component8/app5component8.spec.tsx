import { render } from '@testing-library/react';

import App5component8 from './app5component8';

describe('App5component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component8 />);
    expect(baseElement).toBeTruthy();
  });
});
