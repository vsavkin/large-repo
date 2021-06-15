import { render } from '@testing-library/react';

import App3component5 from './app3component5';

describe('App3component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component5 />);
    expect(baseElement).toBeTruthy();
  });
});
