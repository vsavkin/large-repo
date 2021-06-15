import { render } from '@testing-library/react';

import App12component90 from './app12component90';

describe('App12component90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component90 />);
    expect(baseElement).toBeTruthy();
  });
});
