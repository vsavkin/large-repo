import { render } from '@testing-library/react';

import App3component31 from './app3component31';

describe('App3component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component31 />);
    expect(baseElement).toBeTruthy();
  });
});
