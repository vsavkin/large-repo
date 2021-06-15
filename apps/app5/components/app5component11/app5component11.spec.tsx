import { render } from '@testing-library/react';

import App5component11 from './app5component11';

describe('App5component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component11 />);
    expect(baseElement).toBeTruthy();
  });
});
