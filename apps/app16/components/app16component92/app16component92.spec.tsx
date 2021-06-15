import { render } from '@testing-library/react';

import App16component92 from './app16component92';

describe('App16component92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component92 />);
    expect(baseElement).toBeTruthy();
  });
});
