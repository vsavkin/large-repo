import { render } from '@testing-library/react';

import App6component22 from './app6component22';

describe('App6component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component22 />);
    expect(baseElement).toBeTruthy();
  });
});
