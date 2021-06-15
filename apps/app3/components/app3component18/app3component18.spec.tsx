import { render } from '@testing-library/react';

import App3component18 from './app3component18';

describe('App3component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component18 />);
    expect(baseElement).toBeTruthy();
  });
});
