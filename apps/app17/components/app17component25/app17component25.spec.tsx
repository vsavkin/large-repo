import { render } from '@testing-library/react';

import App17component25 from './app17component25';

describe('App17component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component25 />);
    expect(baseElement).toBeTruthy();
  });
});
