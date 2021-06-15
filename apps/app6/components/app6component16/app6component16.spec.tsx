import { render } from '@testing-library/react';

import App6component16 from './app6component16';

describe('App6component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component16 />);
    expect(baseElement).toBeTruthy();
  });
});
