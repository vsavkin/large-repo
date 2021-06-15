import { render } from '@testing-library/react';

import App16component60 from './app16component60';

describe('App16component60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component60 />);
    expect(baseElement).toBeTruthy();
  });
});
