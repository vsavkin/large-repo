import { render } from '@testing-library/react';

import App20component7 from './app20component7';

describe('App20component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component7 />);
    expect(baseElement).toBeTruthy();
  });
});
