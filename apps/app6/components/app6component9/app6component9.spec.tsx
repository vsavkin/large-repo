import { render } from '@testing-library/react';

import App6component9 from './app6component9';

describe('App6component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component9 />);
    expect(baseElement).toBeTruthy();
  });
});
