import { render } from '@testing-library/react';

import App3component15 from './app3component15';

describe('App3component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component15 />);
    expect(baseElement).toBeTruthy();
  });
});
