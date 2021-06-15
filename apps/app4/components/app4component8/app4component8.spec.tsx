import { render } from '@testing-library/react';

import App4component8 from './app4component8';

describe('App4component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component8 />);
    expect(baseElement).toBeTruthy();
  });
});
