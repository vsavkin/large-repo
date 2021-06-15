import { render } from '@testing-library/react';

import App3component65 from './app3component65';

describe('App3component65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component65 />);
    expect(baseElement).toBeTruthy();
  });
});
