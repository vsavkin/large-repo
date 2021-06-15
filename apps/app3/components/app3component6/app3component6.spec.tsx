import { render } from '@testing-library/react';

import App3component6 from './app3component6';

describe('App3component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component6 />);
    expect(baseElement).toBeTruthy();
  });
});
