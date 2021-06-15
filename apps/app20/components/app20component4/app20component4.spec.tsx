import { render } from '@testing-library/react';

import App20component4 from './app20component4';

describe('App20component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component4 />);
    expect(baseElement).toBeTruthy();
  });
});
