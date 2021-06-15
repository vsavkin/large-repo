import { render } from '@testing-library/react';

import App3component75 from './app3component75';

describe('App3component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component75 />);
    expect(baseElement).toBeTruthy();
  });
});
