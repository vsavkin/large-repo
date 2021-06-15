import { render } from '@testing-library/react';

import App6component30 from './app6component30';

describe('App6component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component30 />);
    expect(baseElement).toBeTruthy();
  });
});
