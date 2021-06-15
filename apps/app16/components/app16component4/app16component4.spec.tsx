import { render } from '@testing-library/react';

import App16component4 from './app16component4';

describe('App16component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component4 />);
    expect(baseElement).toBeTruthy();
  });
});
