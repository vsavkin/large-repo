import { render } from '@testing-library/react';

import App3component25 from './app3component25';

describe('App3component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component25 />);
    expect(baseElement).toBeTruthy();
  });
});
