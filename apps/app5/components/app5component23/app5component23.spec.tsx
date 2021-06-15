import { render } from '@testing-library/react';

import App5component23 from './app5component23';

describe('App5component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component23 />);
    expect(baseElement).toBeTruthy();
  });
});
