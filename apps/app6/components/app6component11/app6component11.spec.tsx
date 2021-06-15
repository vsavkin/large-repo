import { render } from '@testing-library/react';

import App6component11 from './app6component11';

describe('App6component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component11 />);
    expect(baseElement).toBeTruthy();
  });
});
