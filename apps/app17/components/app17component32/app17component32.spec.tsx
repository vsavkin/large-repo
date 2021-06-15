import { render } from '@testing-library/react';

import App17component32 from './app17component32';

describe('App17component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component32 />);
    expect(baseElement).toBeTruthy();
  });
});
