import { render } from '@testing-library/react';

import App17component82 from './app17component82';

describe('App17component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component82 />);
    expect(baseElement).toBeTruthy();
  });
});
