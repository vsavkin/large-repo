import { render } from '@testing-library/react';

import App5component98 from './app5component98';

describe('App5component98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component98 />);
    expect(baseElement).toBeTruthy();
  });
});
