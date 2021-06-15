import { render } from '@testing-library/react';

import App6component61 from './app6component61';

describe('App6component61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component61 />);
    expect(baseElement).toBeTruthy();
  });
});
