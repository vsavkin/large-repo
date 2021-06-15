import { render } from '@testing-library/react';

import App20component21 from './app20component21';

describe('App20component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component21 />);
    expect(baseElement).toBeTruthy();
  });
});
