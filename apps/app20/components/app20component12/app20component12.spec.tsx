import { render } from '@testing-library/react';

import App20component12 from './app20component12';

describe('App20component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component12 />);
    expect(baseElement).toBeTruthy();
  });
});
