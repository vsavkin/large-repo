import { render } from '@testing-library/react';

import App6component25 from './app6component25';

describe('App6component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component25 />);
    expect(baseElement).toBeTruthy();
  });
});
