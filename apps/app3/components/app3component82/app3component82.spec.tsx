import { render } from '@testing-library/react';

import App3component82 from './app3component82';

describe('App3component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component82 />);
    expect(baseElement).toBeTruthy();
  });
});
