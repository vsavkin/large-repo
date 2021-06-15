import { render } from '@testing-library/react';

import App5component65 from './app5component65';

describe('App5component65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component65 />);
    expect(baseElement).toBeTruthy();
  });
});
