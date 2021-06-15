import { render } from '@testing-library/react';

import App3component89 from './app3component89';

describe('App3component89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component89 />);
    expect(baseElement).toBeTruthy();
  });
});
