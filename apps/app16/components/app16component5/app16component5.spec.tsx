import { render } from '@testing-library/react';

import App16component5 from './app16component5';

describe('App16component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component5 />);
    expect(baseElement).toBeTruthy();
  });
});
