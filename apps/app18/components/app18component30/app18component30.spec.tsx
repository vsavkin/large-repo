import { render } from '@testing-library/react';

import App18component30 from './app18component30';

describe('App18component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component30 />);
    expect(baseElement).toBeTruthy();
  });
});
