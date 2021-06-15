import { render } from '@testing-library/react';

import App20component41 from './app20component41';

describe('App20component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component41 />);
    expect(baseElement).toBeTruthy();
  });
});
