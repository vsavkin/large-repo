import { render } from '@testing-library/react';

import App20component6 from './app20component6';

describe('App20component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component6 />);
    expect(baseElement).toBeTruthy();
  });
});
