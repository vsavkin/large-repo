import { render } from '@testing-library/react';

import App20component50 from './app20component50';

describe('App20component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component50 />);
    expect(baseElement).toBeTruthy();
  });
});
