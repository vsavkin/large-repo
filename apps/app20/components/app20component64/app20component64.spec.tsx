import { render } from '@testing-library/react';

import App20component64 from './app20component64';

describe('App20component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component64 />);
    expect(baseElement).toBeTruthy();
  });
});
