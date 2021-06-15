import { render } from '@testing-library/react';

import App5component92 from './app5component92';

describe('App5component92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component92 />);
    expect(baseElement).toBeTruthy();
  });
});
