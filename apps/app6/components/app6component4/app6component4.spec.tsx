import { render } from '@testing-library/react';

import App6component4 from './app6component4';

describe('App6component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component4 />);
    expect(baseElement).toBeTruthy();
  });
});
