import { render } from '@testing-library/react';

import App16component30 from './app16component30';

describe('App16component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component30 />);
    expect(baseElement).toBeTruthy();
  });
});
