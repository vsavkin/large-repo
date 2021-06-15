import { render } from '@testing-library/react';

import App3component26 from './app3component26';

describe('App3component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component26 />);
    expect(baseElement).toBeTruthy();
  });
});
