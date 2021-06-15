import { render } from '@testing-library/react';

import App16component8 from './app16component8';

describe('App16component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component8 />);
    expect(baseElement).toBeTruthy();
  });
});
