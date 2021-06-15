import { render } from '@testing-library/react';

import App3component8 from './app3component8';

describe('App3component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component8 />);
    expect(baseElement).toBeTruthy();
  });
});
