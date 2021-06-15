import { render } from '@testing-library/react';

import App5component26 from './app5component26';

describe('App5component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component26 />);
    expect(baseElement).toBeTruthy();
  });
});
