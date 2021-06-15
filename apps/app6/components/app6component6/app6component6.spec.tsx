import { render } from '@testing-library/react';

import App6component6 from './app6component6';

describe('App6component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component6 />);
    expect(baseElement).toBeTruthy();
  });
});
