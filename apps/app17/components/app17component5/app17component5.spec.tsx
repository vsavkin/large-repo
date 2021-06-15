import { render } from '@testing-library/react';

import App17component5 from './app17component5';

describe('App17component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component5 />);
    expect(baseElement).toBeTruthy();
  });
});
