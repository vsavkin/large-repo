import { render } from '@testing-library/react';

import App17component16 from './app17component16';

describe('App17component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component16 />);
    expect(baseElement).toBeTruthy();
  });
});
