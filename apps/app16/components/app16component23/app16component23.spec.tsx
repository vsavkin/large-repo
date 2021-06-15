import { render } from '@testing-library/react';

import App16component23 from './app16component23';

describe('App16component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component23 />);
    expect(baseElement).toBeTruthy();
  });
});
