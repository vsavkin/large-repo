import { render } from '@testing-library/react';

import App3component14 from './app3component14';

describe('App3component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component14 />);
    expect(baseElement).toBeTruthy();
  });
});
