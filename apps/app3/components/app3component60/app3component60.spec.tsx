import { render } from '@testing-library/react';

import App3component60 from './app3component60';

describe('App3component60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component60 />);
    expect(baseElement).toBeTruthy();
  });
});
