import { render } from '@testing-library/react';

import App5component60 from './app5component60';

describe('App5component60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component60 />);
    expect(baseElement).toBeTruthy();
  });
});
