import { render } from '@testing-library/react';

import App16component11 from './app16component11';

describe('App16component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component11 />);
    expect(baseElement).toBeTruthy();
  });
});
