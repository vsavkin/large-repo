import { render } from '@testing-library/react';

import App17component20 from './app17component20';

describe('App17component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component20 />);
    expect(baseElement).toBeTruthy();
  });
});
