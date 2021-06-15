import { render } from '@testing-library/react';

import App6component23 from './app6component23';

describe('App6component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component23 />);
    expect(baseElement).toBeTruthy();
  });
});
