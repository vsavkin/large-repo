import { render } from '@testing-library/react';

import App8component8 from './app8component8';

describe('App8component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component8 />);
    expect(baseElement).toBeTruthy();
  });
});
