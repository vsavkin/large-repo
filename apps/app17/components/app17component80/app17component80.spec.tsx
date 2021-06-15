import { render } from '@testing-library/react';

import App17component80 from './app17component80';

describe('App17component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component80 />);
    expect(baseElement).toBeTruthy();
  });
});
