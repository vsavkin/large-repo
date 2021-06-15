import { render } from '@testing-library/react';

import App16component98 from './app16component98';

describe('App16component98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component98 />);
    expect(baseElement).toBeTruthy();
  });
});
