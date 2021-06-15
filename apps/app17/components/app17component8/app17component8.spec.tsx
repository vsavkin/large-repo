import { render } from '@testing-library/react';

import App17component8 from './app17component8';

describe('App17component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component8 />);
    expect(baseElement).toBeTruthy();
  });
});
