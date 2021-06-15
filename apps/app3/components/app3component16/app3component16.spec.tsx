import { render } from '@testing-library/react';

import App3component16 from './app3component16';

describe('App3component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component16 />);
    expect(baseElement).toBeTruthy();
  });
});
