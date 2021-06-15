import { render } from '@testing-library/react';

import App3component9 from './app3component9';

describe('App3component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component9 />);
    expect(baseElement).toBeTruthy();
  });
});
