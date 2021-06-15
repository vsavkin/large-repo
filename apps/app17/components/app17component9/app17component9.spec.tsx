import { render } from '@testing-library/react';

import App17component9 from './app17component9';

describe('App17component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component9 />);
    expect(baseElement).toBeTruthy();
  });
});
