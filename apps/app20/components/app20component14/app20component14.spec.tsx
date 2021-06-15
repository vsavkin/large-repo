import { render } from '@testing-library/react';

import App20component14 from './app20component14';

describe('App20component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component14 />);
    expect(baseElement).toBeTruthy();
  });
});
