import { render } from '@testing-library/react';

import App5component51 from './app5component51';

describe('App5component51', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component51 />);
    expect(baseElement).toBeTruthy();
  });
});
