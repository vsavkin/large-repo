import { render } from '@testing-library/react';

import App6component8 from './app6component8';

describe('App6component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component8 />);
    expect(baseElement).toBeTruthy();
  });
});
