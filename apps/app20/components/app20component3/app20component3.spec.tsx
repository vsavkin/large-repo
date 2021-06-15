import { render } from '@testing-library/react';

import App20component3 from './app20component3';

describe('App20component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component3 />);
    expect(baseElement).toBeTruthy();
  });
});
