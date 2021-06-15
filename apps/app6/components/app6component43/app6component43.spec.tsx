import { render } from '@testing-library/react';

import App6component43 from './app6component43';

describe('App6component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component43 />);
    expect(baseElement).toBeTruthy();
  });
});
