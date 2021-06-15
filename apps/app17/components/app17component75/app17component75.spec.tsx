import { render } from '@testing-library/react';

import App17component75 from './app17component75';

describe('App17component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component75 />);
    expect(baseElement).toBeTruthy();
  });
});
