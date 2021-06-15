import { render } from '@testing-library/react';

import App3component80 from './app3component80';

describe('App3component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component80 />);
    expect(baseElement).toBeTruthy();
  });
});
