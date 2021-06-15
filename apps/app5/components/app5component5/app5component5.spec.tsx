import { render } from '@testing-library/react';

import App5component5 from './app5component5';

describe('App5component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component5 />);
    expect(baseElement).toBeTruthy();
  });
});
