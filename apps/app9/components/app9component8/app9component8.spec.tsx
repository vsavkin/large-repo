import { render } from '@testing-library/react';

import App9component8 from './app9component8';

describe('App9component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component8 />);
    expect(baseElement).toBeTruthy();
  });
});
