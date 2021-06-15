import { render } from '@testing-library/react';

import App3component50 from './app3component50';

describe('App3component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component50 />);
    expect(baseElement).toBeTruthy();
  });
});
