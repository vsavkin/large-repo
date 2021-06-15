import { render } from '@testing-library/react';

import App16component40 from './app16component40';

describe('App16component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component40 />);
    expect(baseElement).toBeTruthy();
  });
});
