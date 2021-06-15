import { render } from '@testing-library/react';

import App16component26 from './app16component26';

describe('App16component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component26 />);
    expect(baseElement).toBeTruthy();
  });
});
